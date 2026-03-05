"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";

// Basic regex to find markdown headers 1-3.
// We aren't doing a full AST parse here, just extracting for the TOC overlay.
const headingRegex = /^(#{1,3})\s+(.+)$/gm;

interface TocHeading {
  level: number;
  text: string;
  id: string;
}

// Convert arbitrary heading text to the same slug format rehype-slug produces
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function TocAccordion({ markdown }: { markdown: string }) {
  const headings: TocHeading[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const rawText = match[2];

    // Clean markdown bold/italics syntax from the text if present
    const cleanText = rawText.replace(/[*_~`]/g, "");

    headings.push({
      level,
      text: cleanText,
      id: slugify(cleanText),
    });
  }

  if (headings.length === 0) return null;

  return (
    <div className="mb-10 w-full mt-8">
      <Accordion
        type="single"
        collapsible
        className="w-full border border-white/[0.08] bg-white/[0.02] rounded-xl px-4 py-1"
      >
        <AccordionItem value="toc" className="border-none">
          <AccordionTrigger className="text-gray-200 hover:text-white hover:no-underline font-mono text-[13px] tracking-wide py-3">
            Table of Contents
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4">
            <ul className="space-y-2.5">
              {headings.map((heading, i) => (
                <li
                  key={i}
                  style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}
                  className="text-[13px] text-gray-400"
                >
                  <Link
                    href={`#${heading.id}`}
                    className="hover:text-emerald-400 transition-colors block"
                  >
                    {heading.text}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
