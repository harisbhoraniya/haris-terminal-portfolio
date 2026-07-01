"use client";

import { motion } from "framer-motion";
import { PROFILE, ABOUT_STATS } from "@/lib/content";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function WelcomeCard() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show">
      <motion.p
        variants={staggerItem}
        className="mb-2 font-mono text-[11px] uppercase tracking-[0.12em] text-phosphor-dim"
      >
        {"// welcome"}
      </motion.p>
      <motion.h1
        variants={staggerItem}
        className="mb-1.5 text-[26px] font-bold leading-tight tracking-tight text-ink max-[480px]:text-2xl"
      >
        Hi, I&apos;m {PROFILE.name.split(" ")[0]}.
      </motion.h1>
      <motion.p variants={staggerItem} className="mb-5 text-sm leading-relaxed text-ink-muted">
        {PROFILE.role} building production web &amp; desktop experiences with{" "}
        <strong className="font-semibold text-amber">React</strong>,{" "}
        <strong className="font-semibold text-amber">Next.js</strong> and{" "}
        <strong className="font-semibold text-amber">Electron.js</strong>.
      </motion.p>
      <motion.p variants={staggerItem} className="mb-5 text-sm leading-relaxed text-ink-muted">
        This panel renders whatever you run in the terminal — type a command on the
        left, or tap one of the chips below it.
      </motion.p>

      <motion.div variants={staggerItem} className="grid grid-cols-3 gap-2.5">
        {ABOUT_STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-[10px] border border-glass-border/60 bg-white/[0.025] px-3 py-3.5 text-center"
          >
            <span className="block font-mono text-xl font-bold text-phosphor">
              {s.value}
            </span>
            <span className="mt-1 block text-[11px] text-ink-faint">{s.label}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={staggerItem}
        className="mt-6 rounded-[10px] border border-dashed border-glass-border px-3.5 py-3 font-mono text-[12.5px] text-ink-faint"
      >
        Try typing <b className="text-amber">projects</b> or{" "}
        <b className="text-amber">hire-me</b> to get started →
      </motion.div>
    </motion.div>
  );
}
