import type { Metadata } from "next";
import Image from "next/image";
import {
  Crown,
  Users,
  Presentation,
  Trophy,
  Settings,
  TrendingUp,
  Video,
  Handshake,
  Megaphone,
  Wrench,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import StatBlock from "@/components/StatBlock";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "The Inner Circle — Elite Mastermind with Darius Benders | I2I",
  description:
    "Partner with Darius and learn how to run 5-day virtual events that scale to $100K+ cash collected in a single day. The ultimate high-level mastermind.",
};

export default function InnerCirclePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
        {/* Background lifestyle image */}
        <Image
          src="https://darius-offer-doc-with-all-deliverables-production.up.railway.app/lifestyle.webp"
          alt="Inner Circle luxury lifestyle"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-bg" />
        {/* Gold radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/8 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Flagship Program
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              The Inner <span className="text-gold-gradient">Circle</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Partner with Darius and learn how to run 5-day virtual events that
              scale to $100K+ cash collected in a single day. This is the
              ultimate high-level mastermind for serious entrepreneurs ready to
              dominate.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10">
              <StatBlock value="$100K+ Single Day Potential" />
              <StatBlock value="1 Year Elite Access" />
              <StatBlock value="4 Live In-Person Masterminds" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <a href="#ic-pricing" className="btn-gold text-lg px-10">
              Apply For Inner Circle
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Meet Your Mentor */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-gold/20 shadow-[0_0_60px_rgba(212,175,55,0.1)]">
                <Image
                  src="https://darius-offer-doc-with-all-deliverables-production.up.railway.app/darius.webp"
                  alt="Darius Benders — Founder of Influence2Impact"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-3">
                  Meet Your Mentor
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Learn Directly From Darius
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Darius has successfully generated{" "}
                  <span className="text-gold font-bold">$100K+ in a single day more than 10 times</span>,
                  as well as{" "}
                  <span className="text-gold font-bold">$1 million in a day twice</span>.
                  He has also helped{" "}
                  <span className="text-gold font-bold">11 people do $100K in a day</span>.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  In the Inner Circle, you get direct access to partner with him
                  and implement the exact systems he uses to scale. This
                  isn&apos;t just coaching — it&apos;s a true partnership
                  opportunity for those who are ready to go all-in and build
                  something massive.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 md:py-32 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="What's Included" title="The Complete Inner Circle Experience" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              icon={Crown}
              title="One Year of Elite Coaching & Mentorship"
              description="Ongoing virtual sessions combined with deep-dive strategic support. Get direct access to Darius for an entire year."
              delay={0}
            />
            <FeatureCard
              icon={Users}
              title="Four In-Person High-Level Masterminds"
              description="Meet and collaborate with top entrepreneurs focused on scaling. Exclusive access to our live mastermind events."
              delay={0.05}
            />
            <FeatureCard
              icon={Presentation}
              title="7-Figure Webinar Framework"
              description="Master virtual events and webinars with our proven framework for launching high-converting events that sell."
              delay={0.1}
            />
            <FeatureCard
              icon={Trophy}
              title="The $100K/Day Challenge Framework"
              description="We've successfully generated $100K+ in a single day six times. Learn exactly how we did it so you can implement and scale fast."
              delay={0.15}
            />
            <FeatureCard
              icon={Settings}
              title="Scaling with Systems & Automation"
              description="Implement SMS, email marketing, and automation to optimize growth without working more hours."
              delay={0.2}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Proven Marketing & Sales Strategies"
              description="Master email, SMS, and content marketing to create consistent revenue streams that scale."
              delay={0.25}
            />
            <FeatureCard
              icon={Video}
              title="Private Access to Training & Replays"
              description="Lifetime access to modules, class recordings, and new high-level training as we continue to add content."
              delay={0.3}
            />
            <FeatureCard
              icon={Handshake}
              title="Partnership Opportunities with Darius"
              description="For those that are ready and killing it, you'll have opportunities to partner directly with Darius on deals."
              delay={0.35}
            />
            <FeatureCard
              icon={Megaphone}
              title="7-Figure Selling 1-to-Many Framework"
              description="The exact framework for selling to groups instead of draining 1:1 calls. Scale your sales without scaling your time."
              delay={0.4}
            />
          </div>

          {/* Special card */}
          <ScrollReveal delay={0.4}>
            <div className="card-gold p-8 mt-8 text-center">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gold mb-2">
                Webinar Full System Build-Out
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
                We build your complete webinar system — funnels, emails, tech,
                everything — so you can focus on delivering and closing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <Image
          src="https://darius-offer-doc-with-all-deliverables-production.up.railway.app/lifestyle.webp"
          alt="Inner Circle lifestyle — luxury cars and success"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-gold text-lg md:text-xl font-medium mb-2">
              This Is The Lifestyle.
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              This Is The Inner Circle.
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Join the entrepreneurs who are building generational wealth and
              living life on their own terms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section id="ic-pricing" className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="Investment" title="Join The Inner Circle" />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <PricingCard
              badge="Pay In Full — Best Value"
              title="Inner Circle"
              description="Full year access + PIF bonuses"
              price="$25K"
              highlighted
              features={[
                { text: "Everything listed above", included: true },
                { text: "BONUS: Darius pitches at YOUR virtual event", included: true, highlight: true },
                { text: "BONUS: Featured on Darius's podcast", included: true, highlight: true },
                { text: "BONUS: VIP Dinner with Darius", included: true, highlight: true },
                { text: "Save $5,000 vs payment plan", included: true, highlight: true },
              ]}
              ctaText="Apply For Inner Circle"
              ctaHref="https://www.fanbasis.com/agency-checkout/Dariusbenders/0RDmy"
              delay={0}
            />
            <PricingCard
              badge="Two-Pay Option"
              title="Inner Circle"
              description="Split into 2 payments"
              price="$30K"
              features={[
                { text: "One year of elite coaching", included: true },
                { text: "Four in-person masterminds", included: true },
                { text: "$100K/Day challenge framework", included: true },
                { text: "7-figure webinar framework", included: true },
                { text: "Partnership opportunities", included: true },
                { text: "PIF bonuses not included", included: false },
              ]}
              ctaText="Apply For Inner Circle"
              ctaHref="https://www.fanbasis.com/agency-checkout/Dariusbenders/pYg9X"
              delay={0.1}
            />
          </div>

          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-center text-sm mt-12">
              Limited spots available. Application required.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
