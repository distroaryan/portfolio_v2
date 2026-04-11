"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { projects } from "@/lib/projects";
import GlassCard from "@/components/GlassCard";
import ScrollReveal from "@/components/ScrollReveal";

type TagType = "All" | "Backend projects" | "Full stack projects";

export default function Page() {
  const [activeTag, setActiveTag] = useState<TagType>("All");
  const filteredProjects = projects.filter((p) => {
    if (activeTag === "All") return true;
    if (activeTag === "Backend projects") return p.type === "Backend";
    if (activeTag === "Full stack projects") return p.type === "Full stack";
    return true;
  });

  return (
    <main className="min-h-screen text-white pb-32">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-16 sm:pt-24 md:pt-32">
        <section>
          <ScrollReveal>
            <h1
              className="text-3xl sm:text-4xl font-bold tracking-wide mb-3"
              style={{
                fontFamily: "var(--font-heading), serif",
                color: "var(--text-primary)",
              }}
            >
              Projects
            </h1>
            <p
              className="text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl"
              style={{
                fontFamily: "var(--font-body), sans-serif",
                color: "var(--text-muted)",
              }}
            >
              Backend systems, infrastructure tools, and full-stack applications.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
              {(["All", "Backend projects", "Full stack projects"] as const).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`text-xs sm:text-sm font-mono px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-400 ${
                    activeTag === tag
                      ? "border-[var(--accent-border)] bg-[var(--accent-muted)] text-[var(--accent)]"
                      : "border-white/[0.06] bg-white/[0.02] text-gray-500 hover:border-white/[0.12] hover:text-gray-300"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 80}>
                <GlassCard
                  className="p-5 sm:p-6 flex flex-col justify-between h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <h2
                        className="text-lg sm:text-xl font-bold leading-tight text-[var(--text-primary)] group-hover:text-[#e8c664] transition-colors duration-300"
                        style={{
                          fontFamily: "var(--font-heading), serif",
                        }}
                      >
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-3 shrink-0">
                        {project.liveLink && (
                          <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white p-1 transition-colors duration-300"
                            title="Live Site"
                          >
                            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                          </Link>
                        )}
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white p-1 transition-colors duration-300"
                            title="Source"
                          >
                            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className="text-[15px] sm:text-[16px] leading-relaxed mb-8 flex-1"
                      style={{
                        fontFamily: "var(--font-body), sans-serif",
                        color: "var(--text-body)",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-3 mt-auto">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-mono font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
