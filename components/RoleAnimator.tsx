"use client";

import { useState, useEffect } from "react";

const roles = [
  "Backend Engineer",
  "Full Stack Engineer",
];

export default function RoleAnimator() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "in") {
      timeout = setTimeout(() => setPhase("hold"), 500);
    } else if (phase === "hold") {
      timeout = setTimeout(() => setPhase("out"), 2500);
    } else {
      timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setPhase("in");
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <div className="h-[28px] overflow-hidden relative mb-6">
      <p
        className="text-lg tracking-[0.15em] italic transition-all duration-500 ease-in-out"
        style={{
          fontFamily: "var(--font-heading), serif",
          color: "var(--accent)",
          opacity: phase === "out" ? 0 : 0.8,
          transform:
            phase === "in"
              ? "translateY(0)"
              : phase === "hold"
              ? "translateY(0)"
              : "translateY(-100%)",
        }}
        key={index}
      >
        {roles[index]}
      </p>
    </div>
  );
}
