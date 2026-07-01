"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/content";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { PreviewHeading } from "./PreviewHeading";
import { Badge } from "@/components/ui/badge";

export function ProjectsGrid() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show">
      <motion.div variants={staggerItem}>
        <PreviewHeading
          eyebrow="// projects"
          title="Things I've Shipped"
          subtitle="Six projects spanning web, desktop, mobile and browser."
        />
      </motion.div>

      <div className="grid grid-cols-1 gap-3.5">
        {PROJECTS.map((project) => (
          <motion.a
            key={project.id}
            href={project.href}
            variants={staggerItem}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group block overflow-hidden rounded-xl border border-glass-border/60 bg-white/[0.018] transition-colors hover:border-phosphor/30"
          >
            <div className="relative flex h-[78px] items-start bg-gradient-to-br from-phosphor/[0.1] to-amber/[0.08] px-[10px] py-2">
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white/[0.18]" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/[0.18]" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/[0.18]" />
              </div>
              <span className="absolute bottom-2 right-3 text-[22px] opacity-50 transition-transform duration-300 group-hover:scale-110">
                {project.emoji}
              </span>
            </div>
            <div className="px-[15px] pb-4 pt-3.5">
              <p className="mb-1 text-[14.5px] font-bold text-ink">{project.name}</p>
              <p className="mb-2.5 text-[12.5px] leading-relaxed text-ink-muted">
                {project.description}
              </p>
              <div className="mb-2.5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="amber">
                    {tag}
                  </Badge>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-phosphor group-hover:underline">
                View details →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
