"use client";

import { useCallback, useRef, useState } from "react";

/**
 * Tracks submitted terminal commands and lets the caller cycle through
 * them with Arrow Up / Arrow Down, mirroring real shell behavior.
 */
export function useCommandHistory() {
  const historyRef = useRef<string[]>([]);
  const [index, setIndex] = useState(0);

  const push = useCallback((cmd: string) => {
    const h = historyRef.current;
    if (h[h.length - 1] !== cmd) {
      h.push(cmd);
    }
    setIndex(h.length);
  }, []);

  const goBack = useCallback((): string | null => {
    const h = historyRef.current;
    if (h.length === 0) return null;
    const nextIndex = Math.max(0, index - 1);
    setIndex(nextIndex);
    return h[nextIndex] ?? null;
  }, [index]);

  const goForward = useCallback((): string | null => {
    const h = historyRef.current;
    if (h.length === 0) return null;
    const nextIndex = Math.min(h.length, index + 1);
    setIndex(nextIndex);
    return h[nextIndex] ?? "";
  }, [index]);

  return { push, goBack, goForward };
}
