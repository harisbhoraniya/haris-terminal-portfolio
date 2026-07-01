"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { panelEntrance } from "@/lib/motion";
import type { PreviewView } from "@/lib/types";

import { WelcomeCard } from "./WelcomeCard";
import { AboutCard } from "./AboutCard";
import { SkillsCard } from "./SkillsCard";
import { ProjectsGrid } from "./ProjectsGrid";
import { ExperienceCard } from "./ExperienceCard";
import { EducationCard } from "./EducationCard";
import { ContactCard } from "./ContactCard";
import { ResumeCard } from "./ResumeCard";
import { HireMeCard } from "./HireMeCard";
import { HelpCard } from "./HelpCard";

interface PreviewPanelProps {
  view: PreviewView;
}

const VIEW_COMPONENTS: Record<PreviewView, React.ComponentType> = {
  welcome: WelcomeCard,
  about: AboutCard,
  skills: SkillsCard,
  projects: ProjectsGrid,
  experience: ExperienceCard,
  education: EducationCard,
  contact: ContactCard,
  resume: ResumeCard,
  "hire-me": HireMeCard,
  help: HelpCard,
};

export function PreviewPanel({ view }: PreviewPanelProps) {
  const ActiveView = VIEW_COMPONENTS[view];

  return (
    <motion.aside
      variants={panelEntrance}
      initial="hidden"
      animate="show"
      custom={0.12}
      className="flex h-full flex-col overflow-hidden"
      aria-label="Live preview output"
    >
      {/* Pane header */}
      <div className="flex items-center justify-between border-b border-ink/10 px-4 py-1.5 text-[11px] text-ink-muted">
        <span className="text-ink">┤ OUTPUT ├</span>
        <span className="text-ink-faint">readonly</span>
      </div>

      <div className="scrollbar-thin flex-1 overflow-y-auto px-4 pb-6 pt-4 text-ink font-mono text-[13px] leading-[1.65]">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "linear" }}
          >
            <ActiveView />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.aside>
  );
}
