import Link from "next/link";
import Image from "next/image";
import RoleAnimator from "@/components/RoleAnimator";
import SocialLinks from "@/components/SocialLinks";

/* ── Data ──────────────────────────────────────────── */

const projects = [
  {
    name: "Flowguard",
    description:
      "A high-performance, thread-safe, distributed rate limiter library made from scratch using Go.",
    tags: ["Go", "Rate Limiting", "Redis"],
    github: "https://github.com/distroaryan/flowguard",
  },
  {
    name: "Walgo",
    description:
      "A persistent, crash-safe key-value store written in Go, built on top of a custom Write-Ahead Log (WAL) engine",
    tags: ["Go", "WAL", "Database"],
    github: "https://github.com/distroaryan/walgo",
  },
];

const posts = [
  {
    title: "Building a Distributed Hash Table (DHT) in Go from Scratch",
    description: "A complete guide to building a functional, minimal Distributed Hash Table (DHT) from scratch in Go using the Kademlia architecture.",
    href: "https://medium.com/@srivastavaaryanalc76/building-a-distributed-hash-table-dht-in-go-from-scratch-a-deep-dive-into-kademlia-6895c406dc9b",
    date: "March 3, 2026",
    readTime: "📖 15 min Read",
  },
];

/* ── Page ──────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <div className="relative max-w-[780px] mx-auto px-6 pt-36 pb-24">
        {/* ── Hero ── */}
        <section className="mb-24">
          <RoleAnimator />

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-6 leading-[1.1]"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            hi, I am Aryan
          </h1>

          <div className="flex items-center gap-2.5 mb-8 border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 px-3 py-1.5 rounded-full text-xs font-mono w-max">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-full bg-yellow-500"></span>
            </span>
            <span>Looking for full time opportunities</span>
          </div>

          <p className="text-lg leading-relaxed text-gray-300 max-w-xl mb-4">
            Backend engineer comfortable with working in golang, ts, python and many different tech stacks like PostgresSQL, Redis and Nginx. Like exploring database and systems internals.
          </p>

          <SocialLinks />
        </section>

        {/* ── Selected Projects ── */}
        <section className="mb-20">
          <div className="flex items-center justify-start mb-6">
            <h2 className="text-2xl font-bold text-yellow-500 font-mono tracking-wide">
              Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((p) => (
              <div
                key={p.name}
                className="group rounded-xl border border-white/[0.08] bg-white/[0.025] overflow-hidden hover:border-yellow-500/50 hover:bg-white/[0.04] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-900/20"
              >


                {/* Content */}
                <div className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2 w-full">
                    <h3
                      className="text-lg font-bold text-yellow-400/90 leading-tight"
                      style={{ fontFamily: "var(--font-heading), serif" }}
                    >
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      {p.github && (
                        <Link
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-yellow-400 p-1 transition-colors flex shrink-0"
                          title="View Source"
                        >
                          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-[16px] text-gray-300 leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] border border-yellow-500/30 bg-yellow-500/10 rounded-full px-2.5 py-0.5 text-yellow-400 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Writing ── */}
        <section>
          <div className="flex items-center justify-start mb-8">
            <h2 className="text-2xl font-bold text-yellow-500 font-mono tracking-wide">
              Blogs
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-lg border border-white/[0.08] bg-white/[0.04] hover:border-yellow-500/50 hover:bg-white/[0.06] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-900/20 flex flex-col justify-center"
              >
                <h2 className="text-xl font-bold text-gray-100 mb-1 group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h2>
                <div className="text-[14px] text-gray-400 font-mono mt-1 mb-1">
                  {post.date} &bull; {post.readTime}
                </div>
                <p className="text-[16px] text-gray-300 leading-relaxed mt-2">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
