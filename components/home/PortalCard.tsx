"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

interface PortalCardProps {
  href: string;
  accent: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
  index: number;
  isGold?: boolean;
}

export default function PortalCard({
  href,
  accent,
  title,
  subtitle,
  badge,
  icon,
  index,
  isGold,
}: PortalCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovering(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ perspective: 800 }}
    >
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          display: "block",
          position: "relative",
          padding: "36px 32px",
          borderRadius: 24,
          background: "rgba(17,17,17,0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${hovering ? accent : "rgba(255,255,255,0.08)"}`,
          boxShadow: hovering
            ? `0 20px 60px -15px ${accent}33, 0 0 40px -10px ${accent}22`
            : "none",
          textDecoration: "none",
          color: "inherit",
          transition: "border-color 0.3s, box-shadow 0.3s",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${hovering ? -8 : 0}px)`,
          transformStyle: "preserve-3d",
          willChange: "transform",
          overflow: "hidden",
        }}
      >
        {/* Rotating gold border for Inner Circle */}
        {isGold && hovering && (
          <div
            style={{
              position: "absolute",
              inset: -1,
              borderRadius: 24,
              background: `conic-gradient(from 0deg, ${accent}, transparent, ${accent}, transparent, ${accent})`,
              animation: "rotateBorder 3s linear infinite",
              zIndex: 0,
              opacity: 0.6,
            }}
          />
        )}
        {isGold && hovering && (
          <div
            style={{
              position: "absolute",
              inset: 1,
              borderRadius: 23,
              background: "rgba(17,17,17,0.95)",
              zIndex: 0,
            }}
          />
        )}

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: 100,
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              background: `${accent}18`,
              color: accent,
              border: `1px solid ${accent}33`,
              marginBottom: 20,
            }}
          >
            {badge}
          </span>

          {/* Icon */}
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: `${accent}12`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
              transition: "transform 0.3s",
              transform: hovering ? "scale(1.1)" : "scale(1)",
            }}
          >
            {icon}
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: 8,
              color: "#fff",
              transition: "transform 0.3s",
              transform: hovering ? "translateX(4px)" : "translateX(0)",
            }}
          >
            {title}
          </h3>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#a3a3a3",
              lineHeight: 1.6,
              transition: "transform 0.3s",
              transform: hovering ? "translateX(4px)" : "translateX(0)",
            }}
          >
            {subtitle}
          </p>

          {/* Arrow */}
          <div
            style={{
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: accent,
              fontSize: "0.875rem",
              fontWeight: 600,
              transition: "transform 0.3s, opacity 0.3s",
              opacity: hovering ? 1 : 0.6,
              transform: hovering ? "translateX(8px)" : "translateX(0)",
            }}
          >
            Explore
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
