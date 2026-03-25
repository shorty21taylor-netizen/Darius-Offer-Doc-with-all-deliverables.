"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -1000, y: -1000 });
  const current = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.08;
      current.current.y += (pos.current.y - current.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${current.current.x - 300}px, ${current.current.y - 300}px)`;
      }
      animRef.current = requestAnimationFrame(lerp);
    };

    window.addEventListener("mousemove", onMove);
    animRef.current = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 1,
        willChange: "transform",
        top: 0,
        left: 0,
      }}
    />
  );
}
