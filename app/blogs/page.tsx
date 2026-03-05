import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";

// Interface for parsed blog metadata
interface BlogPostSummary {
  slug: string;
  title: string;
  description: string;
}

export default async function BlogsIndexPage() {
  const blogDir = path.join(process.cwd(), "blog");
  let files: string[] = [];

  try {
    files = await fs.promises.readdir(blogDir);
  } catch (err) {
    // If the folder doesn't exist or isn't readable
    notFound();
  }

  const posts: BlogPostSummary[] = [];

  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const slug = file.replace(/\.md$/, "");
    const filePath = path.join(blogDir, file);
    const content = await fs.promises.readFile(filePath, "utf-8");

    // Extract title (first # Heading) and description (first non-heading paragraph)
    const lines = content.split("\n");
    let title = slug;
    let description = "Read more about this topic...";

    for (const line of lines) {
      if (line.startsWith("# ") && title === slug) {
        title = line.replace(/^#\s+/, "").trim();
      } else if (
        line.trim().length > 0 &&
        !line.startsWith("#") &&
        !line.startsWith(">") &&
        !line.startsWith("-") &&
        description === "Read more about this topic..."
      ) {
        description = line.trim();
      }
    }

    posts.push({ slug, title, description });
  }

  return (
    <main className="min-h-screen bg-black text-white pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />

      <div className="relative max-w-[780px] mx-auto px-6 pt-36">
        <section>
          <div className="flex items-center justify-between mb-8">
            <span className="text-[11px] tracking-[0.3em] text-gray-500 uppercase font-bold font-mono">
              All Writing
            </span>
            <Link
              href="/"
              className="text-[13px] text-gray-500 hover:text-white transition-colors flex items-center gap-1.5 font-mono"
            >
              <span className="text-sm">←</span> Back home
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group p-6 rounded-xl border border-white/[0.08] bg-white/[0.025] hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-950/20 flex flex-col justify-between"
              >
                <div>
                  <h2
                    className="text-lg font-bold text-gray-100 mb-3 group-hover:text-emerald-400 transition-colors"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-[13px] text-gray-400 leading-relaxed line-clamp-3 mb-6">
                    {post.description}
                  </p>
                </div>
                <div className="text-[12px] font-mono text-emerald-400/80 group-hover:translate-x-1 transition-transform self-start">
                  Read Article →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
