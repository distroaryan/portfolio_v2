# Walgo

A persistent, crash-safe **key-value store** written in Go, built on top of a custom **Write-Ahead Log (WAL)** engine. Written from scratch to deeply understand how databases achieve durability — the WAL layer is fully hand-rolled with no external storage libraries.

---

## 🧠 Overview

Most databases don't write to their real data structures first — they write to a log. If the process crashes, the log is replayed to reconstruct state. Walgo implements exactly that pattern: a generic WAL engine paired with a simple in-memory KV store that is durable across restarts.

```text
┌──────────────────────────────────────┐
│              KV Store                │
│  GET / SET / DELETE / Recover        │
│  in-memory map[string]string         │
└──────────────┬───────────────────────┘
               │ every write
               ▼
┌──────────────────────────────────────┐
│         Write-Ahead Log (WAL)        │
│  segment-0 │ segment-1 │ segment-2   │
│  (binary encoded, CRC32 verified)    │
└──────────────────────────────────────┘
```

---

## ⚙️ WAL Engine

The core of the project — a fully self-contained Write-Ahead Log implementation.

- **Segmented log files** — log is split into numbered segment files that rotate automatically
- **Buffered writes** — uses `bufio.Writer` for batched I/O, with a background goroutine flushing every 500ms
- **Optional fsync** — configurable flag to force disk writes after every flush
- **CRC32 integrity** — every record is checksummed using `crc32.IEEE` over `(LSN + data)`, corrupt records are rejected
- **Log Sequence Numbers** — monotonically increasing LSN persisted across restarts
- **Graceful shutdown** — `Close()` cancels background sync via `context`, flushes, and closes cleanly

### WAL Record Format

Each record is stored as a length-prefixed binary blob:

```text
[ 4 bytes: record size ] [ 8 bytes: LSN ] [ 4 bytes: CRC32 ] [ N bytes: data ]
```

### Key API

```go
// Open or resume a WAL
wal, err := OpenWAL(dir, fsync, maxSize, maxSegments)

// Append a record
wal.WriteEntry(data)

// Flush buffer to kernel (optionally to disk)
wal.Sync()

// Read all records from a segment offset — used for crash recovery
records := wal.ReadAllLogsFromOffset(0)

// Clean shutdown
wal.Close()
```

---

## 🗄️ Key-Value Store

A concurrent in-memory KV store that uses the WAL for durability.

- **Write-ahead logging** — every `SET` and `DELETE` is logged before modifying the in-memory map
- **Crash recovery** — `Recover()` replays all WAL segments from offset 0 to rebuild state
- **Concurrent reads** — `sync.RWMutex` lets multiple goroutines read simultaneously
- **Serialized writes** — exclusive lock ensures safe concurrent modifications

```go
store := InitializeStore(dir)

store.SET("user:1", "aryan")
val := store.GET("user:1")
store.DELETE("user:1")

// After a crash, replay the WAL
store.Recover()
```

---

## 📊 Benchmarks

Benchmarks measure raw throughput using Go's `testing` package.

| Benchmark | Setup | What it measures |
|---|---|---|
| WAL Sequential Write | 10M entries, single goroutine | Raw sequential write throughput |
| WAL Read (Replay) | 10M entries pre-written | Read throughput from active segment |
| WAL Concurrent Write | 100 goroutines × 10K entries | Write throughput under lock contention |
| Store SET | 10M entries | End-to-end SET throughput (WAL + map) |
| Store GET | 10M entries pre-loaded | In-memory read throughput |
| Store Concurrent SET | 1000 goroutines × 10K entries | High-concurrency write throughput |

---

## 🔧 Tech Stack

| | |
|---|---|
| Language | Go |
| Serialization | `encoding/binary` (little-endian) + `encoding/json` |
| Integrity | `hash/crc32` (IEEE polynomial) |
| JSON parsing | `gjson` |
| Testing | `gotestsum` + `testify` |
