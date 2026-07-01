import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        void: "#161616",
        panel: "#161616",
        elevated: "#1a1a1a",
        glass: "rgba(51, 255, 51, 0.03)",
        "glass-border": "rgba(51, 255, 51, 0.15)",
        ink: {
          DEFAULT: "#33ff33",
          muted: "#1a991a",
          faint: "#0d5c0d",
        },
        phosphor: {
          DEFAULT: "#33ff33",
          dim: "#1a991a",
          glow: "rgba(51, 255, 51, 0.4)",
        },
        amber: {
          DEFAULT: "#33ff33",
          dim: "#1a991a",
        },
        traffic: {
          red: "#ff3333",
          yellow: "#ffff33",
          green: "#33ff33",
        },
        danger: "#ff3333",
        neon: {
          red: "#ff3333",
          pink: "#ff3333",
          glow: "rgba(255, 51, 51, 0.4)",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
        sans: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      boxShadow: {
        glass: "none",
        "glow-phosphor": "none",
        "glow-cyan": "none",
        "glow-red": "none",
        "glow-amber": "none",
      },
      backgroundImage: {
        "grid-faint": "none",
        "noise-radial": "none",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "fade-up": "fade-up 0.35s ease-out both",
        scanline: "scanline 2.4s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "0",
        md: "0",
        sm: "0",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
