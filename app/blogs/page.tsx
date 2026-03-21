import Link from "next/link";

interface BlogPostSummary {
  slug?: string;
  link?: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export default function Page() {
  const posts: BlogPostSummary[] = [
    {
      link: "https://medium.com/@srivastavaaryanalc76/building-a-distributed-hash-table-dht-in-go-from-scratch-a-deep-dive-into-kademlia-6895c406dc9b",
      title: "Building a Distributed Hash Table (DHT) in Go from Scratch",
      description: "A complete guide to building a functional, minimal Distributed Hash Table (DHT) from scratch in Go using the Kademlia architecture.",
      date: "March 3, 2026",
      readTime: "📖 15 min Read",
    },
  ];

  return (
    <main className="min-h-screen text-white pb-24">

      <div className="relative max-w-[780px] mx-auto px-6 pt-36">
        <section>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold font-mono text-yellow-400/90 tracking-wide">
              Blogs
            </h1>
            <Link
              href="https://medium.com/@srivastavaaryanalc76"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 rounded hover:bg-yellow-500/20 transition-colors font-mono text-[13px]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              View on Medium
            </Link>
          </div>

          <p className="text-gray-400 italic mb-10 border-l-2 border-yellow-500/50 pl-4 py-1 text-[15px] leading-relaxed">
            "If you want to master something, teach it. The more you teach, the better you learn. Teaching is a powerful tool to learning." <br/>
            <span className="text-yellow-400 not-italic font-bold mt-2 inline-block text-[13px] tracking-wide uppercase">— Richard Feynman</span>
          </p>

          <div className="flex flex-col gap-4 mt-4">
            {posts.map((post) => (
              <Link
                key={post.title}
                href={post.link || `/blogs/${post.slug}`}
                target={post.link ? "_blank" : undefined}
                rel={post.link ? "noopener noreferrer" : undefined}
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
