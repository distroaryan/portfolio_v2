"use client";

import React, { useState, useEffect } from "react";
import GlassCard from "@/components/GlassCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function JourneyPage() {
  const journeys = [
    {
      date: "March 2026",
      bullets: [
        "Started reading my first white paper on the Kademlia DHT and implemented it in Go. Loved the concept of nodes discovering each other without client interaction and dynamically joining or leaving the network.",
        "Wrote my first blog post on Medium about implementing a DHT in Go.",
        "Created a restaurant management backend to tinker with Prometheus, Grafana, OpenTelemetry, and k6. Loved every aspect of it.",
      ],
    },
    {
      date: "February 2026",
      bullets: [
        "Started learning about database internals—how they work under the hood, LSM trees, write-ahead logging (WAL), MVCC, and the different methods databases use to ensure concurrency.",
        "Created a simple key-value store with write-ahead logging and another one with MVCC. Thought about adding optimistic locking as well, but couldn't quite figure it out yet.",
        "Vibe-coded a simple course generator website using Antigravity. Spent the first couple of days designing the LLD and HLD, then created a roadmap for the AI and let it cook.",
      ],
    },
    {
      date: "January 2026",
      bullets: [
        "Started learning Go from the famous website 'Learn Go with Tests'. Got introduced to test-driven development (TDD) and spent nearly a month getting familiar with the syntax.",
        "Created my first Go project: a simple rate limiter using the token bucket and sliding window algorithms. Verified it with unit and benchmark tests, and received an amazing response on Twitter.",
        "Realized this was the domain I could spend a lot of time going deep into.",
      ],
    },
  ];

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
    <main className="min-h-screen text-white pb-32">
      <div className="relative max-w-[960px] mx-auto px-5 sm:px-6 pt-24 sm:pt-32 md:pt-36">
        <ScrollReveal>
          <h1
            className="text-3xl sm:text-4xl font-bold tracking-wide mb-10 sm:mb-14"
            style={{
              fontFamily: "var(--font-heading), serif",
              color: "var(--text-primary)",
            }}
          >
            Journey
          </h1>
        </ScrollReveal>

        <div className="relative ml-0 sm:ml-4 md:ml-[140px] pl-6 sm:pl-10 md:pl-12 pb-12">
          {/* Background line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[2px]"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
          {/* Animated fill */}
          <div
            className="absolute left-0 top-0 w-[2px] transition-all duration-100"
            style={{
              height: `${scrollProgress * 100}%`,
              background: "var(--accent)",
              boxShadow: "0 0 8px rgba(212,168,67,0.3)",
            }}
          />

          {journeys.map((entry, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="mb-16 relative">
                {/* Glowing node */}
                <div
                  className="absolute -left-[28px] sm:-left-[46px] md:-left-[52px] top-2 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full animate-node-glow"
                  style={{ background: "var(--accent)" }}
                />
                {/* Connector */}
                <div
                  className="absolute -left-[22px] sm:-left-[40px] md:-left-[46px] top-[12px] sm:top-[13px] w-4 sm:w-6 h-[2px]"
                  style={{ background: "rgba(212,168,67,0.25)" }}
                />

                {/* Date label */}
                <div className="md:absolute md:-left-[164px] md:top-0 md:w-28 md:text-right">
                  <span
                    className="text-sm sm:text-base font-bold block mb-3 md:mb-0"
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      color: "var(--accent)",
                      opacity: 0.85,
                    }}
                  >
                    {entry.date}
                  </span>
                </div>

                <GlassCard className="p-5 sm:p-6 md:p-7">
                  <ul className="list-none space-y-3 sm:space-y-4">
                    {entry.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-[15px] sm:text-[17px] leading-relaxed flex items-start gap-2 sm:gap-3"
                        style={{
                          fontFamily: "var(--font-body), sans-serif",
                          color: "var(--text-body)",
                        }}
                      >
                        <span className="shrink-0 mt-1" style={{ color: "var(--accent)", opacity: 0.5 }}>▹</span>
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
