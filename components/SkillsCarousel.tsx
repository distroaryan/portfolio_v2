"use client";

import {
  SiGo,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiLinux,
  SiGraphql,
  SiPrisma,
  SiTailwindcss,
  SiRabbitmq,
} from "react-icons/si";

const skills = [
  { label: "Go",          icon: SiGo,          color: "#00ADD8" },
  { label: "Node.js",     icon: SiNodedotjs,   color: "#6cb248" },
  { label: "PostgreSQL",  icon: SiPostgresql,  color: "#4169e1" },
  { label: "Redis",       icon: SiRedis,       color: "#e0393e" },
  { label: "Docker",      icon: SiDocker,      color: "#2496ed" },
  { label: "Kubernetes",  icon: SiKubernetes,  color: "#326CE5" },
  { label: "TypeScript",  icon: SiTypescript,  color: "#3178c6" },
  { label: "Next.js",     icon: SiNextdotjs,   color: "#e2e8f0" },
  { label: "MongoDB",     icon: SiMongodb,     color: "#4db33d" },
  { label: "Git",         icon: SiGit,         color: "#f05032" },
  { label: "GitHub",      icon: SiGithub,      color: "#c9d1d9" },
  { label: "Linux",       icon: SiLinux,       color: "#fcc624" },
  { label: "GraphQL",     icon: SiGraphql,     color: "#e10098" },
  { label: "Prisma",      icon: SiPrisma,      color: "#5a67d8" },
  { label: "Tailwind",    icon: SiTailwindcss, color: "#38bdf8" },
  { label: "RabbitMQ",    icon: SiRabbitmq,    color: "#ff6600" },
];

// Double the array for seamless looping
const doubled = [...skills, ...skills];

export default function SkillsCarousel() {
  return (
    <div className="skills-track-wrapper" aria-label="Skills">
      <div className="skills-track">
        {doubled.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <span key={i} className="skill-pill">
              <Icon
                style={{ color: skill.color, flexShrink: 0 }}
                className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
              />
              <span>{skill.label}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
