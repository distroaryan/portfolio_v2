export interface Project {
  title: string;
  description: string;
  type: "Backend" | "Full stack";
  tags: string[];
  image: string;
  github?: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    title: "Loadex",
    description: "A HTTP load balancer written in Go which features multiple routing algorithms, includes active connection tracking and supports monitoring",
    type: "Backend",
    tags: ["Go", "Prometheus", "Grafana", "K6"],
    image: "/loadex.png",
    github: "https://github.com/distroaryan/loadex",
  },
  {
    title: "FlowGuard",
    description: "A rate limiter library build using Go. It features token bucket algorithm and sliding window algorithm with in-memory storage and redis backed storage",
    type: "Backend",
    tags: ["Go", "Redis"],
    image: "/flowguard.png",
    github: "https://github.com/distroaryan/flowguard",
  },
  {
    title: "CourseGen",
    description: "An AI-powered platform to generate comprehensive courses from a simple prompt.",
    type: "Full stack",
    tags: ["Nextjs", "Better-Auth", "Drizzle", "Postgres", "Groq", "Inngest"],
    image: "/coursegen.png",
    github: "https://github.com/distroaryan/coursegen",
    liveLink: "https://coursegen-five.vercel.app/",
  },
  {
    title: "Talk-To-Code",
    description: "A RAG platform that allows you to enter a gitHub repository URL and ask any question related to that repository. The platform provides accurate answers with relevant source files.",
    type: "Full stack",
    tags: ["Nextjs", "TypeScript", "Prisma", "Postgres", "Langchain", "Inngest"],
    image: "/talk-to-code.png",
    github: "https://github.com/distroaryan/talk-to-cod",
    liveLink: "https://talk-to-code.netlify.app/",
  },
  {
    title: "Resume.AI",
    description: "An AI Powered resume builder which allows you to create high quality ATS friendly resume by filling out a simple form. Both the resume pdf and the latex code can be downloaded locally.",
    type: "Full stack",
    tags: ["Nextjs", "TypeScript", "Prisma", "Postgres", "Langchain", "Inngest", "Groq", "E2b", "Latex"],
    image: "/resumeai.png",
    github: "https://github.com/distroaryan/resume.ai",
    liveLink: "https://resume-ai-rosy-one.vercel.app/",
  },
];
