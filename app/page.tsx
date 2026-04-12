import Link from "next/link";
import Image from "next/image";
import GlassCard from "@/components/GlassCard";
import SkillsCarousel from "@/components/SkillsCarousel";
import { projects } from "@/lib/projects";

import { FaCalendarAlt, FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope, FaFileAlt } from "react-icons/fa";

/* ── Data ──────────────────────────────────────────── */
const featuredProjects = projects.filter(p => p.title === "Loadex" || p.title === "Resume.AI");

/* ── Social handles for "Find me on the Internet" ─────── */
const internetSocials = [
  {
    label: "Twitter / X",
    href: "https://x.com/distroaryan/",
    icon: FaTwitter,
    color: "#1d9bf0",
    bg: "rgba(29,155,240,0.08)",
    border: "rgba(29,155,240,0.25)",
  },
  {
    label: "GitHub",
    href: "https://github.com/distroaryan/",
    icon: FaGithub,
    color: "#c9d1d9",
    bg: "rgba(201,209,217,0.06)",
    border: "rgba(201,209,217,0.18)",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aryan-srivastava-560b91255/",
    icon: FaLinkedinIn,
    color: "#0a66c2",
    bg: "rgba(10,102,194,0.08)",
    border: "rgba(10,102,194,0.25)",
  },
  {
    label: "Email",
    href: "mailto:srivastavaaryanalc76@gmail.com",
    icon: FaEnvelope,
    color: "#ea4335",
    bg: "rgba(234,67,53,0.08)",
    border: "rgba(234,67,53,0.22)",
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1lZPVVf7M4VaAOqddThr4qNS0EgERkPdy/view?usp=sharing",
    icon: FaFileAlt,
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.22)",
  },
];

/* ── Page ──────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="min-h-screen text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="grid-bg" />
        <div className="hero-glow" />

        <div className="relative max-w-[960px] mx-auto px-5 sm:px-6 pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24">

          {/* Name — italic, no role animator */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-[1.08] tracking-tight italic"
            style={{
              fontFamily: "var(--font-heading), serif",
              color: "var(--text-primary)",
            }}
          >
            hi, I am Aryan
          </h1>

          {/* Status badge */}
          <div
            className="flex items-center gap-2 mb-8 sm:mb-10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-mono w-max"
            style={{
              border: "1px solid rgba(34, 197, 94, 0.25)",
              background: "rgba(34, 197, 94, 0.08)",
              color: "rgb(34, 197, 94)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "rgb(34, 197, 94)" }}></span>
              <span className="relative inline-flex rounded-full h-2 w-full" style={{ background: "rgb(34, 197, 94)" }}></span>
            </span>
            <span>Looking for opportunities</span>
          </div>

          {/* Bio — full width, two paragraphs */}
          <div
            className="w-full text-base sm:text-lg leading-7 sm:leading-8 mb-4 space-y-5"
            style={{
              fontFamily: "var(--font-body), sans-serif",
              color: "var(--text-body)",
            }}
          >
            <p>
              I&apos;m a backend-focused full stack developer who likes exploring{" "}
              complex backend systems and breaking them down into clear and manageable steps.
              I enjoy crafting end-to-end solutions and always interested in learning
              new frameworks along the way.
            </p>
            <p
              className="text-sm sm:text-base leading-7"
              style={{ color: "var(--text-muted)" }}
            >
              Outside of code you'll find me watching anime, playing games and travelling around the 
              world
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-8 mb-6">
            <a
              href="https://cal.com/distroaryan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-[#e8c664]/10 text-[#e8c664] border border-[#e8c664]/30 hover:bg-[#e8c664]/20 hover:-translate-y-[2px] shadow-[0_0_15px_rgba(232,198,100,0.05)] hover:shadow-[0_0_20px_rgba(232,198,100,0.15)]"
            >
              <FaCalendarAlt size={14} />
              Let&apos;s Talk
            </a>
            <a
              href="https://x.com/distroaryan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-white/[0.05] text-white border border-white/10 hover:bg-white/10 hover:-translate-y-[2px]"
            >
              <FaTwitter size={14} style={{ color: "#1d9bf0" }} />
              DM me
            </a>
          </div>

          {/* Find me on the Internet */}
          <div className="mt-8">
            <p
              className="text-base font-mono font-bold mb-4"
              style={{ color: "var(--text-dim)" }}
            >
              Find me on the Internet
            </p>
            <div className="flex flex-wrap gap-2.5">
              {internetSocials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-mono transition-all duration-300 hover:-translate-y-[2px]"
                    style={{
                      background: s.bg,
                      border: `1px solid ${s.border}`,
                      color: s.color,
                    }}
                  >
                    <Icon size={14} />
                    {s.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills Carousel ── */}
      <section className="max-w-[960px] mx-auto px-5 sm:px-6 pb-20 sm:pb-28">
        <h2
          className="text-2xl sm:text-3xl font-bold tracking-wide mb-8 sm:mb-10"
          style={{
            fontFamily: "var(--font-heading), serif",
            color: "var(--text-primary)",
          }}
        >
          Skills
        </h2>
        <SkillsCarousel />
      </section>

      {/* ── Selected Projects (Bento Grid) ── */}
      <section className="max-w-[960px] mx-auto px-5 sm:px-6 pb-20 sm:pb-32">
        {/* Section header with inline "View Projects" link */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-wide"
            style={{
              fontFamily: "var(--font-heading), serif",
              color: "var(--text-primary)",
            }}
          >
            Selected Projects
          </h2>
          <Link
            href="/projects"
            className="flex items-center gap-1.5 text-sm font-mono tracking-wider transition-colors duration-300 hover:text-[var(--accent)] shrink-0"
            style={{ color: "var(--text-muted)" }}
          >
            View Projects
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {featuredProjects.map((p, i) => (
            <GlassCard
              key={p.title}
              className={`p-5 sm:p-7 flex flex-col justify-between h-full`}
            >
              <div className="flex flex-col h-full">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border border-white/10">
                  <Image
                    src={p.image}
                    alt={`${p.title} preview`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3
                    className="text-lg sm:text-xl font-bold leading-tight text-[var(--text-primary)] group-hover:text-[#e8c664] transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-heading), serif",
                    }}
                  >
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-3 shrink-0 pt-0.5">
                    {p.liveLink && (
                      <Link
                        href={p.liveLink}
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
                    {p.github && (
                      <Link
                        href={p.github}
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

                <p
                  className="text-[15px] sm:text-[17px] leading-relaxed mb-8 flex-1"
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  {p.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-auto pt-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="tag-mono font-medium">{tag}</span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ── Latest Writing ── */}
      <section className="max-w-[960px] mx-auto px-5 sm:px-6 pb-12 sm:pb-16">
        <h2
          className="text-2xl sm:text-3xl font-bold tracking-wide mb-8 sm:mb-10"
          style={{
            fontFamily: "var(--font-heading), serif",
            color: "var(--text-primary)",
          }}
        >
          Latest Writing
        </h2>
        <GlassCard
          href="https://medium.com/@srivastavaaryanalc76/building-a-distributed-hash-table-dht-in-go-from-scratch-a-deep-dive-into-kademlia-6895c406dc9b"
          external
          className="group p-5 sm:p-7 md:p-8 flex flex-col gap-3 sm:gap-4"
        >
          <div className="flex items-start justify-between gap-6 mb-4">
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold leading-[1.35] mb-3 text-[var(--text-primary)] group-hover:text-[#e8c664] transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-heading), serif",
                }}
              >
                Building a Distributed Hash Table (DHT) in Go from Scratch
              </h3>
              <div className="flex items-center gap-3 text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono), monospace" }}>
                <span>March 3, 2026</span>
                <span>•</span>
                <span>📖 15 min Read</span>
              </div>
            </div>
            <svg
              className="w-5 h-5 shrink-0 mt-1 opacity-0 group-hover:opacity-60 transition-all duration-300 translate-x-0 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: "var(--accent)" }}
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </div>

          <p
            className="text-base sm:text-lg leading-relaxed mb-8"
            style={{
              fontFamily: "var(--font-body), sans-serif",
              color: "var(--text-body)",
            }}
          >
            A complete guide to building a functional, minimal Distributed Hash Table (DHT) from scratch in Go using the Kademlia architecture.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {["Go", "Distributed Systems", "P2P"].map((tag) => (
              <span key={tag} className="tag-mono font-medium">{tag}</span>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* ── What I am currently reading ── */}
      <section className="max-w-[960px] mx-auto px-5 sm:px-6 pb-4 sm:pb-8">
        <h2
          className="text-2xl sm:text-3xl font-bold tracking-wide mb-8 sm:mb-10"
          style={{
            fontFamily: "var(--font-heading), serif",
            color: "var(--text-primary)",
          }}
        >
          What I am currently reading
        </h2>
        <GlassCard
          href="https://dev.to/pixperk/writes-done-right-atomicity-and-idempotency-with-redis-lua-and-go-5ebd"
          external
          className="group p-5 sm:p-7 md:p-8 flex flex-col gap-3 sm:gap-4"
        >
          <div className="flex items-start justify-between gap-6 mb-4">
            <h3
              className="text-lg sm:text-xl md:text-2xl font-bold leading-[1.35] text-[var(--text-primary)] group-hover:text-[#e8c664] transition-colors duration-300"
              style={{
                fontFamily: "var(--font-heading), serif",
              }}
            >
              Writes Done Right: Atomicity and Idempotency with Redis, Lua, and Go
            </h3>
            <svg
              className="w-5 h-5 shrink-0 mt-1 opacity-0 group-hover:opacity-60 transition-all duration-300 translate-x-0 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: "var(--accent)" }}
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </div>

          <p
            className="text-base sm:text-lg leading-relaxed mb-8"
            style={{
              fontFamily: "var(--font-body), sans-serif",
              color: "var(--text-body)",
            }}
          >
            Ensuring atomic and idempotent database writes using Redis and Lua scripts in Go.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {["Go", "Redis"].map((tag) => (
              <span key={tag} className="tag-mono font-medium">{tag}</span>
            ))}
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
