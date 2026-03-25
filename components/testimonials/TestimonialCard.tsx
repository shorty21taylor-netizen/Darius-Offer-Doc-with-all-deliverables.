import type { Testimonial } from "@/data/testimonials";

const StarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="#d4af37"
    stroke="none"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const color = testimonial.avatarColor || "#d4af37";

  return (
    <div className="testimonial-card">
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
        {/* Avatar */}
        {testimonial.photoUrl ? (
          <img
            src={testimonial.photoUrl}
            alt={testimonial.name}
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "0.875rem",
              color: "#0a0a0a",
              flexShrink: 0,
            }}
          >
            {testimonial.initials}
          </div>
        )}

        <div>
          <p style={{ fontWeight: 600, fontSize: "1rem", color: "#fff", lineHeight: 1.3 }}>
            {testimonial.name}
          </p>
          <p style={{ fontSize: "0.8125rem", color: "#737373", lineHeight: 1.4 }}>
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Stars */}
      <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Quote */}
      <p style={{ fontSize: "0.9375rem", color: "#e5e5e5", lineHeight: 1.7, marginBottom: 14 }}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Result highlight */}
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
          }}
        >
          {testimonial.resultHighlight}
        </p>
      )}
    </div>
  );
}
