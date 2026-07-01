"use client";

import { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let lastDrawTime = 0;
    const fps = 18;
    const interval = 1000 / fps;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const chars = "01";
    const charArray = chars.split("");

    const fontSize = 14;
    let columns = Math.ceil(canvas.width / fontSize);

    let drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -150;
    }

    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw);
      if (currentTime - lastDrawTime < interval) return;
      lastDrawTime = currentTime;

      ctx.fillStyle = "rgba(22, 22, 22, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        if (drops[i] >= 0) {
          const text = charArray[Math.floor(Math.random() * charArray.length)];

          // Vary green brightness
          const brightness = 80 + Math.floor(Math.random() * 175);
          ctx.fillStyle = `rgb(0, ${brightness}, 0)`;
          ctx.globalAlpha = 0.6;
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          ctx.globalAlpha = 1;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-25"
      aria-hidden="true"
    />
  );
}
