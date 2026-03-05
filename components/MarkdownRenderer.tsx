"use client";

import { useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import "katex/dist/katex.min.css";

interface MarkdownRendererProps {
  content: string;
}

/* ── Copy button ── */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-[11px] text-gray-500 hover:text-white transition-colors font-mono"
    >
      {copied ? (
        <>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

/* ── Markdown Renderer ── */

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeHighlight, rehypeSlug]}
      components={{
        h1: ({ children }) => (
          <h1
            className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4 leading-tight"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2
            className="text-2xl font-bold text-gray-100 mt-12 mb-4"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3
            className="text-lg font-semibold text-gray-100 mt-8 mb-3"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="text-[14px] text-gray-400 leading-relaxed mb-4">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="space-y-2 mb-6 ml-1">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="space-y-2 mb-6 ml-1 list-decimal list-inside">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-[14px] text-gray-400 leading-relaxed flex items-start gap-2">
            <span className="text-emerald-400/70 mt-1 shrink-0">▸</span>
            <span>{children}</span>
          </li>
        ),
        strong: ({ children }) => (
          <strong className="text-gray-100 font-semibold">{children}</strong>
        ),
        code: ({ children, className }) => {
          const isBlock = className?.includes("language-");
          if (isBlock) {
            return (
              <code className={`${className ?? ""} text-[13px]`}>
                {children}
              </code>
            );
          }
          return (
            <code className="text-emerald-400/90 bg-white/[0.06] px-1.5 py-0.5 rounded text-[13px] font-mono">
              {children}
            </code>
          );
        },
        pre: ({ children }) => {
          const codeChild = children as React.ReactElement<{
            className?: string;
            children?: string;
          }>;
          const className = codeChild?.props?.className ?? "";
          const lang = className.replace("language-", "") || "code";
          const rawText =
            typeof codeChild?.props?.children === "string"
              ? codeChild.props.children
              : "";

          return (
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] mb-6 overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="text-[11px] text-gray-500 font-mono tracking-wider">
                  {lang}
                </span>
                <CopyButton text={rawText} />
              </div>
              {/* Code with syntax highlighting */}
              <pre className="p-5 overflow-x-auto text-[13px] leading-relaxed">
                {children}
              </pre>
            </div>
          );
        },
        hr: () => <hr className="border-white/[0.08] my-8" />,
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400/80 hover:text-emerald-300 underline underline-offset-2 transition-colors"
          >
            {children}
          </a>
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[13px] border-collapse">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="border-b border-white/[0.1]">{children}</thead>
        ),
        th: ({ children }) => (
          <th className="text-left text-gray-200 font-semibold py-2 px-3 text-[12px] tracking-wider uppercase">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="text-gray-400 py-2 px-3 border-b border-white/[0.05]">
            {children}
          </td>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-emerald-400/40 pl-4 my-4 text-gray-500 italic">
            {children}
          </blockquote>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
