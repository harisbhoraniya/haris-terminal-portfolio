"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/content";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { PreviewHeading } from "./PreviewHeading";

export function EducationCard() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show">
      <motion.div variants={staggerItem}>
        <PreviewHeading eyebrow="// education" title="Education" />
      </motion.div>

      {EDUCATION.map((edu) => (
        <motion.div
          key={edu.degree}
          variants={staggerItem}
          className="mb-3 rounded-xl border border-glass-border/60 bg-white/[0.02] px-[17px] py-4"
        >
          <p className="mb-1 text-[14.5px] font-bold text-ink">{edu.degree}</p>
          <p className="text-[12.5px] text-ink-muted">{edu.meta}</p>
        </motion.div>
      ))}

      <motion.p
        variants={staggerItem}
        className="mt-3.5 font-mono text-xs text-ink-faint"
      >
        {"// replace placeholders above with real institution & year"}
      </motion.p>
    </motion.div>
  );
}
