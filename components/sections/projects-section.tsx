"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { projectFilters, projects } from "@/data/portfolio";

import { SectionShell } from "./section-shell";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Selected builds that show delivery, APIs, and ownership."
      description="The strongest verified backend project here is the Food App REST API. Other legacy projects remain included as historical work until refreshed with more recent systems projects."
    >
      <div className="mb-8 flex flex-wrap gap-3">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeFilter === filter
                ? "border-sky-300/30 bg-sky-300/15 text-sky-100"
                : "border-white/10 bg-white/5 text-slate-400 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass-panel overflow-hidden rounded-[30px]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-sky-300">{project.category}</div>
              <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>

              <div className="mt-5 space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Architecture</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{project.architecture}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Challenges</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{project.challenges}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Features</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span key={feature} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-sky-100 ring-1 ring-white/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Button variant="secondary">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <Button>
                    <ArrowUpRight className="h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
