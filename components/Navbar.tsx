"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderOpen, PenLine, Briefcase, Map, Library, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Projects", href: "/projects", icon: FolderOpen },
  { label: "Blogs", href: "/blogs", icon: PenLine },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Journey", href: "/journey", icon: Map },
  { label: "Shelf", href: "/shelf", icon: Library },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 top-auto sm:top-6 sm:bottom-auto left-1/2 -translate-x-1/2 z-50">
      <nav className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex items-center shadow-2xl shadow-black/50">
        <ul className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  title={link.label}
                  className={`flex items-center justify-center px-3 md:px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-yellow-500/10 text-yellow-400 font-medium"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={18} className="md:hidden" />
                  <span className="hidden md:block text-[13px] tracking-wide font-medium">
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
