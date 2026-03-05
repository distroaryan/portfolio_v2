import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const dir = path.join(process.cwd(), "content", "projects");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files.map((f) => ({ slug: f.replace(/\.md$/, "") }));
}

function getProjectContent(slug: string): string | null {
  const filePath = path.join(
    process.cwd(),
    "content",
    "projects",
    `${slug}.md`,
  );
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const content = getProjectContent(slug);

  if (!content) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-[780px] mx-auto px-6 pt-28 pb-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-10 font-mono"
        >
          <span>←</span> Back
        </Link>

        {/* Markdown content */}
        <article className="prose-custom">
          <MarkdownRenderer content={content} />
        </article>
      </div>
    </main>
  );
}
