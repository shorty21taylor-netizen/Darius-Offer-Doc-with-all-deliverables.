"use client";

import { useState, useEffect } from "react";
import TestimonialModal from "./TestimonialModal";

interface TestimonialButtonProps {
  pageKey: string;
}

export default function TestimonialButton({ pageKey }: TestimonialButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="testimonial-fab"
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 24px",
          background: "linear-gradient(135deg, #d4af37, #f5d063)",
          color: "#0a0a0a",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "0.9375rem",
          fontWeight: 700,
          border: "none",
          borderRadius: 100,
          cursor: "pointer",
          boxShadow: "0 4px 24px rgba(212, 175, 55, 0.3)",
          transform: visible ? "translateX(0)" : "translateX(120px)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease",
          willChange: "transform",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        See Results
      </button>

      <TestimonialModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pageKey={pageKey}
      />
    </>
  );
}
