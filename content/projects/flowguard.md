# 🛡️ FlowGuard

A high-performance, thread-safe, and distributed rate limiter library for Go. Built with **Clean Architecture** principles — the core logic depends only on interfaces, so you can swap algorithms or storage backends without touching business logic.

Suitable for single-instance applications (In-Memory) and distributed microservices (Redis).

---

## 🚀 Features

- **Token Bucket** — standard implementation for allowing initial bursts while maintaining a steady rate
- **Sliding Window** — smooths traffic spikes using an approximated sliding window log
- **In-Memory Store** — thread-safe, granular locking (mutex-per-key) for high concurrency
- **Redis Store** — distributed spin-locks using `SET NX` for synchronizing limits across multiple server instances
- **Framework Ready** — native adapters for **net/http** (Standard Lib), **Fiber**, and **Echo**
- **Robust Testing** — includes integration tests and `miniredis` support for isolated backend testing

---

## 🏗️ Architecture

The entire system follows the **Dependency Inversion Principle**. Middleware depends on a `Limiter` interface, algorithms implement that interface, and each algorithm depends on a `Store` interface — never on a concrete implementation.

```text
User / HTTP Request
       │
       ▼
  Middleware Layer
       │
       ▼
  Limiter Interface  ◄──  Token Bucket  │  Sliding Window
       │
       ▼
  Store Interface    ◄──  Memory Store  │  Redis Store
```

This means adding a new algorithm (e.g. Leaky Bucket) or a new backend (e.g. Postgres) requires zero changes to existing code — just implement the interface.

---

## ⚡ Usage

A minimal example using **Token Bucket** with **In-Memory** storage:

```go
package main

import (
    "net/http"

    ratelimiter "github.com/Aryan123-rgb/rate-limiter"
    "github.com/Aryan123-rgb/rate-limiter/algorithms/tokenbucket"
    "github.com/Aryan123-rgb/rate-limiter/storage/memory"
    mw "github.com/Aryan123-rgb/rate-limiter/middleware/http"
)

func main() {
    store := memory.NewStore()

    // 10 requests/sec, burst capacity of 20
    cfg := ratelimiter.Config{Rate: 10, Capacity: 20}
    strategy := tokenbucket.New(ratelimiter.RealClock{})

    middleware := mw.RateLimit(strategy, store, cfg, func(r *http.Request) string {
        return r.RemoteAddr
    })

    handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte("Request Allowed!"))
    })

    http.ListenAndServe(":8080", middleware(handler))
}
```

---

## 🌐 Distributed Rate Limiting (Redis)

To scale across multiple servers, swap the store to Redis — nothing else changes:

```go
client := goredis.NewClient(&goredis.Options{Addr: "localhost:6379"})
store := redis.NewStore(client)
// Everything else (Strategy, Middleware, Config) remains exactly the same!
```

---

## 🔌 Framework Support

### Fiber

```go
app := fiber.New()

api := app.Group("/api", limiter.RateLimitMiddleware(strategy, store, cfg, func(c *fiber.Ctx) string {
    return c.IP()
}))
```

### Echo

```go
e := echo.New()

e.Use(limiter.RateLimitMiddleware(strategy, store, cfg, func(c echo.Context) string {
    return c.RealIP()
}))
```

---

## 🆚 Comparison

| Feature               |            **FlowGuard**            | `golang.org/x/time/rate` |       `ulule/limiter`       |
| :-------------------- | :---------------------------------: | :----------------------: | :-------------------------: |
| **Algorithms**        |    Token Bucket, Sliding Window     |    Token Bucket Only     | Token Bucket, Leaky Bucket  |
| **Storage**           |     Memory, Redis (Distributed)     |       Memory Only        | Memory, Redis, Consul, etc. |
| **Distributed Locks** |      ✅ Yes (Atomic Spin-Lock)      |          ❌ No           |           ✅ Yes            |
| **Middleware**        |          HTTP, Fiber, Echo          | ❌ Manual Implementation |   HTTP, Gin, Echo, Fiber    |
| **Architecture**      | **Interface-Based (Plug-and-Play)** |       Struct-Based       |        Struct-Based         |
| **Complexity**        |         Low (Simple Config)         |           Low            |    High (Complex Config)    |

---

## 🔮 What's Next

- More adapter support for **Gin**, **Chi**, and **Gorilla Mux**
- Load testing suite with **K6** + **Grafana** for performance benchmarking
- Built-in metrics with **Prometheus** and **OpenTelemetry** support
