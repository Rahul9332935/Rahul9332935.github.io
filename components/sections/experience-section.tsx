"use client";

import { motion } from "framer-motion";

import { experienceTimeline } from "@/data/portfolio";

import { SectionShell } from "./section-shell";

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Timeline"
      title="A concise path into backend engineering."
      description="The current repo exposes early career milestones and training history. Replace this section with current company experience when the latest resume is provided."
    >
      <div className="relative pl-6 md:pl-8">
        <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-sky-300 via-white/10 to-transparent md:left-4" />
        <div className="space-y-6">
          {experienceTimeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative glass-panel rounded-[28px] p-6 md:p-8"
              >
                <div className="absolute left-[-1.75rem] top-8 flex h-8 w-8 items-center justify-center rounded-full border border-sky-300/30 bg-slate-950 text-sky-300 md:left-[-2.1rem]">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-sky-300">{item.period}</div>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
