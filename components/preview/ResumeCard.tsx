"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { RESUME } from "@/lib/content";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { PreviewHeading } from "./PreviewHeading";
import { Button } from "@/components/ui/button";

export function ResumeCard() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show">
      <motion.div variants={staggerItem}>
        <PreviewHeading eyebrow="// resume" title="Resume" />
      </motion.div>

      <motion.div
        variants={staggerItem}
        className="rounded-xl border border-glass-border/60 bg-white/[0.02] px-6 py-8 text-center"
      >
        <FileText className="mx-auto mb-3 text-ink-muted" size={30} strokeWidth={1.5} />
        <p className="text-sm leading-relaxed text-ink-muted">
          A full PDF breakdown of my experience, skills and projects.
        </p>
        <Button asChild className="mt-5">
          <a href={RESUME.href} download>
            <Download size={16} />
            Download Resume
          </a>
        </Button>
        <p className="mt-3 font-mono text-[11.5px] text-ink-faint">{`// ${RESUME.note}`}</p>
      </motion.div>
    </motion.div>
  );
}
