import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const socials = [
  {
    label: "Twitter",
    href: "https://x.com/distroaryan/",
    icon: FaTwitter,
  },
  {
    label: "Github",
    href: "https://github.com/distroaryan/",
    icon: FaGithub,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/aryan-srivastava-560b91255/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:srivastavaaryanalc76@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1lZPVVf7M4VaAOqddThr4qNS0EgERkPdy/view?usp=sharing",
    icon: FaFileAlt,
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
        {socials.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[14px] font-mono text-gray-400 hover:text-yellow-400 transition-colors duration-200 tracking-wider group"
            >
              <Icon className="w-4 h-4 group-hover:text-yellow-400 transition-colors duration-200" />
              <span>{s.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
