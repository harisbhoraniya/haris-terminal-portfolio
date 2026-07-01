"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/content";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { PreviewHeading } from "./PreviewHeading";

export function ExperienceCard() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show">
      <motion.div variants={staggerItem}>
        <PreviewHeading eyebrow="// experience" title="Work History" />
      </motion.div>

      {EXPERIENCE.map((item) => (
        <motion.div
          key={item.role}
          variants={staggerItem}
          className="relative pl-[22px] pb-1 after:absolute after:bottom-0 after:left-[8px] after:top-4 after:w-px after:bg-glass-border before:absolute before:left-1 before:top-[5px] before:h-[9px] before:w-[9px] before:rounded-full before:bg-phosphor before:shadow-[0_0_10px_rgba(110,231,168,0.35)] last:after:hidden"
        >
          <p className="mb-0.5 text-[15px] font-bold text-ink">{item.role}</p>
          <p className="mb-2.5 font-mono text-[11.5px] text-phosphor-dim">{item.meta}</p>
          <ul className="m-0 list-none space-y-1.5 p-0">
            {item.points.map((point, i) => (
              <li
                key={i}
                className="relative pl-4 text-[13px] leading-[1.7] text-ink-muted before:absolute before:left-0 before:text-phosphor-dim before:content-['—']"
              >
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
