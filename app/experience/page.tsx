"use client";

import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { useState, useEffect } from "react";
import { projects as experiences } from "@/lib/experience";

export default function Page() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? scrolled / maxScroll : 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen text-white pb-24 sm:pb-32">
      <div className="relative max-w-[960px] mx-auto px-5 sm:px-6 pt-16 sm:pt-24 md:pt-32">
        <ScrollReveal>
          <h1
            className="text-3xl sm:text-4xl font-bold tracking-wide mb-3"
            style={{
              fontFamily: "var(--font-heading), serif",
              color: "var(--text-primary)",
            }}
          >
            Experience
          </h1>
          <p
            className="text-base sm:text-lg mb-10 sm:mb-14 max-w-xl"
            style={{
              fontFamily: "var(--font-body), sans-serif",
              color: "var(--text-muted)",
            }}
          >
            Professional roles and contributions.
          </p>
        </ScrollReveal>

        {/* Circuit Board Timeline */}
        <div className="relative ml-0 sm:ml-4 md:ml-6 pl-6 sm:pl-10 md:pl-12 pb-12">
          {/* Background line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[2px]"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
          {/* Animated fill line */}
          <div
            className="absolute left-0 top-0 w-[2px] transition-all duration-100"
            style={{
              height: `${scrollProgress * 100}%`,
              background: "var(--accent)",
              boxShadow: "0 0 8px rgba(212,168,67,0.3)",
            }}
          />

          {experiences.map((exp, idx) => (
            <ScrollReveal key={idx} delay={idx * 120}>
              <div className="relative mb-16">
                {/* Glowing node */}
                <div
                  className="absolute -left-[28px] sm:-left-[46px] md:-left-[52px] top-2 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full animate-node-glow"
                  style={{ background: "var(--accent)" }}
                />
                {/* Connector line */}
                <div
                  className="absolute -left-[22px] sm:-left-[40px] md:-left-[46px] top-[12px] sm:top-[13px] w-4 sm:w-6 h-[2px]"
                  style={{ background: "rgba(212,168,67,0.25)" }}
                />

                <GlassCard className="p-5 sm:p-7 md:p-8">
                  {/* Header — stacks fully on mobile */}
                  <div className="flex flex-col gap-3 mb-5">
                    <div>
                      <h2
                        className="text-xl sm:text-2xl font-bold mb-1 transition-colors duration-300"
                        style={{
                          fontFamily: "var(--font-heading), serif",
                          color: "var(--text-primary)",
                        }}
                      >
                        {exp.company}
                      </h2>
                      <p
                        className="text-sm sm:text-base"
                        style={{
                          fontFamily: "var(--font-mono), monospace",
                          color: "var(--text-muted)",
                        }}
                      >
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <div
                        className="text-xs sm:text-sm font-mono px-2.5 sm:px-3 py-1 sm:py-1.5 rounded w-max"
                        style={{
                          border: "1px solid rgba(212,168,67,0.2)",
                          background: "rgba(212,168,67,0.05)",
                          color: "var(--accent)",
                        }}
                      >
                        {exp.date}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                    {exp.tags.map(tag => (
                      <span key={tag} className="tag-mono text-[11px] sm:text-[13px]">{tag}</span>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul
                    className="space-y-3 sm:space-y-4"
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      color: "var(--text-body)",
                    }}
                  >
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3 text-[14px] sm:text-[16px] leading-relaxed">
                        <span className="mt-1 sm:mt-1.5 shrink-0" style={{ color: "var(--accent)", opacity: 0.6 }}>▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}