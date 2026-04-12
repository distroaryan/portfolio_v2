export default function Footer() {
  return (
    <footer className="w-full mt-10 sm:mt-16 mb-32 sm:mb-10 text-center">
      <div 
        className="max-w-[960px] mx-auto px-6 pt-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p
          className="text-[15px] leading-relaxed"
          style={{
            fontFamily: "var(--font-body), sans-serif",
            color: "var(--text-muted)",
          }}
        >
          Made with <span style={{ color: "var(--accent)" }}>&hearts;</span> by{" "}
          <a
            href="https://github.com/Aryan123-rgb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[var(--accent)] transition-colors duration-300 font-medium tracking-wide"
            style={{ fontFamily: "var(--font-mono), monospace" }}
          >
            distroaryan
          </a>
        </p>
        <p
          className="text-[14px] mt-2 block"
          style={{
            fontFamily: "var(--font-mono), monospace",
            color: "var(--text-dim, rgba(255,255,255,0.4))",
          }}
        >
          &copy; 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
