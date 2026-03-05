import Link from "next/link";
import Image from "next/image";
import RoleAnimator from "@/components/RoleAnimator";
import SocialLinks from "@/components/SocialLinks";

/* ── Data ──────────────────────────────────────────── */

const projects = [
  {
    name: "Flowguard",
    description:
      "A high-performance, thread-safe, distributed rate limiter library made from scratch using golang.",
    tags: ["Go", "Rate Limiting", "Redis"],
    image: "/rate_limiter.png",
    link: "/projects/flowguard",
    github: "https://github.com/Aryan123-rgb/flowguard",
  },
  {
    name: "Walgo",
    description:
      "A persistent, crash-safe key-value store written in Go, built on top of a custom Write-Ahead Log (WAL) engine",
    tags: ["Go", "WAL", "Database"],
    image: "/walgo.png",
    link: "/projects/walgo",
    github: "https://github.com/Aryan123-rgb/walgo",
  },
];

const posts = [
  {
    title: "Building a Distributed Hash Table (DHT) in Go from Scratch",
    description:
      "A complete guide to building a functional, minimal Distributed Hash Table (DHT) from scratch in Go using the Kademlia architecture.",
    href: "/blogs/dht",
  },
];

/* ── Page ──────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Subtle dark-green ambient glow at the top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />

      <div className="relative max-w-[780px] mx-auto px-6 pt-36 pb-24">
        {/* ── Hero ── */}
        <section className="mb-24">
          <RoleAnimator />

          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-100 mb-8 leading-[1.1]"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Aryan Srivastava
          </h1>

          <p className="text-[15px] leading-relaxed text-gray-300 max-w-xl mb-4">
            Computer Science undergrad focused on building reliable, thoughtful
            software. I ship clean interfaces, build systems, and learn in
            public.
          </p>

          <SocialLinks />
        </section>

        {/* ── Selected Projects ── */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[11px] tracking-[0.3em] text-gray-500 uppercase font-bold font-mono">
              Selected Projects
            </span>
            <Link
              href="/projects"
              className="text-[13px] text-gray-500 hover:text-white transition-colors flex items-center gap-1.5 font-mono"
            >
              View all <span className="text-sm">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((p) => (
              <div
                key={p.name}
                className="group rounded-xl border border-white/[0.08] bg-white/[0.025] overflow-hidden hover:border-white/[0.18] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-950/20"
              >
                {/* Image */}
                <div className="relative h-44 w-full bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-700">
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  )}
                  {/* GitHub icon */}
                  <Link
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 p-1.5 rounded-full bg-black/60 text-gray-400 hover:text-white hover:bg-black/80 transition-all backdrop-blur-sm"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </Link>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="text-lg font-bold text-emerald-400/90 mb-2"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    {p.name}
                  </h3>

                  <p className="text-[13px] text-gray-400 leading-relaxed mb-4">
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] border border-white/[0.1] rounded-full px-2.5 py-0.5 text-gray-500 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project link */}
                  <Link
                    href={p.link}
                    target={p.link.startsWith("/") ? undefined : "_blank"}
                    rel={p.link.startsWith("/") ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-1.5 text-[13px] text-emerald-400/80 hover:text-emerald-300 transition-colors font-mono"
                  >
                    View Project
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Writing ── */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <span className="text-[11px] tracking-[0.3em] text-gray-500 uppercase font-bold font-mono">
              Writing
            </span>
            <Link
              href="/blogs"
              className="text-[13px] text-gray-500 hover:text-white transition-colors flex items-center gap-1.5 font-mono"
            >
              Read all <span className="text-sm">→</span>
            </Link>
          </div>

          <div className="space-y-10">
            {posts.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group block"
              >
                <h2
                  className="text-lg font-bold text-gray-100 mb-2 group-hover:text-gray-300 transition-colors"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  {post.title}
                </h2>
                <p className="text-[13px] text-gray-500 leading-relaxed">
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
