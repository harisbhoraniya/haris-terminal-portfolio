"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { HIRE_REASONS } from "@/lib/content";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { PreviewHeading } from "./PreviewHeading";

export function HireMeCard() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show">
      <motion.div variants={staggerItem}>
        <PreviewHeading
          eyebrow="// hire-me"
          title="Why Hire Me"
          subtitle="The short version, for busy recruiters."
        />
      </motion.div>

      <ul className="m-0 list-none space-y-0 p-0">
        {HIRE_REASONS.map((reason, i) => (
          <motion.li
            key={reason.title}
            variants={staggerItem}
            className="flex gap-[11px] border-b border-glass-border/50 py-[11px] last:border-b-0"
          >
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-phosphor/15 text-phosphor">
              <Check size={12} strokeWidth={3} />
            </span>
            <span>
              <strong className="mb-0.5 block text-[13.5px] font-semibold text-ink">
                {reason.title}
              </strong>
              <span className="text-[12.5px] leading-relaxed text-ink-muted">
                {reason.desc}
              </span>
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
