"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { testimonialsByPage } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  pageKey: string;
}

export default function TestimonialModal({ isOpen, onClose, pageKey }: TestimonialModalProps) {
  const data = testimonialsByPage[pageKey];

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleEscape]);

  if (!isOpen || !data) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        animation: "testimonialFadeIn 200ms ease-out",
        padding: 20,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 900,
          maxHeight: "85vh",
          background: "#111111",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: 40,
          overflowY: "auto",
          animation: "testimonialSlideUp 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close testimonials"
          className="testimonial-close-btn"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            marginBottom: 32,
            paddingRight: 48,
          }}
        >
          {data.modalTitle}
        </h2>

        {/* Testimonial cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {data.testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
