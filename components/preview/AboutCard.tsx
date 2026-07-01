"use client";

import { motion } from "framer-motion";
import { ABOUT_PARAGRAPHS } from "@/lib/content";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { PreviewHeading } from "./PreviewHeading";

export function AboutCard() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show">
      <motion.div variants={staggerItem}>
        <PreviewHeading eyebrow="// about" title="About Haris" />
      </motion.div>
      {ABOUT_PARAGRAPHS.map((p, i) => (
        <motion.p
          key={i}
          variants={staggerItem}
          className="mb-3.5 text-sm leading-[1.75] text-ink-muted"
        >
          {p}
        </motion.p>
      ))}
      <motion.div
        variants={staggerItem}
        className="mt-6 rounded-[10px] border border-dashed border-glass-border px-3.5 py-3 font-mono text-[12.5px] text-ink-faint"
      >
        Run <b className="text-amber">skills</b> to see my stack broken down by
        category.
      </motion.div>
    </motion.div>
  );
}
