import Link from "next/link";

interface ResultsCTAProps {
  ctaLink: string;
  ctaText: string;
  backLink: string;
  backText: string;
  isExternal?: boolean;
}

export default function ResultsCTA({ ctaLink, ctaText, backLink, backText, isExternal }: ResultsCTAProps) {
  return (
    <section style={{ padding: "80px 24px 100px", textAlign: "center" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          Ready to Get Started?
        </h2>
        <p style={{ color: "#a3a3a3", fontSize: "1.0625rem", lineHeight: 1.7, marginBottom: 40 }}>
          Join the hundreds of clients who are already seeing results.
        </p>

        {isExternal ? (
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-results-btn"
            style={{ display: "inline-flex" }}
          >
            {ctaText}
          </a>
        ) : (
          <Link href={ctaLink} className="inline-results-btn" style={{ display: "inline-flex" }}>
            {ctaText}
          </Link>
        )}

        <div style={{ marginTop: 24 }}>
          <Link
            href={backLink}
            style={{
              color: "#737373",
              fontSize: "0.9375rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            ← {backText}
          </Link>
        </div>
      </div>
    </section>
  );
}
