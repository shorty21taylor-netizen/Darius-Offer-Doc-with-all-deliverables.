import Link from "next/link";
import { testimonialsByPage } from "@/data/testimonials";
import TestimonialGrid from "./TestimonialGrid";
import ScreenshotGallery from "./ScreenshotGallery";
import ResultsCTA from "./ResultsCTA";

export default function ResultsPageLayout({ pageKey }: { pageKey: string }) {
  const data = testimonialsByPage[pageKey];
  if (!data) return null;

  const isExternal = data.ctaLink.startsWith("http");

  return (
    <>
      {/* Hero Banner */}
      <section style={{ padding: "60px 24px 80px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* Back link */}
          <div style={{ marginBottom: 40 }}>
            <Link
              href={data.backLink}
              style={{
                color: "#737373",
                fontSize: "0.9375rem",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              &larr; {data.backText}
            </Link>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
          >
            {data.modalTitle}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "1.125rem",
              color: "#a3a3a3",
              maxWidth: 560,
              margin: "0 auto 48px",
              lineHeight: 1.7,
            }}
          >
            {data.subtitle}
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            {data.statsRow.map((stat, i) => (
              <div
                key={i}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#d4af37",
                  letterSpacing: "0.02em",
                }}
              >
                {stat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="divider" />
      </div>

      {/* Testimonial Grid */}
      <section style={{ padding: "60px 0 40px" }}>
        <TestimonialGrid testimonials={data.testimonials} />
      </section>

      {/* Screenshots Gallery (if present) */}
      {data.screenshots && data.screenshots.length > 0 && (
        <>
          <div className="container">
            <div className="divider" />
          </div>
          <ScreenshotGallery screenshots={data.screenshots} />
        </>
      )}

      {/* Divider */}
      <div className="container">
        <div className="divider" />
      </div>

      {/* Bottom CTA */}
      <ResultsCTA
        ctaLink={data.ctaLink}
        ctaText={data.ctaText}
        backLink={data.backLink}
        backText={data.backText}
        isExternal={isExternal}
      />
    </>
  );
}
