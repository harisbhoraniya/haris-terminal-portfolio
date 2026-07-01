"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { QUICK_CHIPS } from "@/lib/content";
import { chipTap } from "@/lib/motion";

interface CommandChipsProps {
  onRun: (cmd: string) => void;
  disabled?: boolean;
}

export function CommandChips({ onRun, disabled }: CommandChipsProps) {
  return (
    <div
      className="flex flex-shrink-0 gap-1.5 overflow-x-auto border-t border-ink/10 px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Quick commands"
    >
      {QUICK_CHIPS.map(({ cmd, featured }) => (
        <motion.button
          key={cmd}
          type="button"
          disabled={disabled}
          onClick={() => onRun(cmd)}
          whileTap={chipTap}
          className={cn(
            "flex-shrink-0 whitespace-nowrap px-2.5 py-1 font-mono text-[11px] transition-colors duration-100 disabled:opacity-30",
            featured
              ? "text-ink underline underline-offset-2 hover:text-ink"
              : "text-ink-muted hover:text-ink"
          )}
        >
          [{cmd}]
        </motion.button>
      ))}
    </div>
  );
}
