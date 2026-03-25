"use client";

import { useRef, useState, useEffect } from "react";
import type { Testimonial } from "@/data/testimonials";

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const PlayIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="10,8 16,12 10,16" fill="rgba(255,255,255,0.6)" stroke="none" />
  </svg>
);

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const color = testimonial.avatarColor || "#d4af37";
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!testimonial.videoUrl) return;
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [testimonial.videoUrl]);

  const handlePlay = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    document.querySelectorAll("video").forEach((v) => {
      if (v !== e.currentTarget) v.pause();
    });
  };

  return (
    <div className="testimonial-card" ref={cardRef}>
      {/* Video player */}
      {testimonial.videoUrl && (
        <div className="video-container">
          {isVisible ? (
            <video
              src={testimonial.videoUrl}
              controls
              preload="metadata"
              playsInline
              onPlay={handlePlay}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <div className="video-placeholder">
              <PlayIcon />
            </div>
          )}
        </div>
      )}

      {/* Info section */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: testimonial.quote || testimonial.videoUrl ? 12 : 0 }}>
        {testimonial.photoUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={testimonial.photoUrl}
            alt={testimonial.name}
            style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "0.8125rem",
              color: "#0a0a0a",
              flexShrink: 0,
            }}
          >
            {testimonial.initials}
          </div>
        )}
        <div>
          <p style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#fff", lineHeight: 1.3 }}>
            {testimonial.name}
          </p>
          <p style={{ fontSize: "0.75rem", color: "#737373", lineHeight: 1.4 }}>
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Stars */}
      <div style={{ display: "flex", gap: 2, marginBottom: testimonial.quote ? 10 : 0 }}>
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Quote (only if non-empty) */}
      {testimonial.quote && (
        <p style={{ fontSize: "0.9375rem", color: "#e5e5e5", lineHeight: 1.7, marginBottom: 12 }}>
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      )}

      {/* Result highlight (only if non-empty) */}
      {testimonial.resultHighlight && (
        <p
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
            background: "linear-gradient(135deg, #d4af37, #f5d063)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginTop: 4,
          }}
        >
          {testimonial.resultHighlight}
        </p>
      )}
    </div>
  );
}
