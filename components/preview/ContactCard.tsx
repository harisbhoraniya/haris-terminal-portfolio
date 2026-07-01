"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, Globe, type LucideIcon } from "lucide-react";
import { CONTACT_LINKS } from "@/lib/content";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { PreviewHeading } from "./PreviewHeading";
import type { ContactLink } from "@/lib/types";

const ICONS: Record<ContactLink["icon"], LucideIcon> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  website: Globe,
};

export function ContactCard() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show">
      <motion.div variants={staggerItem}>
        <PreviewHeading
          eyebrow="// contact"
          title="Let's Talk"
          subtitle="Reach out on whichever works best for you."
        />
      </motion.div>

      <div className="grid grid-cols-2 gap-2.5 max-[480px]:grid-cols-1">
        {CONTACT_LINKS.map((link) => {
          const Icon = ICONS[link.icon];
          return (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              whileHover={{ y: -1 }}
              className="flex items-center gap-[11px] rounded-[10px] border border-glass-border/60 bg-white/[0.02] px-[13px] py-3 transition-colors hover:border-phosphor/30 hover:bg-phosphor/[0.05]"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-ink-muted">
                <Icon size={15} />
              </span>
              <span className="min-w-0">
                <p className="mb-0.5 text-[11px] text-ink-faint">{link.label}</p>
                <p className="truncate text-[12.5px] font-semibold text-ink">
                  {link.value}
                </p>
              </span>
            </motion.a>
          );
        })}
      </div>

      <motion.p variants={staggerItem} className="mt-4 font-mono text-xs text-ink-faint">
        {"// placeholder links — replace with real profiles"}
      </motion.p>
    </motion.div>
  );
}
