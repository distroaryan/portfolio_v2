"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/projects";

type TagType = "All" | "Backend projects" | "Full stack projects";

export default function Page() {
  const [activeTag, setActiveTag] = useState<TagType>("All");
  const [expandedDiagram, setExpandedDiagram] = useState<string | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (activeTag === "All") return true;
    if (activeTag === "Backend projects") return p.type === "Backend";
    if (activeTag === "Full stack projects") return p.type === "Full stack";
    return true;
  });

  return (
    <main className="min-h-screen text-white pb-24">

      <div className="relative max-w-[780px] mx-auto px-6 pt-36">
        <section>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold font-mono text-yellow-400/90 tracking-wide">
              Projects
            </h1>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {["All", "Backend projects", "Full stack projects"].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag as TagType)}
                className={`text-[12px] font-mono px-3 py-1.5 rounded-full border transition-colors ${
                  activeTag === tag
                    ? "border-yellow-500/50 bg-yellow-500/10 text-yellow-400"
                    : "border-white/[0.08] bg-white/[0.02] text-gray-400 hover:border-white/[0.2] hover:text-gray-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.slug}
                  className="group rounded-xl border border-white/[0.08] bg-white/[0.025] overflow-hidden hover:border-yellow-500/50 hover:bg-white/[0.04] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-900/20 flex flex-col justify-between"
                >
                  <div className="p-5 flex flex-col grow">
                    <div className="flex flex-col gap-3 mb-2 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full border-none">
                        <h2 className="text-lg font-bold text-yellow-400/90 leading-tight" style={{ fontFamily: "var(--font-heading), serif" }}>
                          {project.title}
                        </h2>
                        
                        <div className="flex items-center gap-2 shrink-0">
                          {project.liveLink && (
                            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 px-2.5 py-1 rounded-full text-[11px] font-mono hover:bg-yellow-500/20 transition-colors" title="Live Site">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-full bg-yellow-500"></span>
                              </span>
                              <span className="whitespace-nowrap leading-none mt-[1px]">Live link</span>
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 2.25 0 003 8.25v10.5A2.25 2.25 2.25 0 005.25 21h10.5A2.25 2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                              </svg>
                            </Link>
                          )}
                          {project.github && (
                            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 p-1 transition-colors flex shrink-0" title="View Source">
                              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                              </svg>
                            </Link>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] border border-yellow-500/30 bg-yellow-500/10 rounded-full px-2.5 py-0.5 text-yellow-400 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-[16px] text-gray-300 leading-relaxed mb-4 mt-2">
                      {project.description}
                    </p>

                    {project.architecture && (
                      <div className="mb-2">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setExpandedDiagram(expandedDiagram === project.slug ? null : project.slug);
                          }}
                          className="flex items-center gap-2 text-[12px] font-mono text-yellow-500/70 hover:text-yellow-400 transition-colors group/btn"
                        >
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500/10 group-hover/btn:bg-yellow-500/20 transition-colors">
                            <svg
                              className={`w-3 h-3 transition-transform duration-300 ${expandedDiagram === project.slug ? "rotate-180" : ""}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                          {expandedDiagram === project.slug ? "HIDE ARCHITECTURE" : "VIEW ARCHITECTURE"}
                        </button>
                        
                        {expandedDiagram === project.slug && (
                          <div className="mt-4 pt-4 border-t border-white/[0.08] transition-opacity duration-300">
                            <div className="bg-black/40 border border-white/[0.05] rounded-xl p-2 sm:p-3 flex justify-center overflow-hidden">
                              <img
                                src={project.architecture}
                                alt={`${project.title} Architecture`}
                                className="w-full h-auto rounded drop-shadow-md opacity-90 hover:opacity-100 transition-opacity"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-[13px] text-gray-500 font-mono">
                No projects found in this category.
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
