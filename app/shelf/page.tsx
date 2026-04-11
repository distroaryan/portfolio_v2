import GlassCard from "@/components/GlassCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function ShelfPage() {
  const papers = [
    {
      title: "How to Build End-to-End LLM Observability in FastAPI with OpenTelemetry",
      description: "Building end-to-end, code-first LLM observability in a FastAPI application using the OpenTelemetry Python SDK.",
      link: "https://www.freecodecamp.org/news/build-end-to-end-llm-observability-in-fastapi-with-opentelemetry/",
      tags: ["Python", "OpenTelemetry", "LLM"]
    },
    {
      title: "Architecting a Go Backend with Event-Driven Design and the Outbox Pattern",
      description: "Implementing resilient, decoupled Go microservices using event-driven design and the outbox pattern.",
      link: "https://medium.com/@steffankharmaaiarvi/architecting-a-go-backend-with-event-driven-design-and-the-outbox-pattern-3928bf315e0a",
      tags: ["Go", "System Design"]
    },
    {
      title: "Building A Resilient Data Platform with Write-Ahead Log at Netflix",
      description: "How Netflix leverages Write-Ahead Logs (WAL) to ensure data platform resilience and durability.",
      link: "https://netflixtechblog.com/building-a-resilient-data-platform-with-write-ahead-log-at-netflix-127b6712359a",
      tags: ["System Design", "WAL"]
    },
    {
      title: "Writes Done Right: Atomicity and Idempotency with Redis, Lua, and Go",
      description: "Ensuring atomic and idempotent database writes using Redis and Lua scripts in Go.",
      link: "https://dev.to/pixperk/writes-done-right-atomicity-and-idempotency-with-redis-lua-and-go-5ebd",
      tags: ["Go", "Redis"]
    },
    {
      title: "Saga Pattern in Go: Building Resilient Distributed Transactions",
      description: "Managing distributed transactions in Go microservices using the orchestrator-based Saga pattern.",
      link: "https://blog.devgenius.io/saga-pattern-in-go-building-resilient-distributed-transactions-with-orchestration-19d9746d8b85",
      tags: ["Go", "Distributed Systems"]
    },
    {
      title: "Kademlia: A Peer-to-Peer Information System Based on the XOR Metric",
      description: "The foundational paper detailing the DHT algorithm using an XOR-based metric, influencing IPFS and BitTorrent.",
      link: "https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf",
      tags: ["Distributed Systems", "P2P"]
    }
  ];

  return (
    <main className="min-h-screen text-white pb-32">
      <div className="relative max-w-[960px] mx-auto px-5 sm:px-6 pt-16 sm:pt-24 md:pt-32">
        <ScrollReveal>
          <div className="mb-20">
            <h1
              className="text-3xl sm:text-4xl font-bold tracking-wide mb-4"
              style={{
                fontFamily: "var(--font-heading), serif",
                color: "var(--text-primary)",
              }}
            >
              Reading Shelf
            </h1>
            <p
              className="text-base sm:text-lg italic max-w-2xl leading-relaxed"
              style={{
                fontFamily: "var(--font-heading), serif",
                color: "var(--text-muted)",
              }}
            >
              Curated engineering articles and papers that shaped how I think about backend systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-4 sm:gap-6">
          {papers.map((paper, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <GlassCard
                href={paper.link}
                external
                className="group p-5 sm:p-7 md:p-8 flex flex-col gap-3 sm:gap-4"
              >
                <div className="flex items-start justify-between gap-6 mb-4">
                  <h2
                    className="text-lg sm:text-xl md:text-2xl font-bold leading-[1.35] text-[var(--text-primary)] group-hover:text-[#e8c664] transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-heading), serif",
                    }}
                  >
                    {paper.title}
                  </h2>
                  <svg
                    className="w-5 h-5 shrink-0 mt-1 opacity-0 group-hover:opacity-60 transition-all duration-300 translate-x-0 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: "var(--accent)" }}
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>

                <p
                  className="text-base sm:text-lg leading-relaxed mb-8"
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  {paper.description}
                </p>

                {paper.tags && (
                  <div className="flex flex-wrap items-center gap-3">
                    {paper.tags.map((tag) => (
                      <span key={tag} className="tag-mono font-medium">{tag}</span>
                    ))}
                  </div>
                )}
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
