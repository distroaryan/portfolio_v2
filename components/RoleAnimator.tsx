"use client";

import { useState, useEffect } from "react";

const roles = [
  "Software Architect",
  "Backend Engineer",
  "Systems & Infra",
  "Distributed Systems",
];

export default function RoleAnimator() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "in") {
      timeout = setTimeout(() => setPhase("hold"), 500);
    } else if (phase === "hold") {
      timeout = setTimeout(() => setPhase("out"), 2200);
    } else {
      timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setPhase("in");
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <div className="h-[22px] overflow-hidden relative mb-5">
      <p
        className="text-[13px] tracking-[0.35em] uppercase text-emerald-400/70 font-mono transition-all duration-500 ease-in-out"
        style={{
          transform:
            phase === "in"
              ? "translateY(0)"
              : phase === "hold"
              ? "translateY(0)"
              : "translateY(-100%)",
          opacity: phase === "out" ? 0 : 1,
        }}
        key={index}
      >
        {roles[index]}
      </p>
    </div>
  );
}
