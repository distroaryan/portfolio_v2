"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function JourneyPage() {
  const journeys = [
    {
      date: "March 2026",
      bullets: [
        "Started reading my first white paper kademlia dht implementation in golang and implemented it as well. loved the concept of one node discovering the other node without any client interaction and how a node can enter and leave the network",
        "wrote my first blog on medium about dht implementation in golang",
        "created a restaurant management backend to tinker around with prometheus, grafana, open telemetry and k6. Loved every aspect of it",
      ],
    },
    {
      date: "February 2026",
      bullets: [
        "Started learning about the database internals, how the databases works what are lsm trees, what is write ahead logging, mvcc and different methods the database ensures concurrency",
        "Created a simple kv store with write ahead logging and another kv store with mvcc, thought about adding optimistic locking as well but couldnt figure it out",
        "Vibe coded a simple course generator website using antigravity, spended first 1 or 2 days in designing the lld and hld and after that created a roadmap for the AI and let it cook. Realized a very crucial lesson when working with AI if it makes a mistake it's very hard to debug without looking at the code because LLM hallucinates everything written by it is correct.",
      ],
    },
    {
      date: "January 2026",
      bullets: [
        "Started learning golang from the famous website learn go with tests, got introduced to test driven development and spended nearly a month getting familiar with the syntax",
        "Created the first golang project a simple rate limiter using token bucket algorithm and sliding window algorithm, tested them with unit tests and benchmark tests and got amazing response on the twitter",
        "Realized this was the domain that I can spend a lot of time in going deep",
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
