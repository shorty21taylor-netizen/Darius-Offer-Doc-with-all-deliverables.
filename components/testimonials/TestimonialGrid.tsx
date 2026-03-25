"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Testimonial } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialGrid({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: 20,
        maxWidth: 1000,
        margin: "0 auto",
        padding: "0 24px",
      }}
    >
      {testimonials.map((t, i) => (
        <AnimatedCard key={t.id} testimonial={t} index={i} />
      ))}
    </div>
  );
}

function AnimatedCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <TestimonialCard testimonial={testimonial} />
    </motion.div>
  );
}
