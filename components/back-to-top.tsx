"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

export function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 240);
  });

  return (
    <motion.a
      href="#top"
      className="fixed bottom-6 right-6 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300/40 bg-white/80 text-slate-950 shadow-xl backdrop-blur transition dark:border-white/10 dark:bg-slate-950/70 dark:text-white md:bottom-8 md:right-8"
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 10 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.96 }}
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" />
    </motion.a>
  );
}
