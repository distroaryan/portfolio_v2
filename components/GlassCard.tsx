import Link from "next/link";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  /**
   * Optional title text rendered inside the card.
   * It will receive the `glass-card-title` class so that `.glass-card:hover .glass-card-title`
   * in globals.css can transition its color to match the active nav-link gold (#e8c664).
   */
  title?: string;
}

export default function GlassCard({ children, className = "", href, external, title }: GlassCardProps) {
  // Hover background/border/transform handled by .glass-card:hover in globals.css.
  // `group` is kept so child elements can use Tailwind group-hover: utilities for title color.
  const classes = `glass-card group ${className}`;

  const content = (
    <>
      {title && (
        <span className="glass-card-title block transition-colors duration-400">
          {title}
        </span>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`block ${classes}`}
      >
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
