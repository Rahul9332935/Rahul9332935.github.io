"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroStats } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section id="top" className="section-shell relative pb-10 pt-16 md:pb-20 md:pt-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-sky-200"
          >
            Java Backend Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl leading-[0.92] tracking-tight text-white md:text-7xl"
          >
            Building resilient backend systems with Java, APIs, and cloud-native architecture.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
          >
            Rahul Kumar engineers backend experiences around Spring Boot, persistence strategy, scalable service design,
            and the discipline required to ship reliable systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href={siteConfig.resume} download>
              <Button size="lg">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" size="lg">
                Contact
              </Button>
            </a>
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
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.4 + index * 0.08 }}
                className="glass-panel rounded-[28px] p-5"
              >
                <div className="font-display text-3xl text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-br from-sky-400/30 via-cyan-300/15 to-transparent blur-2xl" />
          <div className="glass-panel overflow-hidden rounded-[36px] p-3 shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-slate-900">
              <Image src="/assets/profile.png" alt="Rahul Kumar portrait" fill className="object-cover" priority />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-sky-300">Available for</div>
                <div className="mt-2 font-display text-2xl text-white">Backend engineering roles</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="mt-12 inline-flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-slate-400 transition hover:text-white"
      >
        Scroll
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  );
}
