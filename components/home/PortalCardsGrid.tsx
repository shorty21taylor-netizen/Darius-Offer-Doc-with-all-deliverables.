import PortalCard from "./PortalCard";

/* ── Card Icons (inline SVG) ── */
const DashboardIcon = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const ChartIcon = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20V10" />
    <path d="M18 20V4" />
    <path d="M6 20v-4" />
  </svg>
);

const RocketIcon = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const CrownIcon = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
    <path d="M3 20h18" />
  </svg>
);

const cards = [
  {
    href: "/saas",
    accent: "#3b82f6",
    title: "Fund2Grow Platform",
    subtitle: "AI-powered CRM & automation for funding pros",
    badge: "SaaS",
    icon: <DashboardIcon color="#3b82f6" />,
  },
  {
    href: "/funding-mastery",
    accent: "#22c55e",
    title: "Funding Mastery",
    subtitle: "Get access to $150K+ in business funding",
    badge: "$3.5K–$8.5K",
    icon: <ChartIcon color="#22c55e" />,
  },
  {
    href: "/digital-mastery",
    accent: "#f97316",
    title: "Digital Mastery",
    subtitle: "Scale to 5-figures/week with webinar selling",
    badge: "$5K–$18K",
    icon: <RocketIcon color="#f97316" />,
  },
  {
    href: "/inner-circle",
    accent: "#d4af37",
    title: "The Inner Circle",
    subtitle: "Partner with Darius — $100K/day framework",
    badge: "Flagship",
    icon: <CrownIcon color="#d4af37" />,
    isGold: true,
  },
];

export default function PortalCardsGrid() {
  return (
    <section
      id="portals"
      style={{
        position: "relative",
        zIndex: 2,
        padding: "80px 24px 100px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <p
          style={{
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "#d4af37",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: 16,
          }}
        >
          Choose Your Path
        </p>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Four Ways to Scale
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {cards.map((card, i) => (
          <PortalCard key={card.href} {...card} index={i} />
        ))}
      </div>
    </section>
  );
}
