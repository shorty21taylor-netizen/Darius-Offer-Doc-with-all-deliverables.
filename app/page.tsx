import Link from "next/link";

export default function Home() {
  return (
    <section className="hero" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h1>
          Influence<span className="highlight">2</span>Impact
        </h1>
        <p className="hero-subtitle">
          Scale your funding business, master digital selling, and join the elite
          Inner Circle mastermind with Darius Benders.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", maxWidth: "400px", margin: "0 auto" }}>
          <Link href="/saas" className="cta-button" style={{ background: "rgba(0, 200, 150, 0.15)", borderColor: "rgba(0, 200, 150, 0.3)", color: "#00C896" }}>
            Fund2Grow Platform
          </Link>
          <Link href="/funding-mastery" className="cta-button" style={{ background: "var(--gradient-red)", border: "none", color: "#fff" }}>
            Funding Mastery
          </Link>
          <Link href="/digital-mastery" className="cta-button" style={{ background: "var(--gradient-red)", border: "none", color: "#fff" }}>
            Digital Mastery
          </Link>
          <Link href="/inner-circle" className="cta-button" style={{ background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)", border: "none", color: "#000", fontWeight: 700 }}>
            Inner Circle
          </Link>
        </div>
      </div>
    </section>
  );
}
