"use client";

import { useState } from "react";

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ width: 20, height: 20, flexShrink: 0, marginTop: 2 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function FundingPricing() {
  const [showDownsell, setShowDownsell] = useState(false);

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Choose Your Path</p>
          <h2>Investment Options</h2>
        </div>

        {/* Mastery Card — always visible, centered */}
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <div className="pricing-card featured">
            <p className="pricing-duration">6-Month Program</p>
            <h3 className="pricing-name">Mastery</h3>
            <p className="pricing-tagline">Complete transformation &amp; ongoing support</p>
            <div className="pricing-amount">
              <span className="pricing-currency">$</span>
              <span className="pricing-value">6,500</span>
              <span className="pricing-range">– $8,500</span>
            </div>
            <ul className="pricing-features">
              <li><Check />Everything in Accelerator</li>
              <li><Check />Extended 6-month support window</li>
              <li><Check />More time to build credit foundation</li>
              <li><Check />Multiple funding round support</li>
              <li><Check />Deeper business audit &amp; strategy</li>
              <li><Check />Bonus: Funding business training</li>
            </ul>
            <a
              href="https://www.fanbasis.com/agency-checkout/Dariusbenders/p87y"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
              style={{ textDecoration: "none" }}
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Downsell toggle */}
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <button
            onClick={() => setShowDownsell(!showDownsell)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255, 255, 255, 0.25)",
              fontSize: "0.875rem",
              fontWeight: 400,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              cursor: "pointer",
              padding: "8px 16px",
              transition: "color 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.25)";
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            Looking for a shorter commitment?{" "}
            <span
              style={{
                display: "inline-block",
                transition: "transform 0.3s ease",
                transform: showDownsell ? "rotate(90deg)" : "rotate(0deg)",
              }}
            >
              →
            </span>
          </button>
        </div>

        {/* Accelerator Card — hidden downsell */}
        <div
          style={{
            maxHeight: showDownsell ? 700 : 0,
            opacity: showDownsell ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 300ms ease-out, opacity 300ms ease-out",
            marginTop: showDownsell ? 24 : 0,
          }}
        >
          <div style={{ maxWidth: 440, margin: "0 auto" }}>
            <div className="pricing-card">
              <p className="pricing-duration">3-Month Program</p>
              <h3 className="pricing-name">Accelerator</h3>
              <p className="pricing-tagline">Fast-track your funding journey</p>
              <div className="pricing-amount">
                <span className="pricing-currency">$</span>
                <span className="pricing-value">3,500</span>
              </div>
              <ul className="pricing-features">
                <li><Check />Credit structuring guidance</li>
                <li><Check />Business entity establishment</li>
                <li><Check />Bi-weekly calls with Darius</li>
                <li><Check />Your own 1-on-1 coach</li>
                <li><Check />Funding application support</li>
                <li><Check />Bonus: Funding business training</li>
              </ul>
              <a
                href="https://www.fanbasis.com/agency-checkout/Dariusbenders/PZRW"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
                style={{
                  textDecoration: "none",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
