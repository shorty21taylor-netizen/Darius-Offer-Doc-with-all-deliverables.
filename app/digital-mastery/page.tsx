import type { Metadata } from "next";
import TestimonialButton from "@/components/testimonials/TestimonialButton";

export const metadata: Metadata = {
  title: "Digital Mastery — Scale With Webinar Selling | I2I",
  description: "Scale to multiple 5-figures/week with webinar selling. Eliminate sales calls, sell one-to-many, and book your team with qualified leads.",
};

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ width: 20, height: 20, flexShrink: 0, marginTop: 2 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ width: 20, height: 20, flexShrink: 0, marginTop: 2, color: "var(--gray-600)" }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function DigitalMasteryPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div className="badge">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ width: 16, height: 16 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Digital Mastermind
          </div>
          <h1>Scale to <span className="highlight">Multiple 5-Figures/Week</span><br />With Webinar Selling</h1>
          <p className="hero-subtitle">Eliminate countless sales calls, sell one-to-many on virtual webinars, and book your team with qualified, HOT leads ready to buy. The fastest path to scaling coaching, consulting, and service-based offers.</p>
          <div className="hero-stats">
            <div className="stat"><div className="stat-value"><span>1:Many</span></div><div className="stat-label">Webinar Sales</div></div>
            <div className="stat"><div className="stat-value">DFY</div><div className="stat-label">Funnel Build</div></div>
            <div className="stat"><div className="stat-value"><span>5-Fig</span>+</div><div className="stat-label">Weekly Potential</div></div>
          </div>
        </div>
      </section>

      <div className="container"><div className="divider"></div></div>

      {/* What You'll Master */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">What You&apos;ll Master</p>
            <h2>The Complete Digital Scaling System</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg></div>
              <h3 className="feature-title">Launch High-Ticket Offers</h3>
              <p className="feature-desc">Learn how to create and sell coaching, consulting, and mentorship products that command premium prices and attract serious buyers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg></div>
              <h3 className="feature-title">Webinar Selling Mastery</h3>
              <p className="feature-desc">Sell one-to-many and eliminate draining 1:1 sales calls. Fill your calendar with qualified, HOT leads who are ready to buy before they even get on a call.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
              <h3 className="feature-title">Leverage OPA (Other People&apos;s Audiences)</h3>
              <p className="feature-desc">Tap into established audiences to rapidly grow your reach without starting from zero. Strategic partnerships that accelerate your growth.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg></div>
              <h3 className="feature-title">Organic Traffic (IG &amp; YouTube)</h3>
              <p className="feature-desc">Master content that converts on Instagram and YouTube. Get qualified prospects sliding into your DMs ready to learn more about your offers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg></div>
              <h3 className="feature-title">Paid Traffic &amp; Ads</h3>
              <p className="feature-desc">Learn how to run profitable ad campaigns that drive targeted traffic to your webinar funnels and scale your reach on demand.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div>
              <h3 className="feature-title">DFY Webinar Funnel Build</h3>
              <p className="feature-desc">We build out your complete webinar funnel for you — landing pages, email sequences, and all the tech setup handled so you can focus on selling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Investment Options</p>
            <h2>Choose Your Level</h2>
          </div>
          <div className="pricing-grid mastermind-pricing">
            <div className="pricing-card">
              <p className="pricing-duration">Done-For-You Only</p>
              <h3 className="pricing-name">Funnel Build</h3>
              <p className="pricing-tagline">Just the funnel, no coaching</p>
              <div className="pricing-amount"><span className="pricing-currency">$</span><span className="pricing-value">5K</span></div>
              <ul className="pricing-features">
                <li><Check />Complete webinar funnel build</li>
                <li><Check />Landing page setup</li>
                <li><Check />Email sequence integration</li>
                <li><Check />Full tech setup &amp; handoff</li>
                <li style={{ color: "var(--gray-500)" }}><XIcon />No coaching included</li>
                <li style={{ color: "var(--gray-500)" }}><XIcon />No community access</li>
              </ul>
              <a href="https://www.fanbasis.com/agency-checkout/Dariusbenders/W72v" target="_blank" className="cta-button" style={{ textDecoration: "none" }}>Get Your Funnel</a>
            </div>
            <div className="pricing-card featured">
              <p className="pricing-duration">Pay In Full</p>
              <h3 className="pricing-name">Digital Mastermind</h3>
              <p className="pricing-tagline">Full coaching + DFY funnel</p>
              <div className="pricing-amount"><span className="pricing-currency">$</span><span className="pricing-value">15K</span></div>
              <ul className="pricing-features">
                <li><Check />1-on-1 coaching calls</li>
                <li><Check />Group coaching calls</li>
                <li><Check />Private community access</li>
                <li><Check />DFY webinar funnel build</li>
                <li><Check />Content scripts &amp; templates</li>
                <li><Check />Full funnel tech setup</li>
              </ul>
              <a href="https://www.fanbasis.com/agency-checkout/Dariusbenders/Qx89" target="_blank" className="cta-button" style={{ textDecoration: "none" }}>Join The Mastermind</a>
            </div>
            <div className="pricing-card">
              <p className="pricing-duration">Two-Pay Option</p>
              <h3 className="pricing-name">Digital Mastermind</h3>
              <p className="pricing-tagline">Split into 2 payments</p>
              <div className="pricing-amount"><span className="pricing-currency">$</span><span className="pricing-value">18K</span></div>
              <ul className="pricing-features">
                <li><Check />1-on-1 coaching calls</li>
                <li><Check />Group coaching calls</li>
                <li><Check />Private community access</li>
                <li><Check />DFY webinar funnel build</li>
                <li><Check />Content scripts &amp; templates</li>
                <li><Check />Full funnel tech setup</li>
              </ul>
              <a href="https://www.fanbasis.com/agency-checkout/Dariusbenders/xn9P" target="_blank" className="cta-button" style={{ textDecoration: "none" }}>Join The Mastermind</a>
            </div>
          </div>
          <p style={{ textAlign: "center", color: "var(--gray-400)", marginTop: 32, fontSize: "0.9375rem" }}>Perfect for coaches, consultants, service providers, and anyone running a funding or credit repair business.</p>
        </div>
      </section>
      <TestimonialButton pageKey="digital" />
    </>
  );
}
