"use client";

import { motion } from "framer-motion";

import { educationItems } from "@/data/portfolio";

import { SectionShell } from "./section-shell";

export function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="Education"
      title="Academic grounding with a practical engineering pivot."
      description="Mathematics and backend training form the current verified education history."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {educationItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-panel rounded-[28px] p-6"
            >
              <Icon className="h-5 w-5 text-sky-300" />
              <div className="mt-4 text-xs uppercase tracking-[0.3em] text-sky-300">{item.period}</div>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.subtitle}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
