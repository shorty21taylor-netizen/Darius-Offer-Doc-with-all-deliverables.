import { Check, X } from "lucide-react";
import GoldButton from "./GoldButton";
import ScrollReveal from "./ScrollReveal";

interface PricingFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PricingCardProps {
  badge: string;
  title: string;
  description: string;
  price: string;
  features: PricingFeature[];
  ctaText: string;
  ctaHref: string;
  highlighted?: boolean;
  delay?: number;
  badgeColor?: "gold" | "blue";
}

export default function PricingCard({
  badge,
  title,
  description,
  price,
  features,
  ctaText,
  ctaHref,
  highlighted = false,
  delay = 0,
  badgeColor = "gold",
}: PricingCardProps) {
  const badgeBg = badgeColor === "blue" ? "bg-blue/20 text-blue" : "bg-gold/20 text-gold";

  return (
    <ScrollReveal delay={delay}>
      <div className={`${highlighted ? "card-gold" : "card-surface"} p-8 h-full flex flex-col relative`}>
        {highlighted && (
          <div className="absolute -top-px left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-t-2xl" />
        )}

        <span className={`inline-block self-start text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full mb-4 ${badgeBg}`}>
          {badge}
        </span>

        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-text-secondary text-sm mb-6">{description}</p>

        <div className="mb-6">
          <span className="text-4xl font-bold text-gold-gradient">{price}</span>
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              {feature.included ? (
                <Check className={`w-5 h-5 shrink-0 mt-0.5 ${feature.highlight ? "text-gold" : "text-gold"}`} />
              ) : (
                <X className="w-5 h-5 shrink-0 mt-0.5 text-gray-600" />
              )}
              <span className={feature.included ? (feature.highlight ? "text-gold font-medium" : "text-white/90 text-sm") : "feature-disabled text-sm"}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <GoldButton href={ctaHref} external className="w-full text-center">
          {ctaText}
        </GoldButton>
      </div>
    </ScrollReveal>
  );
}
