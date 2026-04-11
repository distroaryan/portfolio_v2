"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderOpen, Briefcase, Library } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Projects", href: "/projects", icon: FolderOpen },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Shelf", href: "/shelf", icon: Library },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 sm:bottom-auto top-auto sm:top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]">
      <nav className="glass-card-static backdrop-blur-2xl bg-[#0a0a0a]/80 border border-white/[0.08] rounded-full px-2 py-2 sm:px-2.5 sm:py-2.5 flex items-center shadow-2xl shadow-black/60">
        <ul className="flex items-center gap-2 sm:gap-4 md:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  title={link.label}
                  className={`flex items-center justify-center px-2.5 sm:px-3 md:px-4 py-2 rounded-full transition-all duration-500 ${
                    isActive
                      ? "bg-[rgba(212,168,67,0.18)] text-[#e8c664] font-semibold"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  <Icon size={18} className="md:hidden" strokeWidth={isActive ? 2.2 : 1.5} />
                  <span className="hidden md:block text-[13px] tracking-wider font-medium">
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
