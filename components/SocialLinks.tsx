import Link from "next/link";

const socials = [
  {
    label: "Twitter",
    href: "https://x.com/yetanothercode",
  },
  {
    label: "Github",
    href: "https://github.com/Aryan123-rgb",
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/aryan-srivastava-560b91255/",
  },
  {
    label: "Email",
    href: "mailto:srivastavaaryanalc76@gmail.com",
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-8">
      <p
        className="text-[15px] text-yellow-400/80 italic mb-3"
        style={{ fontFamily: "var(--font-heading), serif" }}
      >
        Connect with me on
      </p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {socials.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="text-[14px] font-mono text-gray-400 hover:text-yellow-400 transition-colors duration-200 tracking-wider"
          >
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
