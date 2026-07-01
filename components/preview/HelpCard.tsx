"use client";

import { motion } from "framer-motion";
import { HELP_ENTRIES } from "@/lib/content";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { PreviewHeading } from "./PreviewHeading";

export function HelpCard() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show">
      <motion.div variants={staggerItem}>
        <PreviewHeading
          eyebrow="// help"
          title="Available Commands"
          subtitle="Type any of these into the terminal, or tap a chip."
        />
      </motion.div>

      <div className="grid grid-cols-2 gap-2.5 max-[480px]:grid-cols-1">
        {HELP_ENTRIES.map((h) => (
          <motion.div
            key={h.cmd}
            variants={staggerItem}
            className="rounded-[9px] border border-glass-border/60 bg-white/[0.02] px-3 py-2.5"
          >
            <p className="font-mono text-[12.5px] font-bold text-phosphor">{h.cmd}</p>
            <p className="mt-0.5 text-[11.5px] text-ink-faint">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
