"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

import { SectionShell } from "./section-shell";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Hiring for backend engineering, platform, or API-heavy roles."
      description="This contact block avoids fake form endpoints. It keeps direct channels obvious and leaves a clear TODO for production form wiring."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass-panel rounded-[32px] p-8"
        >
          <div className="space-y-5 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-sky-300" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-sky-300" />
              <a href="tel:+918226956764" className="hover:text-white">
                +91 8226956764
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-sky-300" />
              <span>Sitamarhi, Bihar, India</span>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              <Button variant="secondary" size="icon" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <a href={siteConfig.linkedIn} target="_blank" rel="noreferrer">
              <Button variant="secondary" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass-panel rounded-[32px] p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-slate-400">Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none ring-0 transition placeholder:text-slate-500 focus:border-sky-300/30"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-400">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none ring-0 transition placeholder:text-slate-500 focus:border-sky-300/30"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm text-slate-400">Message</span>
            <textarea
              rows={6}
              placeholder="Tell Rahul about the role, team, or backend challenge."
              className="w-full rounded-[24px] border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/30"
            />
          </label>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm leading-7 text-slate-400">
              TODO: Wire this form to Resend, Formspree, or a serverless action before production launch.
            </p>
            <Button type="button">Send Inquiry</Button>
          </div>
        </motion.form>
      </div>
    </SectionShell>
  );
}
