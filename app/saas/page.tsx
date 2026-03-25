import type { Metadata } from "next";
import { Monitor, BarChart3, Zap } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import StatBlock from "@/components/StatBlock";
import GoldButton from "@/components/GoldButton";
import PricingCard from "@/components/PricingCard";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Fund2Grow.ai — CRM & Automation for Funding Professionals | I2I",
  description:
    "The all-in-one CRM and automation platform built for funding professionals. Manage clients, automate applications, and grow your business on autopilot.",
};

export default function SaasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Scale Your Funding Business{" "}
              <span className="text-gold-gradient">With Precision</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              The all-in-one CRM and automation platform built for funding
              professionals. Manage clients, automate applications, and grow your
              business on autopilot.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center">
                  <Zap className="text-blue" size={20} />
                </div>
                <StatBlock value="Auto Apply System" goldValue={false} />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center">
                  <Monitor className="text-blue" size={20} />
                </div>
                <StatBlock value="CRM Client Dashboard" goldValue={false} />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center">
                  <BarChart3 className="text-blue" size={20} />
                </div>
                <StatBlock value="24/7 Automation" goldValue={false} />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <a href="#pricing" className="btn-gold text-lg px-10">
              Choose Your Plan
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="Choose Your Plan" title="Fund2Grow.ai" />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <PricingCard
              badge="Starter"
              badgeColor="blue"
              title="Solo Funder"
              description="Ideal for new or solo funders managing their first clients"
              price="$97/month"
              features={[
                { text: "Client CRM Dashboard (Up to 6 Clients)", included: true },
                { text: "Up to 15 Auto Applies", included: true },
                { text: "Funding Readiness Score", included: true },
                { text: "Document Vault", included: true },
                { text: "Support", included: true },
                { text: "Branded Client Portal", included: false },
                { text: "Team Access", included: false },
              ]}
              ctaText="Get Started"
              ctaHref="http://www.fund2grow.ai/"
              delay={0}
            />
            <PricingCard
              badge="Scale"
              badgeColor="gold"
              title="Growth Mode"
              description="Built for active funding businesses managing multiple clients"
              price="$197/month"
              highlighted
              features={[
                { text: "Client CRM Dashboard (10+ Clients)", included: true },
                { text: "Up to 30+ Auto Applies", included: true },
                { text: "Funding Readiness Score", included: true },
                { text: "Document Vault", included: true },
                { text: "Priority Support", included: true },
                { text: "Branded Client Portal", included: true },
                { text: "Team Access", included: true },
              ]}
              ctaText="Get Started"
              ctaHref="http://www.fund2grow.ai/"
              delay={0.1}
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-divider mb-16" />
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Automate your funding business and scale without the headaches.
            </h2>
            <GoldButton href="http://www.fund2grow.ai/" external className="text-lg px-10">
              Get Started with Fund2Grow
            </GoldButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
