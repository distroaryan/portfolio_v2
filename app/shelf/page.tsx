import Link from "next/link";
import React from "react";

export default function ShelfPage() {
  const papers = [
    {
      title: "Kademlia: A Peer-to-Peer Information System Based on the XOR Metric",
      description: "The foundational paper by Petar Maymounkov and David Mazières detailing the distributed hash table (DHT) algorithm. It uses an XOR-based metric for distance and routing, which heavily influenced modern decentralized networks like IPFS and BitTorrent.",
      link: "https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf",
      tags: ["Distributed Systems", "P2P"]
    }
  ];

  return (
    <main className="min-h-screen text-white pb-24">
      <div className="relative max-w-[780px] mx-auto px-6 pt-36">
        <div className="mb-16">
          <h1 className="text-3xl font-bold font-mono text-yellow-400/90 tracking-wide mb-4">
            Articles and White Papers
          </h1>
          <p className="text-gray-400 font-mono text-[15px] border-l-2 border-yellow-500/50 pl-4 py-1 italic">
            Curated engineering blogs from tech giants and foundational white papers in computer science.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {papers.map((paper, index) => (
            <Link
              key={index}
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border border-white/[0.08] bg-white/[0.025] hover:border-yellow-500/50 hover:bg-white/[0.04] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-900/20 flex flex-col justify-center gap-3"
            >
              <h2 className="text-lg font-bold text-gray-100 group-hover:text-yellow-400 transition-colors leading-[1.4]" style={{ fontFamily: "var(--font-heading), serif" }}>
                {paper.title}
              </h2>
              {paper.tags && (
                <div className="flex flex-wrap gap-1.5">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] border border-yellow-500/30 bg-yellow-500/10 rounded-full px-2.5 py-0.5 text-yellow-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-[14px] text-gray-300 leading-relaxed font-mono">
                {paper.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
