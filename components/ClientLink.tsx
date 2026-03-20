"use client";

import Link from "next/link";

export default function ClientLink({ href, children, className }: any) {
  const isHash = href?.startsWith("#");
  const isInternal = href?.startsWith("/");

  if (isHash) {
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", href);
          }
        }}
        className={`${className} cursor-pointer`}
      >
        {children}
      </a>
    );
  }

  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
