import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fund2Grow.ai — CRM & Automation for Funding Professionals | I2I",
  description: "The all-in-one CRM and automation platform built for funding professionals.",
};

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00C896" strokeWidth={2.5} style={{ width: 20, height: 20, flexShrink: 0, marginTop: 2 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const X = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ width: 20, height: 20, flexShrink: 0, marginTop: 2, color: "var(--gray-600)" }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function SaasPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="badge" style={{ background: "rgba(0, 200, 150, 0.1)", borderColor: "rgba(0, 200, 150, 0.3)", color: "#00C896" }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ width: 16, height: 16 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            SaaS Platform
          </div>
          <h1>Scale Your Funding Business<br /><span className="highlight">With Precision</span></h1>
          <p className="hero-subtitle">The all-in-one CRM and automation platform built for funding professionals. Manage clients, automate applications, and grow your business on autopilot.</p>
          <div className="hero-stats">
            <div className="stat"><div className="stat-value"><span>Auto</span></div><div className="stat-label">Apply System</div></div>
            <div className="stat"><div className="stat-value">CRM</div><div className="stat-label">Client Dashboard</div></div>
            <div className="stat"><div className="stat-value"><span>24/7</span></div><div className="stat-label">Automation</div></div>
          </div>
        </div>
      </section>

      <div className="container"><div className="divider"></div></div>

      <section className="pricing-section" style={{ padding: "60px 0 100px" }}>
        <div className="container">
          <div className="section-header">
            <p className="section-label">Choose Your Plan</p>
            <h2>Fund2Grow.ai</h2>
          </div>
          <div className="pricing-grid" style={{ maxWidth: 850 }}>
            <div className="pricing-card">
              <p className="pricing-duration" style={{ color: "#00C896" }}>Starter</p>
              <h3 className="pricing-name">Solo Funder</h3>
              <p className="pricing-tagline">Ideal for new or solo funders managing their first clients</p>
              <div className="pricing-amount"><span className="pricing-currency">$</span><span className="pricing-value">97</span><span className="pricing-range">/month</span></div>
              <ul className="pricing-features">
                <li><Check />Client CRM Dashboard (Up to 6 Clients)</li>
                <li><Check />Up to 15 Auto Applies</li>
                <li><Check />Funding Readiness Score</li>
                <li style={{ color: "var(--gray-500)" }}><X />Document Vault</li>
                <li style={{ color: "var(--gray-500)" }}><X />Support</li>
                <li style={{ color: "var(--gray-500)" }}><X />Branded Client Portal</li>
                <li style={{ color: "var(--gray-500)" }}><X />Team Access</li>
              </ul>
              <a href="http://www.fund2grow.ai/" target="_blank" className="cta-button" style={{ textDecoration: "none" }}>Get Started</a>
            </div>
            <div className="pricing-card featured" style={{ borderColor: "#00C896", boxShadow: "0 0 80px -20px rgba(0, 200, 150, 0.3)" }}>
              <p className="pricing-duration" style={{ color: "#00C896" }}>Scale</p>
              <h3 className="pricing-name">Growth Mode</h3>
              <p className="pricing-tagline">Built for active funding businesses managing multiple clients</p>
              <div className="pricing-amount"><span className="pricing-currency">$</span><span className="pricing-value">197</span><span className="pricing-range">/month</span></div>
              <ul className="pricing-features">
                <li><Check />Client CRM Dashboard (10+ Clients)</li>
                <li><Check />Up to 30+ Auto Applies</li>
                <li><Check />Funding Readiness Score</li>
                <li><Check />Document Vault</li>
                <li><Check />Priority Support</li>
                <li><Check />Branded Client Portal</li>
                <li><Check />Team Access</li>
              </ul>
              <a href="http://www.fund2grow.ai/" target="_blank" className="cta-button" style={{ background: "linear-gradient(135deg, #00C896 0%, #00A67E 100%)", textDecoration: "none" }}>Get Started</a>
            </div>
          </div>
          <p style={{ textAlign: "center", color: "var(--gray-400)", marginTop: 32, fontSize: "0.9375rem" }}>Automate your funding business and scale without the headaches.</p>
        </div>
      </section>
    </>
  );
}
