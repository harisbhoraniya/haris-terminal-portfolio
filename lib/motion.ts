import type { Variants } from "framer-motion";

/**
 * Centralized, restrained motion variants.
 * Everything here is intentionally subtle — luxury reads as "controlled",
 * not "busy". No bounce, no overshoot, no spring-jiggle.
 */

export const EASE_LUXURY: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const panelEntrance: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.99 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_LUXURY, delay },
  }),
};

export const lineEntrance: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: EASE_LUXURY } },
};

export const previewSwap: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: EASE_LUXURY },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.22, ease: EASE_LUXURY },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, filter: "brightness(2) blur(2px)" },
  show: { 
    opacity: 1, 
    filter: "brightness(1) blur(0px)",
    transition: { duration: 0.1, ease: "linear" } 
  },
};

export const chipTap = { scale: 0.96 };
export const chipHover = { y: -1 };
