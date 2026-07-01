"use client";

import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/lib/content";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { PreviewHeading } from "./PreviewHeading";

export function SkillsCard() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show">
      <motion.div variants={staggerItem}>
        <PreviewHeading
          eyebrow="// skills"
          title="Tech Stack"
          subtitle="Grouped by where I use it — not just a tag cloud."
        />
      </motion.div>

      {SKILL_GROUPS.map((group) => (
        <motion.div key={group.title} variants={staggerItem} className="mb-5 last:mb-0">
          <p className="mb-2.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-phosphor shadow-[0_0_8px_rgba(110,231,168,0.35)]" />
            {group.title}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-[7px] border border-glass-border/60 bg-white/[0.025] px-[11px] py-[6px] text-[12.5px] text-ink-muted transition-colors hover:border-phosphor/25 hover:text-ink"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
