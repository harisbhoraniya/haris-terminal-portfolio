"use client";

import { useEffect, useState } from "react";

/**
 * Reveals a list of lines one character at a time, one line after another.
 * Used for the boot sequence. Resolves `done = true` once every line has
 * finished typing.
 */
export function useTypewriter(lines: string[], speedMs: number = 16) {
  const [revealed, setRevealed] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setRevealed(lines.map(() => ""));
    setDone(false);

    async function run() {
      for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
        const target = lines[lineIdx];
        
        // Fast or slow line?
        let currentSpeed = speedMs;
        if (target.includes("Memory") || target.includes("CPU")) {
          currentSpeed = 2; // super fast
        } else if (target.includes("sshd") || target.includes("decrypted")) {
          currentSpeed = 30; // slower, 'doing work'
        }

        for (let charIdx = 1; charIdx <= target.length; charIdx++) {
          if (cancelled) return;
          // Add slight random jitter
          await new Promise((r) => setTimeout(r, currentSpeed + Math.random() * 15));
          setRevealed((prev) => {
            const next = [...prev];
            next[lineIdx] = target.slice(0, charIdx);
            return next;
          });
        }
        
        // Pause after line finishes
        let linePause = 50 + Math.random() * 100;
        if (target.includes("Mounting root filesystem")) linePause = 600;
        if (target.includes("Starting SSH server")) linePause = 400;
        if (target.includes("decrypted")) linePause = 800; // suspense
        
        await new Promise((r) => setTimeout(r, linePause));
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { revealed, done };
}
