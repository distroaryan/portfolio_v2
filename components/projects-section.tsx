import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Projects {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
}

const projects: Projects[] = [
  {
    title: "Talk-to-Code",
    description:
      "A RAG-based application that allows you to upload GitHub repositories and chat with your codebase using AI. Get instant answers about your code structure, functionality, and implementation details.",
    image: "/talk-to-code.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Google Gemini",
      "PostgreSQL",
      "Prisma",
      "shadcn/ui",
    ],
    liveUrl: "https://talk-to-code.netlify.app",
    githubUrl: "https://github.com/Aryan123-rgb/talk-to-code-restapi/",
  },
  {
    title: "SenseAI",
    description:
      "An online carrer coach website which helps people prepare for there job interviews by generating resume, cover letters and giving mock quizes with detail analysis",
    image: "/senseiai.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "shadcn/ui",
      "React-Query",
      "Google Gemini",
    ],
    githubUrl: "https://github.com/Aryan123-rgb/ai-carrer-coach-agent",
    liveUrl: "https://senseiaiblooddy.netlify.app/",
  },
  {
    title: "Meme Forge",
    description:
      "An AI-powered meme generator that creates hilarious and contextually relevant memes. Built with a modern tech stack combining frontend and backend AI capabilities.",
    image: "/meme-forge.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Python",
      "FastAPI",
      "LangChain",
    ],
    githubUrl: "https://github.com/Aryan123-rgb/meme-generator",
  },
  {
    title: "Resume.AI",
    description:
      "An AI powered ATS friendly resume builder. Users can use this website to generate high quality ATS friendly resume by providing there basic details and download the resume as a pdf and latex code",
    image: "/resume.ai.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "shadcn/ui",
      "Docker",
      "React-Query",
    ],
    githubUrl: "https://github.com/Aryan123-rgb/resume.ai",
  },
  {
    title: "CodeCraft",
    description:
      "An online coding platform similar to leetcode where you can practice DSA questions in c++/java/javascript with questions that are relevant to todays market",
    image: "/codecraft.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "shadcn/ui",
      "Docker",
      "React-Query",
    ],
    githubUrl: "https://github.com/Aryan123-rgb/codecraft",
  },
  {
    title: "Muzer",
    description:
      "An colloborative music player website, where users can create private and public rooms and people can add there favourite songs to the queue",
    image: "/muzer.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "shadcn/ui",
      "React-Query",
    ],
    githubUrl: "https://github.com/Aryan123-rgb/codecraft",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 mb-10"
    >
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          <h2 className="relative inline-block after:content-[''] after:block after:border-b-2 after:border-white after:mt-1 after:w-full after:relative after:top-1 after:shadow-[0_4px_0_0_#fff] text-3xl sm:text-4xl font-bold">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border bg-card flex flex-col justify-between"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="flex-1"
                      >
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center">
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                Show More Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
