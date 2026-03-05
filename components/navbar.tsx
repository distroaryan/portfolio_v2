import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "EXPERIENCE", href: "/experience" },
  { label: "PROJECTS", href: "/projects" },
  { label: "BLOG", href: "/blog" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-gray-100 font-semibold text-lg tracking-tight"
        >
          DistroAryan
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[13px] text-gray-400 tracking-[0.2em] uppercase font-mono hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
