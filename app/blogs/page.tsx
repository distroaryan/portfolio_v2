import GlassCard from "@/components/GlassCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

interface BlogPostSummary {
  slug?: string;
  link?: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags?: string[];
}

export default function Page() {
  const posts: BlogPostSummary[] = [
    {
      link: "https://medium.com/@srivastavaaryanalc76/building-a-distributed-hash-table-dht-in-go-from-scratch-a-deep-dive-into-kademlia-6895c406dc9b",
      title: "Building a Distributed Hash Table (DHT) in Go from Scratch",
      description: "A complete guide to building a functional, minimal Distributed Hash Table (DHT) from scratch in Go using the Kademlia architecture.",
      date: "March 3, 2026",
      readTime: "📖 15 min Read",
      tags: ["Go", "Distributed Systems", "P2P"],
    },
  ];

  return (
    <main className="min-h-screen text-white pb-32">
      <div className="relative max-w-[960px] mx-auto px-5 sm:px-6 pt-24 sm:pt-32 md:pt-36">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-6">
            <h1
              className="text-3xl sm:text-4xl font-bold tracking-wide"
              style={{
                fontFamily: "var(--font-heading), serif",
                color: "var(--text-primary)",
              }}
            >
              Blogs
            </h1>
            <Link
              href="https://medium.com/@srivastavaaryanalc76"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 hover:bg-[rgba(212,168,67,0.12)]"
              style={{
                border: "1px solid rgba(212,168,67,0.25)",
                background: "rgba(212,168,67,0.06)",
                color: "var(--accent)",
              }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              Medium
            </Link>
          </div>

          <p
            className="italic mb-12 border-l-2 pl-5 py-2 text-lg leading-relaxed"
            style={{
              fontFamily: "var(--font-heading), serif",
              color: "var(--text-body)",
              borderColor: "rgba(212,168,67,0.4)",
            }}
          >
            "If you want to master something, teach it." <br/>
            <span
              className="not-italic font-bold mt-2 inline-block text-sm tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              — Richard Feynman
            </span>
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-5">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 80}>
              <GlassCard
                href={post.link || `/blogs/${post.slug}`}
                external={!!post.link}
                className="group p-7"
              >
                <h2
                  className="text-2xl font-bold mb-2 transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-heading), serif",
                    color: "var(--text-primary)",
                  }}
                >
                  {post.title}
                </h2>
                <div
                  className="text-sm mb-3"
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    color: "var(--text-muted)",
                  }}
                >
                  {post.date} &bull; {post.readTime}
                </div>
                {post.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag-mono">{tag}</span>
                    ))}
                  </div>
                )}
                <p
                  className="text-lg leading-relaxed"
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  {post.description}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
