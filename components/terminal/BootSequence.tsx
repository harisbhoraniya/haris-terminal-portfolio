"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { BOOT_MESSAGES } from "@/lib/content";

interface BootSequenceProps {
  onDone: () => void;
}

export function BootSequence({ onDone }: BootSequenceProps) {
  const { revealed, done } = useTypewriter(BOOT_MESSAGES, 12);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const completedLines = revealed.filter(
      (line, i) => line === BOOT_MESSAGES[i]
    ).length;
    setProgress(Math.round((completedLines / BOOT_MESSAGES.length) * 100));
  }, [revealed]);

  useEffect(() => {
    if (done) {
      const t = setTimeout(onDone, 300);
      return () => clearTimeout(t);
    }
  }, [done, onDone]);

  return (
    <div className="select-none">
      {revealed.map((line, i) => (
        <div key={i} className="min-h-[1.65em]">
          <span className="text-ink-muted">{line}</span>
          {revealed[i].length < BOOT_MESSAGES[i].length && (
            <span className="ml-0.5 inline-block h-[13px] w-[7px] animate-blink bg-ink align-middle" />
          )}
        </div>
      ))}
      {/* Simple progress indicator */}
      <div className="mt-2 text-ink-faint text-[12px]">
        [{">".repeat(Math.floor(progress / 5))}{"·".repeat(20 - Math.floor(progress / 5))}] {progress}%
      </div>
    </div>
  );
}
