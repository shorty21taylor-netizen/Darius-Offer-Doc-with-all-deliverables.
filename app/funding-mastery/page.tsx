import type { Metadata } from "next";
import InlineResultsButton from "@/components/testimonials/InlineResultsButton";
import FundingPricing from "@/components/FundingPricing";

export const metadata: Metadata = {
  title: "Funding Mastery — Credit & Business Funding Program | I2I",
  description: "Get access to up to $150,000+ in funding. Fix your credit, establish your business entity, and unlock the capital you need to scale.",
};

export default function FundingMasteryPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="badge">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ width: 16, height: 16 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Credit &amp; Business Funding Program
          </div>
          <h1>Get Access To Up To<br /><span className="highlight">$150,000+ In Funding</span></h1>
          <p className="hero-subtitle">Fix your personal credit, establish your business entity, and unlock the capital you need to scale — all with hands-on coaching and a proven system.</p>
          <div className="hero-stats">
            <div className="stat"><div className="stat-value"><span>1:1</span></div><div className="stat-label">Dedicated Coach</div></div>
            <div className="stat"><div className="stat-value">Bi-Weekly</div><div className="stat-label">Calls with Darius</div></div>
            <div className="stat"><div className="stat-value"><span>$150K</span>+</div><div className="stat-label">Funding Potential</div></div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
            <InlineResultsButton href="/funding-mastery/results" text="See Funding Results →" />
          </div>
        </div>
      </section>

      <div className="container"><div className="divider"></div></div>

      {/* What's Included */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">What&apos;s Included</p>
            <h2>Everything You Need To Get Funded</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="feature-title">Credit Structuring Guidance</h3>
              <p className="feature-desc">We don&apos;t do done-for-you credit repair and our program doesn&apos;t focus on credit — however, we&apos;ll give you pointers and guidance on how to structure your credit for business funding approval.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="feature-title">Business Entity Setup</h3>
              <p className="feature-desc">Establish your business entity with all the proper documentation lenders want to see for maximum funding approval.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="feature-title">Bi-Weekly Calls with Darius</h3>
              <p className="feature-desc">Get direct access to Darius on bi-weekly group calls. Ask questions, get guidance, and stay on track to funding.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h3 className="feature-title">Dedicated 1-on-1 Coach</h3>
              <p className="feature-desc">Your personal coach will audit your situation, walk you through the funding process, and help you secure business funding step by step.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="feature-title">Funding Application Support</h3>
              <p className="feature-desc">We guide you through every funding application, ensuring you have the best chance of approval with each lender.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="feature-title">Dispute Letter Templates</h3>
              <p className="feature-desc">Access proven dispute letter templates and learn exactly what to send to credit bureaus to remove negative items.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <FundingPricing />

      {/* Bonus */}
      <section className="bonus-section">
        <div className="container">
          <div className="bonus-card">
            <div className="bonus-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
            </div>
            <h3 className="bonus-title">Bonus: Launch Your Own Funding Business</h3>
            <p className="bonus-desc">We&apos;ll show you how to launch a low-barrier online business directly from your social media using our done-for-you business funding model. Help other business owners get funded and earn <strong style={{ color: "var(--primary-red)" }}>10% on the backend</strong> of every deal you close.</p>
          </div>
        </div>
      </section>
    </>
  );
}
