import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { TocAccordion } from "@/components/TocAccordion";

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "blog");
  let files: string[] = [];
  try {
    files = await fs.promises.readdir(blogDir);
  } catch (err) {
    // If the folder doesn't exist or isn't readable, return empty params
    return [];
  }

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(/\.md$/, ""),
    }));
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  
  // Construct the path to the markdown file
  const filePath = path.join(process.cwd(), "blog", `${slug}.md`);

  let content = "";
  try {
    // Read the markdown file
    content = await fs.promises.readFile(filePath, "utf-8");
  } catch (error) {
    // If the file does not exist, return a 404
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pb-24">
      {/* Subtle dark-green ambient glow at the top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />

      <div className="relative max-w-[780px] mx-auto px-6 pt-36">
        <TocAccordion markdown={content} />
        <MarkdownRenderer content={content} />
      </div>
    </main>
  );
}