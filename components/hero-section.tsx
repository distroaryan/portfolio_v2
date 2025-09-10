"use client"
import { Button } from '@/components/ui/button';
import { ReactTyped } from "react-typed";

export function HeroSection() {
  return (
    <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <ReactTyped
                strings={[
                  "Aryan Srivastava",
                  "Full Stack Developer",
                  "Backend Developer",
                ]}
                typeSpeed={70}     
                backSpeed={50}     
                backDelay={1200}   
                loop
                showCursor={true} 
              />
            </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              I love building full-stack and Gen AI applications that solve real-world problems.
            </p>
          </div>
          
          {/* About Section */}
          <div className="space-y-6">
            <h2 className="relative inline-block after:content-[''] after:block after:border-b-2 after:border-white after:mt-1 after:w-full after:relative after:top-1 after:shadow-[0_4px_0_0_#fff] text-3xl sm:text-4xl font-bold">About</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Hey, I'm Aryan Srivastava, a Computer Science undergrad and full-stack developer who thrives on building and shipping solutions that truly matter. I work primarily with React.js, Next.js, and Node.js, using TypeScript to craft robust applications on both the frontend and backend.
              </p>
              <p>
                If you've got an idea or want to collaborate on an exciting project, feel free to drop me a DM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}