"use client";

import { useEffect, useState } from "react";

export function GlitchOverlay() {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // Random glitch bursts
    const triggerGlitch = () => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150 + Math.random() * 200);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) triggerGlitch();
    }, 3000 + Math.random() * 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 h-full w-full overflow-hidden">
      {/* Scanlines */}
      <div
        className="absolute inset-0 z-50 h-full w-full opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 240, 255, 0.03) 2px, rgba(0, 240, 255, 0.03) 4px)",
        }}
      />

      {/* Moving scanline */}
      <div
        className="absolute inset-0 z-50 h-[6%] w-full animate-scanline opacity-[0.06]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(0, 240, 255, 0.6), transparent)",
        }}
      />

      {/* Random glitch bar */}
      {glitchActive && (
        <div
          className="absolute z-50 w-full"
          style={{
            top: `${Math.random() * 100}%`,
            height: `${2 + Math.random() * 6}%`,
            background: `linear-gradient(90deg, 
              transparent ${Math.random() * 30}%, 
              rgba(255, 0, 60, 0.15) ${30 + Math.random() * 20}%, 
              rgba(0, 240, 255, 0.1) ${60 + Math.random() * 20}%, 
              transparent ${80 + Math.random() * 20}%)`,
            transform: `translateX(${(Math.random() - 0.5) * 10}px)`,
          }}
        />
      )}

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 z-50 h-full w-full opacity-70"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(5, 5, 16, 0.6) 100%)",
        }}
      />
    </div>
  );
}
