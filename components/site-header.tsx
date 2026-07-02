"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

import { CommandPalette } from "@/components/command-palette";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 24, mass: 0.2 });

  return (
    <header className="sticky top-0 z-40">
      <motion.div className="h-0.5 origin-left bg-sky-400" style={{ scaleX }} />
      <div className="section-shell pt-4">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3">
          <a href="#top" className="font-display text-sm uppercase tracking-[0.24em] text-white">
            Rahul Kumar
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              <a href={siteConfig.github} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <a href={siteConfig.linkedIn} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
              <a href={`mailto:${siteConfig.email}`}>
                <Button variant="ghost" size="icon" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <CommandPalette />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
