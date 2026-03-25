import type { Metadata } from "next";
import {
  Rocket,
  Presentation,
  UserCheck,
  Globe,
  Target,
  Wrench,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import StatBlock from "@/components/StatBlock";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Digital Mastery — Scale With Webinar Selling | I2I",
  description:
    "Scale to multiple 5-figures/week with webinar selling. Eliminate sales calls, sell one-to-many, and book your team with qualified leads.",
};

export default function DigitalMasteryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Scale to Multiple{" "}
              <span className="text-gold-gradient">5-Figures/Week</span> With
              Webinar Selling
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Eliminate countless sales calls, sell one-to-many on virtual
              webinars, and book your team with qualified, HOT leads ready to
              buy. The fastest path to scaling coaching, consulting, and
              service-based offers.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10">
              <StatBlock value="1:Many Webinar Sales" />
              <StatBlock value="DFY Funnel Build" />
              <StatBlock value="5-Fig+ Weekly Potential" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a href="#mastermind-pricing" className="btn-gold text-lg px-10">
              See Investment Options
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* What You'll Master */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="What You'll Master" title="The Complete Digital Scaling System" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              icon={Rocket}
              title="Launch High-Ticket Offers"
              description="Learn how to create and sell coaching, consulting, and mentorship products that command premium prices and attract serious buyers."
              delay={0}
            />
            <FeatureCard
              icon={Presentation}
              title="Webinar Selling Mastery"
              description="Sell one-to-many and eliminate draining 1:1 sales calls. Fill your calendar with qualified, HOT leads who are ready to buy before they even get on a call."
              delay={0.05}
            />
            <FeatureCard
              icon={UserCheck}
              title="Leverage OPA (Other People's Audiences)"
              description="Tap into established audiences to rapidly grow your reach without starting from zero. Strategic partnerships that accelerate your growth."
              delay={0.1}
            />
            <FeatureCard
              icon={Globe}
              title="Organic Traffic (IG & YouTube)"
              description="Master content that converts on Instagram and YouTube. Get qualified prospects sliding into your DMs ready to learn more about your offers."
              delay={0.15}
            />
            <FeatureCard
              icon={Target}
              title="Paid Traffic & Ads"
              description="Learn how to run profitable ad campaigns that drive targeted traffic to your webinar funnels and scale your reach on demand."
              delay={0.2}
            />
            <FeatureCard
              icon={Wrench}
              title="DFY Webinar Funnel Build"
              description="We build out your complete webinar funnel for you — landing pages, email sequences, and all the tech setup handled so you can focus on selling."
              delay={0.25}
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="mastermind-pricing" className="py-24 md:py-32 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Investment Options" title="Choose Your Level" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <PricingCard
              badge="Done-For-You Only"
              title="Funnel Build"
              description="Just the funnel, no coaching"
              price="$5K"
              features={[
                { text: "Complete webinar funnel build", included: true },
                { text: "Landing page setup", included: true },
                { text: "Email sequence integration", included: true },
                { text: "Full tech setup & handoff", included: true },
                { text: "No coaching included", included: false },
                { text: "No community access", included: false },
              ]}
              ctaText="Get Your Funnel"
              ctaHref="https://www.fanbasis.com/agency-checkout/Dariusbenders/W72v"
              delay={0}
            />
            <PricingCard
              badge="Pay In Full"
              title="Digital Mastermind"
              description="Full coaching + DFY funnel"
              price="$15K"
              highlighted
              features={[
                { text: "1-on-1 coaching calls", included: true },
                { text: "Group coaching calls", included: true },
                { text: "Private community access", included: true },
                { text: "DFY webinar funnel build", included: true },
                { text: "Content scripts & templates", included: true },
                { text: "Full funnel tech setup", included: true },
              ]}
              ctaText="Join The Mastermind"
              ctaHref="https://www.fanbasis.com/agency-checkout/Dariusbenders/Qx89"
              delay={0.1}
            />
            <PricingCard
              badge="Two-Pay Option"
              title="Digital Mastermind"
              description="Split into 2 payments"
              price="$18K"
              features={[
                { text: "1-on-1 coaching calls", included: true },
                { text: "Group coaching calls", included: true },
                { text: "Private community access", included: true },
                { text: "DFY webinar funnel build", included: true },
                { text: "Content scripts & templates", included: true },
                { text: "Full funnel tech setup", included: true },
              ]}
              ctaText="Join The Mastermind"
              ctaHref="https://www.fanbasis.com/agency-checkout/Dariusbenders/xn9P"
              delay={0.2}
            />
          </div>

          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-center text-sm mt-12">
              Perfect for coaches, consultants, service providers, and anyone
              running a funding or credit repair business.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
