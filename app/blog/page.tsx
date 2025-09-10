import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const blogs = [
  {
    id: 'blog-1',
    title: 'Building Modern Web Applications with Next.js 14',
    excerpt: 'Exploring the latest features and best practices for building scalable web applications with Next.js 14.',
    content: `Next.js 14 introduces several groundbreaking features that revolutionize how we build web applications. The new App Router provides a more intuitive way to structure your application, while Server Components offer unprecedented performance benefits.

In this comprehensive guide, we'll explore:

• **App Router Architecture**: Understanding the new file-based routing system and how it improves developer experience
• **Server Components**: Leveraging server-side rendering for better performance and SEO
• **Streaming and Suspense**: Implementing progressive loading for better user experience
• **Data Fetching Patterns**: Modern approaches to fetching and caching data
• **Performance Optimization**: Techniques to make your applications lightning fast

The integration of TypeScript has never been smoother, and the developer experience continues to improve with better error messages and debugging tools. Whether you're building a simple blog or a complex e-commerce platform, Next.js 14 provides the tools you need to succeed.`,
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Next.js', 'React', 'Web Development', 'TypeScript']
  },
  {
    id: 'blog-2',
    title: 'The Art of Clean Code: Writing Maintainable JavaScript',
    excerpt: 'Best practices and principles for writing clean, readable, and maintainable JavaScript code that scales.',
    content: `Writing clean code is an art that every developer should master. Clean code is not just about making your code work; it's about making it readable, maintainable, and scalable for future developers (including yourself).

Key principles we'll cover:

• **Meaningful Naming**: Choosing descriptive names for variables, functions, and classes
• **Function Design**: Writing small, focused functions that do one thing well
• **Code Organization**: Structuring your codebase for maximum readability
• **Error Handling**: Implementing robust error handling strategies
• **Testing**: Writing tests that document your code's behavior
• **Refactoring**: Continuously improving your code without changing its behavior

Remember, code is read far more often than it's written. By following these principles, you'll create code that's not only functional but also a joy to work with. Your future self and your teammates will thank you for taking the time to write clean, well-structured code.`,
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['JavaScript', 'Clean Code', 'Best Practices', 'Software Engineering']
  },
  {
    id: 'blog-3',
    title: 'Mastering CSS Grid and Flexbox for Modern Layouts',
    excerpt: 'A comprehensive guide to creating responsive and flexible layouts using CSS Grid and Flexbox.',
    content: `CSS Grid and Flexbox are powerful layout systems that have revolutionized how we approach web design. Understanding when and how to use each one is crucial for creating modern, responsive layouts.

**CSS Grid vs Flexbox:**

CSS Grid is perfect for two-dimensional layouts where you need to control both rows and columns. It's ideal for:
• Page layouts and complex grid systems
• Card-based designs
• Magazine-style layouts
• Any design where you need precise control over both axes

Flexbox excels at one-dimensional layouts and is perfect for:
• Navigation bars and menus
• Centering content
• Distributing space between items
• Creating flexible component layouts

**Practical Examples:**

We'll build several real-world examples including:
• A responsive photo gallery using CSS Grid
• A flexible navigation system with Flexbox
• A complex dashboard layout combining both techniques
• Mobile-first responsive design patterns

By the end of this guide, you'll have a solid understanding of when to use Grid vs Flexbox and how to combine them effectively for powerful, maintainable layouts.`,
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['CSS', 'Grid', 'Flexbox', 'Responsive Design', 'Frontend']
  },
  {
    id: 'blog-4',
    title: 'State Management in React: From useState to Zustand',
    excerpt: 'Exploring different state management solutions in React applications and when to use each approach.',
    content: `State management is one of the most important aspects of building React applications. As your app grows, choosing the right state management solution becomes crucial for maintainability and performance.

**State Management Evolution:**

• **Local State (useState)**: Perfect for component-specific state
• **Context API**: Great for sharing state across component trees
• **Redux**: The battle-tested solution for complex applications
• **Zustand**: A lightweight alternative with a simpler API
• **Jotai**: Atomic state management for fine-grained control

**When to Use What:**

**useState** is your go-to for simple, component-local state. Use it when the state doesn't need to be shared with other components.

**Context API** works well for theme data, user authentication, or any state that needs to be accessed by many components but doesn't change frequently.

**Redux** shines in large applications with complex state interactions, time-travel debugging needs, or when you need predictable state updates.

**Zustand** offers a middle ground with a simpler API than Redux but more power than Context API. It's perfect for medium-sized applications.

We'll build practical examples with each approach, showing you how to migrate between different solutions as your application grows.`,
    date: '2023-12-28',
    readTime: '12 min read',
    tags: ['React', 'State Management', 'Redux', 'Zustand', 'Context API']
  },
  {
    id: 'blog-5',
    title: 'Building Accessible Web Applications: A Developer\'s Guide',
    excerpt: 'Essential techniques and best practices for creating web applications that are accessible to all users.',
    content: `Web accessibility isn't just a nice-to-have feature—it's a fundamental requirement for creating inclusive digital experiences. Building accessible applications benefits everyone, not just users with disabilities.

**Core Accessibility Principles:**

• **Perceivable**: Information must be presentable in ways users can perceive
• **Operable**: Interface components must be operable by all users
• **Understandable**: Information and UI operation must be understandable
• **Robust**: Content must be robust enough for various assistive technologies

**Practical Implementation:**

**Semantic HTML**: Using the right HTML elements for the right purpose is the foundation of accessibility. Screen readers and other assistive technologies rely on semantic markup to understand content structure.

**ARIA Labels and Roles**: When semantic HTML isn't enough, ARIA attributes help provide additional context for assistive technologies.

**Keyboard Navigation**: Ensuring all interactive elements are accessible via keyboard navigation is crucial for users who can't use a mouse.

**Color and Contrast**: Maintaining sufficient color contrast and not relying solely on color to convey information ensures content is perceivable by users with visual impairments.

**Testing Tools and Techniques:**

We'll explore various tools for testing accessibility, including automated testing with axe-core, manual testing with screen readers, and using browser developer tools to audit accessibility.

Remember: accessibility is not a one-time task but an ongoing commitment to inclusive design.`,
    date: '2023-12-20',
    readTime: '9 min read',
    tags: ['Accessibility', 'Web Standards', 'Inclusive Design', 'ARIA', 'UX']
  },
  {
    id: 'blog-6',
    title: 'Modern JavaScript: ES2024 Features You Should Know',
    excerpt: 'Discover the latest JavaScript features and how they can improve your development workflow.',
    content: `JavaScript continues to evolve rapidly, with new features being added regularly to make development more efficient and enjoyable. ES2024 brings several exciting additions that every developer should know about.

**New Features in ES2024:**

• **Array Grouping**: Native methods for grouping array elements
• **Promise.withResolvers()**: A new utility for creating promises
• **Temporal API**: Modern date and time handling
• **Pattern Matching**: Powerful control flow improvements
• **Records and Tuples**: Immutable data structures

**Array Grouping Methods:**

The new \`Object.groupBy()\` and \`Map.groupBy()\` methods provide native support for grouping array elements, eliminating the need for complex reduce operations.

**Promise.withResolvers():**

This new method returns an object with a promise and its resolve/reject functions, making it easier to work with promises in certain scenarios.

**Temporal API:**

Finally, a modern replacement for the problematic Date object. Temporal provides immutable, timezone-aware date and time handling with a much cleaner API.

**Best Practices:**

• Use these features progressively as browser support improves
• Consider polyfills for older browsers
• Update your build tools to support the latest syntax
• Keep learning and experimenting with new features

The JavaScript ecosystem continues to mature, and these new features represent significant improvements in developer experience and code quality.`,
    date: '2023-12-15',
    readTime: '7 min read',
    tags: ['JavaScript', 'ES2024', 'Modern JS', 'Web Development', 'Features']
  },
  {
    id: 'blog-7',
    title: 'Building Performant React Applications: Tips and Tricks',
    excerpt: 'Learn how to optimize your React applications for better performance and user experience.',
    content: `Performance is crucial for user experience, and React provides many tools and techniques to help you build fast, responsive applications. Let's explore the most effective strategies for optimizing React performance.

**Core Performance Principles:**

• **Minimize Re-renders**: Use React.memo, useMemo, and useCallback strategically
• **Code Splitting**: Load only what you need, when you need it
• **Bundle Optimization**: Reduce bundle size with proper tree shaking
• **Image Optimization**: Implement lazy loading and modern formats
• **State Management**: Choose the right state solution for your needs

**React.memo and Memoization:**

React.memo prevents unnecessary re-renders of functional components when props haven't changed. Use it for components that receive the same props frequently.

**useMemo and useCallback:**

These hooks help optimize expensive calculations and prevent unnecessary function recreations that can trigger child component re-renders.

**Code Splitting Strategies:**

• Route-based splitting with React.lazy()
• Component-based splitting for large components
• Dynamic imports for conditional features
• Preloading critical routes

**Bundle Analysis:**

Use tools like webpack-bundle-analyzer to identify large dependencies and opportunities for optimization.

**Performance Monitoring:**

• React DevTools Profiler
• Web Vitals metrics
• Real User Monitoring (RUM)
• Lighthouse audits

Remember: measure first, optimize second. Always profile your application to identify actual bottlenecks before applying optimizations.`,
    date: '2023-12-10',
    readTime: '11 min read',
    tags: ['React', 'Performance', 'Optimization', 'Web Development', 'UX']
  },
  {
    id: 'blog-8',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Exploring emerging trends and technologies that will shape web development in the coming year.',
    content: `Web development is constantly evolving, and 2024 promises to bring exciting new trends and technologies. Let's explore what's on the horizon and how you can prepare for the future.

**Major Trends for 2024:**

• **AI-Powered Development**: Tools that write and optimize code
• **Edge Computing**: Bringing computation closer to users
• **WebAssembly Growth**: High-performance web applications
• **Micro-Frontends**: Scalable frontend architectures
• **Sustainability Focus**: Green web development practices

**AI in Development:**

AI tools like GitHub Copilot and ChatGPT are changing how we write code. These tools can help with:
• Code generation and completion
• Bug detection and fixing
• Documentation writing
• Test case generation
• Code review assistance

**Edge Computing Revolution:**

Edge computing brings processing closer to users, reducing latency and improving performance. Technologies like Cloudflare Workers and Vercel Edge Functions are making edge computing accessible to all developers.

**WebAssembly Expansion:**

WASM is enabling high-performance applications in the browser, opening up new possibilities for:
• Game development
• Image and video processing
• Scientific computing
• Legacy application migration

**Micro-Frontend Architecture:**

Large organizations are adopting micro-frontends to:
• Enable team autonomy
• Improve scalability
• Reduce deployment risks
• Support technology diversity

**Sustainable Development:**

Environmental consciousness is driving focus on:
• Optimized bundle sizes
• Efficient algorithms
• Green hosting solutions
• Carbon-aware development practices

Stay curious, keep learning, and embrace these trends to remain competitive in the evolving web development landscape.`,
    date: '2023-12-05',
    readTime: '9 min read',
    tags: ['Web Development', 'Trends', 'AI', 'Edge Computing', 'Future Tech']
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-16 pb-16">
        {/* Back to Home Button */}
        <section className="px-4 sm:px-6 lg:px-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="group">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </Button>
          </div>
        </section>
        
        {/* Header Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              My <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thoughts, tutorials, and insights about web development, programming, and technology. 
              Sharing knowledge and experiences from my journey as a developer.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {blogs.map((blog) => (
                <AccordionItem 
                  key={blog.id} 
                  value={blog.id}
                  className="border border-border rounded-lg px-6 py-2 hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="text-left space-y-3 flex-1 mr-4">
                      <h3 className="text-xl font-semibold leading-tight">
                        {blog.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {blog.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(blog.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {blog.readTime}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <div className="space-y-6">
                      <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                        {blog.content.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="mb-4 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 pt-4 border-t border-border">
                        <Tag className="h-4 w-4 text-muted-foreground" />
                        <div className="flex flex-wrap gap-2">
                          {blog.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
}