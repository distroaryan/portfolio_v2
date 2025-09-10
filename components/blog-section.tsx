import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
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
];

export function BlogSection() {
  return (
    <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="relative inline-block after:content-[''] after:block after:border-b-2 after:border-white after:mt-1 after:w-full after:relative after:top-1 after:shadow-[0_4px_0_0_#fff] text-3xl sm:text-4xl font-bold">Blog</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Thoughts, tutorials, and insights about web development, programming, and technology
          </p>
        </div>
        
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
        
          <div className="text-center">
          <Button asChild size="lg" className="group">
            <Link href="/blog">
              Show More Posts
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
}