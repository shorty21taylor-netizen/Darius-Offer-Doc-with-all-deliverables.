"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSubtitle(true), 1800);

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const title = "Influence2Impact";
  const chevronOpacity = Math.max(0, 1 - scrollY / 300);

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 24px 60px",
        zIndex: 2,
        overflow: "hidden",
      }}
    >
      {/* ── Background image: LEFT (award/credibility) ── */}
      <div className="hero-bg-image-left">
        <Image
          src="/images/darius-award.jpg"
          alt=""
          fill
          priority
          sizes="55vw"
          style={{
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
      </div>

      {/* ── Background image: RIGHT (portrait/authority) ── */}
      <div className="hero-bg-image-right">
        <Image
          src="/images/darius-portrait.jpg"
          alt=""
          fill
          priority
          sizes="55vw"
          style={{
            objectFit: "cover",
            objectPosition: "center 20%",
          }}
        />
      </div>

      {/* ── Center darkening overlay ── */}
      <div className="hero-center-darken" />

      {/* Animated mesh gradient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(227,24,55,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(227,24,55,0.05) 0%, transparent 50%)",
          animation: "meshShift 12s ease-in-out infinite alternate",
          pointerEvents: "none",
        }}
      />

      {/* Noise overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          opacity: 0.04,
          pointerEvents: "none",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Staggered letter reveal headline */}
      <h1
        style={{
          fontSize: "clamp(3rem, 8vw, 7rem)",
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          marginBottom: 24,
          position: "relative",
          zIndex: 10,
        }}
      >
        {title.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 + i * 0.05,
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              display: "inline-block",
              ...(char === "2"
                ? {
                    background: "linear-gradient(135deg, #d4af37, #f5d063)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "none",
                    filter: "drop-shadow(0 0 20px rgba(212,175,55,0.4))",
                    animation: "goldPulse 2s ease-in-out infinite",
                  }
                : {}),
            }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      {/* Subtitle */}
      <AnimatePresence>
        {showSubtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "#a0a0a0",
              maxWidth: 600,
              lineHeight: 1.7,
              position: "relative",
              zIndex: 10,
              marginBottom: 0,
            }}
          >
            Scale your funding business, master digital selling, and join the
            elite Inner Circle with Darius Benders.
          </motion.p>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          opacity: chevronOpacity,
          cursor: "pointer",
        }}
        onClick={() => {
          document
            .getElementById("portals")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <motion.svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#d4af37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M7 13l5 5 5-5" />
          <path d="M7 6l5 5 5-5" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
