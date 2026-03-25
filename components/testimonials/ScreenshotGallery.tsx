"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { ResultScreenshot } from "@/data/testimonials";
import ScreenshotLightbox from "./ScreenshotLightbox";

export default function ScreenshotGallery({ screenshots }: { screenshots: ResultScreenshot[] }) {
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  return (
    <>
      <section style={{ padding: "80px 0 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--primary-red)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: 16,
              }}
            >
              From Our Community
            </p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}
            >
              Real Results in Real Time
            </h2>
            <p style={{ color: "#a3a3a3", fontSize: "1rem" }}>
              Screenshots straight from our private Telegram group.
            </p>
          </div>

          <div className="screenshot-grid">
            {screenshots.map((ss, i) => (
              <ScreenshotCard
                key={ss.id}
                screenshot={ss}
                index={i}
                onOpen={() => setLightboxUrl(ss.imageUrl)}
              />
            ))}
          </div>
        </div>
      </section>

      {lightboxUrl && (
        <ScreenshotLightbox
          imageUrl={lightboxUrl}
          onClose={() => setLightboxUrl(null)}
        />
      )}
    </>
  );
}

function ScreenshotCard({
  screenshot,
  index,
  onOpen,
}: {
  screenshot: ResultScreenshot;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: Math.min(index * 0.08, 0.6), duration: 0.4, ease: "easeOut" }}
    >
      <div
        className="screenshot-card"
        onClick={onOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter") onOpen(); }}
      >
        <div className="screenshot-img-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screenshot.imageUrl}
            alt={screenshot.caption || "Client result screenshot"}
            loading="lazy"
            style={{
              width: "100%",
              display: "block",
              objectFit: "contain",
            }}
            onError={(e) => {
              (e.currentTarget.closest(".screenshot-card") as HTMLElement | null)?.style.setProperty("display", "none");
            }}
          />
        </div>
        {screenshot.caption && (
          <p
            style={{
              padding: "12px 16px",
              fontSize: "0.8125rem",
              fontWeight: 600,
              fontFamily: "'Space Grotesk', sans-serif",
              background: "linear-gradient(135deg, #d4af37, #f5d063)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {screenshot.caption}
          </p>
        )}
      </div>
    </motion.div>
  );
}
