"use client";

import { motion } from "framer-motion";

import { skillGroups } from "@/data/portfolio";

import { SectionShell } from "./section-shell";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Backend-focused capabilities across architecture, data, and operations."
      description="The stack map below reflects verified and requested skill categories. Add or remove items once the latest resume is supplied."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glass-panel rounded-[28px] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-sky-300/20 bg-sky-300/10 p-3">
                  <Icon className="h-5 w-5 text-sky-200" />
                </div>
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
