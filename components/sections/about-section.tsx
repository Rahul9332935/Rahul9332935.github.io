"use client";

import { motion } from "framer-motion";

import { aboutHighlights, storyPoints } from "@/data/portfolio";

import { SectionShell } from "./section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Engineering systems that stay clear under complexity."
      description="The portfolio narrative is intentionally backend-first: reliability, architecture, performance, and practical problem solving."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-[32px] p-8">
          <div className="space-y-5 text-sm leading-8 text-slate-300 md:text-base">
            {storyPoints.map((point, index) => (
              <motion.p
                key={point}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                {point}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {aboutHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="glass-panel rounded-[28px] p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Icon className="h-5 w-5 text-sky-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
