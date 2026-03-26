"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

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
        "Vibe-coded a simple course generator website using Antigravity. Spent the first couple of days designing the LLD and HLD, then created a roadmap for the AI and let it cook. Learned a crucial lesson about working with AI: when it makes a mistake, it's very hard to debug without looking closely at the code because LLMs can confidently hallucinate incorrect solutions.",
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
      const progress = maxScroll > 0 ? scrolled / maxScroll : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen text-white pb-24">
      
      <div className="relative max-w-[780px] mx-auto px-6 pt-36">
        <div className="flex items-center justify-between mb-16">
          <h1 className="text-3xl font-bold font-mono text-yellow-400/90 tracking-wide">
            Journey
          </h1>
        </div>

        <div className="relative border-l border-white/10 ml-3 md:ml-[136px] pb-12">
          {/* Animated Scroll Pole */}
          <div 
            className="absolute left-[-1px] top-0 w-[2px] bg-yellow-400 origin-top" 
            style={{ height: `${scrollProgress * 100}%` }}
          />
          
          {journeys.map((exp, index) => (
            <div key={index} className="mb-16 relative pl-8 md:pl-10">
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
              
              {/* Date on the left for md+ screens */}
              <div className="md:absolute md:-left-[150px] md:top-0 md:w-28 md:text-right">
                <span className="text-[15px] text-yellow-400/90 font-mono font-bold block mb-4 md:mb-0">
                  {exp.date}
                </span>
              </div>
              
              <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors shadow-lg shadow-yellow-900/10">
                <ul className="list-none space-y-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-[14px] text-gray-300 leading-relaxed font-mono flex items-start gap-3">
                      <span className="text-yellow-500/50 flex-shrink-0 mt-0.5">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
