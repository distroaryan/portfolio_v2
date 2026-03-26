export interface Project {
  slug: string;
  title: string;
  description: string;
  type: "Backend" | "Full stack";
  tags: string[];
  architecture?: string;
  github?: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    slug: "loadex",
    title: "Loadex",
    description: "A HTTP load balancer written in Go which features multiple routing algorithms, includes active connection tracking and supports monitoring",
    type: "Backend",
    tags: ["Go", "Prometheus", "Grafana", "K6"],
    architecture: "/architecture_diagram_dark.png",
    github: "https://github.com/distroaryan/loadex",
  },
  {
    slug: "flowguard",
    title: "FlowGuard",
    description: "A rate limiter library build using Go. It features token bucket algorithm and sliding window algorithm with in-memory storage and redis backed storage",
    type: "Backend",
    tags: ["Go", "Redis"],
    github: "https://github.com/distroaryan/flowguard",
  },
  {
    slug: "walgo",
    title: "Walgo",
    description: "A key-value store written in Go, built on top of a custom Write-Ahead Log (WAL) engine.",
    type: "Backend",
    tags: ["Go", "WAL", "kv"],
    github: "https://github.com/distroaryan/walgo",
  },
  {
    slug: "coursegen",
    title: "CourseGen",
    description: "An AI-powered platform to generate comprehensive courses from a simple prompt.",
    type: "Full stack",
    tags: ["Nextjs", "better-auth", "postgres", "ai", "Inngest"],
    github: "https://github.com/distroaryan/coursegen",
    liveLink: "https://coursegen-five.vercel.app/",
  },
  {
    slug: "codecraft",
    title: "Codecraft",
    description: "An online judge platform similar to LeetCode where people can solve DSA questions. Code is evaluated using Judge0 server",
    type: "Full stack",
    tags: ["Nextjs", "TypeScript", "Prisma", "Postgres", "Judge0", "Webhooks"],
    github: "https://github.com/distroaryan/codecraft",
  },
  {
    slug: "talk-to-code",
    title: "Talk-To-Code",
    description: "A RAG platform that allows you to upload a GitHub repository URL and ask any question related to that repository.",
    type: "Full stack",
    tags: ["Nextjs", "TypeScript", "Prisma", "Postgres", "Langchain", "Inngest"],
    github: "https://github.com/distroaryan/talk-to-code-restapi",
    liveLink: "https://talk-to-code.netlify.app/",
  },
  {
    slug: "restaurant-management",
    title: "Restaurant Management",
    description: "A simple restaurant management backend to get some practice with Gin, Go-MongoDB, Prometheus, Grafana, OpenTelemetry, and k6.",
    type: "Backend",
    tags: ["Go", "MongoDB", "Gin", "Prometheus", "Grafana", "OpenTelemetry"],
    github: "https://github.com/distroaryan/restaurant-management",
  },
  {
    slug: "bencoder-parser",
    title: "Bencoder Parser",
    description: "A simple lightweight parser which encodes and decodes metadata used by .torrent files.",
    type: "Backend",
    tags: ["Go"],
    github: "https://github.com/distroaryan/bencoder-parser",
  },
];
