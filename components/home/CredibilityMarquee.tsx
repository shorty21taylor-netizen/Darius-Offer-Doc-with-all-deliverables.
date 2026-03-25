"use client";

const stats = [
  "$100K+ collected in a single day — 10+ times",
  "11 students hit $100K days",
  "$1M collected in a single day — twice",
  "500+ clients funded",
  "$100K+ collected in a single day — 10+ times",
  "11 students hit $100K days",
  "$1M collected in a single day — twice",
  "500+ clients funded",
];

export default function CredibilityMarquee() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 2,
        overflow: "hidden",
        borderTop: "1px solid rgba(212,175,55,0.12)",
        borderBottom: "1px solid rgba(212,175,55,0.12)",
        background: "rgba(17,17,17,0.5)",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 40s linear infinite",
        }}
      >
        {stats.map((stat, i) => (
          <span
            key={i}
            style={{
              flexShrink: 0,
              paddingRight: 60,
              fontSize: "0.8125rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#d4af37",
              whiteSpace: "nowrap",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {stat}
            <span style={{ margin: "0 30px", opacity: 0.3 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
