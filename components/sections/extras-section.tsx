"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Quote } from "lucide-react";

import { testimonials } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";

import { SectionShell } from "./section-shell";

export function ExtrasSection() {
  return (
    <SectionShell
      id="extras"
      eyebrow="Extras"
      title="Recruiter-friendly extras without turning the site into noise."
      description="This section intentionally includes placeholders where verified data is missing."
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="glass-panel rounded-[32px] p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-sky-300">GitHub</div>
              <h3 className="mt-3 text-2xl font-semibold text-white">Contribution snapshot</h3>
            </div>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
            >
              View profile
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-5">
              <Github className="h-5 w-5 text-sky-300" />
              <div className="mt-4 text-sm leading-7 text-slate-300">
                GitHub username: <span className="font-semibold text-white">Rahul9332935</span>
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                TODO: Replace this block with a live contribution heatmap or generated SVG snapshot during build.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-5">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Blog</div>
              <div className="mt-4 text-xl font-semibold text-white">Thoughts on backend engineering</div>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                TODO: Add engineering essays on API design, scalability, debugging, and distributed systems.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5">
          {testimonials.map((item, index) => (
            <motion.div
              key={`${item.author}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-panel rounded-[28px] p-6"
            >
              <Quote className="h-5 w-5 text-sky-300" />
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.quote}</p>
              <div className="mt-5">
                <div className="text-sm font-semibold text-white">{item.author}</div>
                <div className="text-sm text-slate-500">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
