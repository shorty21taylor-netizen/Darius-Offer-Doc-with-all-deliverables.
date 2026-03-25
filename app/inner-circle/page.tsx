import type { Metadata } from "next";
import TestimonialButton from "@/components/testimonials/TestimonialButton";

export const metadata: Metadata = {
  title: "The Inner Circle — Elite Mastermind with Darius Benders | I2I",
  description: "Partner with Darius and learn how to run 5-day virtual events that scale to $100K+ cash collected in a single day.",
};

const CheckGold = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth={2.5} style={{ width: 20, height: 20, flexShrink: 0, marginTop: 2 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

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

export default function InnerCirclePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div className="badge" style={{ background: "rgba(255, 215, 0, 0.1)", borderColor: "rgba(255, 215, 0, 0.3)", color: "#FFD700" }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ width: 16, height: 16 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Flagship Program
          </div>
          <h1>The <span className="highlight">Inner Circle</span></h1>
          <p className="hero-subtitle">
            Partner with Darius and learn how to run 5-day virtual events that scale to <strong style={{ color: "var(--primary-red)" }}>$100K+ cash collected in a single day</strong>. This is the ultimate high-level mastermind for serious entrepreneurs ready to dominate.
          </p>
          <div className="hero-stats">
            <div className="stat"><div className="stat-value"><span>$100K</span>+</div><div className="stat-label">Single Day Potential</div></div>
            <div className="stat"><div className="stat-value">1 Year</div><div className="stat-label">Elite Access</div></div>
            <div className="stat"><div className="stat-value"><span>4</span> Live</div><div className="stat-label">In-Person Masterminds</div></div>
          </div>
        </div>
      </section>

      {/* Darius Mentor Section */}
      <section className="section" style={{ padding: "40px 0 80px" }}>
        <div className="container">
          <div className="mentor-grid">
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: "-4px", background: "var(--gradient-red)", borderRadius: 24, opacity: 0.6, filter: "blur(20px)" }}></div>
              <div style={{ width: "100%", aspectRatio: "1", borderRadius: 20, position: "relative", zIndex: 1, border: "2px solid rgba(227, 24, 55, 0.3)", background: "var(--black-card)", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/darius.webp" alt="Darius Benders" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              </div>
            </div>
            <div>
              <p className="section-label" style={{ textAlign: "left" }}>Meet Your Mentor</p>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 20 }}>Learn Directly From Darius</h2>
              <p style={{ color: "var(--gray-300)", fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: 16 }}>
                Darius has successfully generated <strong style={{ color: "var(--primary-red)" }}>$100K+ in a single day more than 10 times</strong>, as well as <strong style={{ color: "var(--primary-red)" }}>$1 million in a day twice</strong>. He has also helped <strong style={{ color: "var(--primary-red)" }}>11 people do $100K in a day</strong>.
              </p>
              <p style={{ color: "var(--gray-300)", fontSize: "1.0625rem", lineHeight: 1.8 }}>
                In the Inner Circle, you get direct access to partner with him and implement the exact systems he uses to scale. This isn&apos;t just coaching — it&apos;s a true partnership opportunity for those who are ready to go all-in and build something massive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="divider"></div></div>

      {/* What's Included */}
      <section className="section" style={{ position: "relative", zIndex: 10, marginBottom: -128, paddingBottom: 160 }}>
        <div className="container">
          <div className="section-header">
            <p className="section-label">What&apos;s Included</p>
            <h2>The Complete Inner Circle Experience</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "rgba(255, 215, 0, 0.1)" }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="feature-title">One Year of Elite Coaching &amp; Mentorship</h3>
              <p className="feature-desc">Ongoing virtual sessions combined with deep-dive strategic support. Get direct access to Darius for an entire year.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "rgba(255, 215, 0, 0.1)" }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
              <h3 className="feature-title">Four In-Person High-Level Masterminds</h3>
              <p className="feature-desc">Meet and collaborate with top entrepreneurs focused on scaling. Exclusive access to our live mastermind events.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "rgba(255, 215, 0, 0.1)" }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg></div>
              <h3 className="feature-title">7-Figure Webinar Framework</h3>
              <p className="feature-desc">Master virtual events and webinars with our proven framework for launching high-converting events that sell.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "rgba(255, 215, 0, 0.1)" }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
              <h3 className="feature-title">The $100K/Day Challenge Framework</h3>
              <p className="feature-desc">We&apos;ve successfully generated $100K+ in a single day six times. Learn exactly how we did it so you can implement and scale fast.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "rgba(255, 215, 0, 0.1)" }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
              <h3 className="feature-title">Scaling with Systems &amp; Automation</h3>
              <p className="feature-desc">Implement SMS, email marketing, and automation to optimize growth without working more hours.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "rgba(255, 215, 0, 0.1)" }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></div>
              <h3 className="feature-title">Proven Marketing &amp; Sales Strategies</h3>
              <p className="feature-desc">Master email, SMS, and content marketing to create consistent revenue streams that scale.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "rgba(255, 215, 0, 0.1)" }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg></div>
              <h3 className="feature-title">Private Access to Training &amp; Replays</h3>
              <p className="feature-desc">Lifetime access to modules, class recordings, and new high-level training as we continue to add content.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "rgba(255, 215, 0, 0.1)" }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg></div>
              <h3 className="feature-title">Partnership Opportunities with Darius</h3>
              <p className="feature-desc">For those that are ready and killing it, you&apos;ll have opportunities to partner directly with Darius on deals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "rgba(255, 215, 0, 0.1)" }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg></div>
              <h3 className="feature-title">7-Figure Selling 1-to-Many Framework</h3>
              <p className="feature-desc">The exact framework for selling to groups instead of draining 1:1 calls. Scale your sales without scaling your time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "rgba(255, 215, 0, 0.1)" }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div>
              <h3 className="feature-title">Webinar Full System Build-Out</h3>
              <p className="feature-desc">We build your complete webinar system — funnels, emails, tech, everything — so you can focus on delivering and closing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section style={{ position: "relative", zIndex: 0, width: "100%", minHeight: "110vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/lifestyle.webp" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }} />
          {/* Red tint base layer */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(60, 0, 0, 0.4) 0%, rgba(30, 0, 0, 0.5) 50%, rgba(15, 0, 0, 0.65) 100%)" }}></div>
          {/* Red vignette layer */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(40, 0, 0, 0.1) 0%, rgba(20, 0, 0, 0.55) 65%, rgba(10, 0, 0, 0.8) 100%)" }}></div>
          {/* Top edge fade */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10, 10, 10, 0.8) 0%, transparent 18%, transparent 100%)" }}></div>
          {/* Bottom fade */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 256, zIndex: 3, background: "linear-gradient(to bottom, transparent 0%, rgba(10, 10, 10, 0.4) 30%, rgba(10, 10, 10, 0.85) 70%, rgba(10, 10, 10, 1) 100%)" }}></div>
        </div>
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "60px 20px", maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, margin: "0 0 8px 0", color: "#ffffff", textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.5)" }}>This Is The Lifestyle.</h2>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, margin: "0 0 24px 0", color: "#EAB308", textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.5), 0 0 60px rgba(234,179,8,0.15)" }}>This Is The Inner Circle.</h2>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.85)", maxWidth: 600, margin: "0 auto", textShadow: "0 1px 10px rgba(0,0,0,0.5)", fontWeight: 300, lineHeight: 1.6 }}>Join the entrepreneurs who are building generational wealth and living life on their own terms.</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section" style={{ marginTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <p className="section-label">Investment</p>
            <h2>Join The Inner Circle</h2>
          </div>
          <div className="pricing-grid" style={{ maxWidth: 800 }}>
            <div className="pricing-card featured" style={{ borderColor: "#FFD700", boxShadow: "0 0 80px -20px rgba(255, 215, 0, 0.3)" }}>
              <p className="pricing-duration" style={{ color: "#FFD700" }}>Pay In Full — Best Value</p>
              <h3 className="pricing-name">Inner Circle</h3>
              <p className="pricing-tagline">Full year access + PIF bonuses</p>
              <div className="pricing-amount"><span className="pricing-currency">$</span><span className="pricing-value">25K</span></div>
              <ul className="pricing-features">
                <li><CheckGold />Everything listed above</li>
                <li><CheckGold /><span><strong style={{ color: "#FFD700" }}>BONUS:</strong> Darius pitches at YOUR virtual event</span></li>
                <li><CheckGold /><span><strong style={{ color: "#FFD700" }}>BONUS:</strong> Featured on Darius&apos;s podcast</span></li>
                <li><CheckGold /><span><strong style={{ color: "#FFD700" }}>BONUS:</strong> VIP Dinner with Darius</span></li>
                <li><CheckGold />Save $5,000 vs payment plan</li>
              </ul>
              <a href="https://www.fanbasis.com/agency-checkout/Dariusbenders/0RDmy" target="_blank" className="cta-button" style={{ background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)", color: "#000", fontWeight: 700, textDecoration: "none" }}>Apply For Inner Circle</a>
            </div>
            <div className="pricing-card">
              <p className="pricing-duration">Two-Pay Option</p>
              <h3 className="pricing-name">Inner Circle</h3>
              <p className="pricing-tagline">Split into 2 payments</p>
              <div className="pricing-amount"><span className="pricing-currency">$</span><span className="pricing-value">30K</span></div>
              <ul className="pricing-features">
                <li><Check />One year of elite coaching</li>
                <li><Check />Four in-person masterminds</li>
                <li><Check />$100K/Day challenge framework</li>
                <li><Check />7-figure webinar framework</li>
                <li><Check />Partnership opportunities</li>
                <li style={{ color: "var(--gray-500)" }}><XIcon />PIF bonuses not included</li>
              </ul>
              <a href="https://www.fanbasis.com/agency-checkout/Dariusbenders/pYg9X" target="_blank" className="cta-button" style={{ textDecoration: "none" }}>Apply For Inner Circle</a>
            </div>
          </div>
          <p style={{ textAlign: "center", color: "var(--gray-400)", marginTop: 32, fontSize: "0.9375rem" }}>Limited spots available. Application required.</p>
        </div>
      </section>
      <TestimonialButton pageKey="innerCircle" />
    </>
  );
}
