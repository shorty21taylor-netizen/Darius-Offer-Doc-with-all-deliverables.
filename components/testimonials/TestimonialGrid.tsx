"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Testimonial } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialGrid({ testimonials }: { testimonials: Testimonial[] }) {
  const hasVideo = testimonials.some((t) => t.videoUrl);

  return (
    <div
      className={hasVideo ? "testimonial-grid-video" : "testimonial-grid-text"}
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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: Math.min(index * 0.1, 0.6),
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      <TestimonialCard testimonial={testimonial} />
    </motion.div>
  );
}
