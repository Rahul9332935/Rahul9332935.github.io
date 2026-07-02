"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Command, Download, Github, Linkedin, Mail, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { siteConfig } from "@/lib/site";

const actions = [
  { label: "Open GitHub", href: siteConfig.github, icon: Github },
  { label: "Open LinkedIn", href: siteConfig.linkedIn, icon: Linkedin },
  { label: "Email Rahul", href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "Download Resume", href: siteConfig.resume, icon: Download },
  { label: "Jump to Projects", href: "#projects", icon: ArrowUpRight },
  { label: "Jump to Contact", href: "#contact", icon: ArrowUpRight }
] as const;

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const items = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return actions;
    }

    return actions.filter((action) => action.label.toLowerCase().includes(normalizedQuery));
  }, [query]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur md:inline-flex"
      >
        <Command className="h-4 w-4" />
        Quick actions
        <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-slate-400">⌘K</span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/70 px-4 pt-24 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/95 shadow-2xl"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search actions"
                  className="w-full bg-transparent text-sm text-slate-50 outline-none placeholder:text-slate-500"
                />
                <button type="button" onClick={() => setOpen(false)} className="text-slate-400">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-3">
                {items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-sky-300" />
                        {item.label}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-slate-500" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
