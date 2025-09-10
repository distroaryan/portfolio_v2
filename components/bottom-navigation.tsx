"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Home, Code, BookOpen, Mail, Moon, Sun, Twitter, Github, Linkedin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomNavigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    {
      icon: Home,
      label: 'Home',
      href: '/',
      isActive: pathname === '/'
    },
    {
      icon: Code,
      label: 'Projects',
      href: '/projects',
      isActive: pathname === '/projects'
    },
    {
      icon: BookOpen,
      label: 'Blog',
      href: '/blog',
      isActive: false
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/yetanothercode',
      isActive: false,
      external: true
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Aryan123-rgb/',
      isActive: false,
      external: true
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aryan-srivastava-560b91255/',
      isActive: false,
      external: true
    },
    {
      icon: Mail,
      label: 'Contact',
      href: 'mailto:aryan.srivastava1609@gmail.com',
      isActive: false
    },
    {
      icon: theme === 'dark' ? Sun : Moon,
      label: 'Theme',
      action: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
      isActive: false
    }
  ];

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-background/80 backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-lg">
        <div className="flex items-center space-x-2">
          {navItems.slice(0, 3).map((item, index) => {
            const Icon = item.icon;
            
            if (item.href) {
              return (
                <Button
                  key={index}
                  variant={item.isActive ? "default" : "ghost"}
                  size="sm"
                  className="rounded-full h-10 w-10 p-0 hover:scale-105 transition-all duration-200"
                  asChild
                >
                  <Link 
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </Button>
              );
            }

            return (
              <Button
                key={index}
                variant={item.isActive ? "default" : "ghost"}
                size="sm"
                className="rounded-full h-10 w-10 p-0 hover:scale-105 transition-all duration-200"
                onClick={item.action}
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{item.label}</span>
              </Button>
            );
          })}
          
          <Separator orientation="vertical" className="h-6 mx-2" />
          
          {navItems.slice(3).map((item, index) => {
            const Icon = item.icon;
            
            if (item.href) {
              return (
                <Button
                  key={index + 3}
                  variant={item.isActive ? "default" : "ghost"}
                  size="sm"
                  className="rounded-full h-10 w-10 p-0 hover:scale-105 transition-all duration-200"
                  asChild
                >
                  <Link 
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </Button>
              );
            }
            return (
              <Button
                key={index + 3}
                variant={item.isActive ? "default" : "ghost"}
                size="sm"
                className="rounded-full h-10 w-10 p-0 hover:scale-105 transition-all duration-200"
                onClick={item.action}
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}