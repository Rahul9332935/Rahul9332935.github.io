"use client";

import { animate, motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

import { achievements } from "@/data/portfolio";

import { SectionShell } from "./section-shell";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.6, ease: "easeOut" });
    return () => controls.stop();
  }, [count, value]);

  useMotionValueEvent(count, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  return (
    <motion.span>
      {displayValue}
      {suffix}
    </motion.span>
  );
}

export function AchievementsSection() {
  return (
    <SectionShell
      id="achievements"
      eyebrow="Achievements"
      title="Early signals of discipline and execution."
      description="These metrics come from the current portfolio content and should be updated when newer production metrics are available."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass-panel rounded-[28px] p-6"
          >
            <div className="font-display text-4xl text-white">
              <Counter value={item.value} suffix={item.suffix} />
            </div>
            <div className="mt-3 text-sm text-slate-400">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
