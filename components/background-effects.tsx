"use client";

import { motion } from "framer-motion";

const orbs = [
  "left-[8%] top-24 h-28 w-28 bg-sky-400/16",
  "right-[10%] top-32 h-44 w-44 bg-cyan-300/12",
  "left-[12%] bottom-20 h-36 w-36 bg-indigo-400/14",
  "right-[18%] bottom-24 h-24 w-24 bg-emerald-300/10"
];

export function BackgroundEffects() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {orbs.map((orb, index) => (
        <motion.div
          key={orb}
          className={`absolute rounded-full blur-3xl ${orb}`}
          animate={{
            x: [0, index % 2 === 0 ? 36 : -24, 0],
            y: [0, index % 2 === 0 ? -28 : 22, 0]
          }}
          transition={{ duration: 14 + index * 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-0 bg-hero-grid bg-hero-grid opacity-60 dark:opacity-100" />
    </div>
  );
}
