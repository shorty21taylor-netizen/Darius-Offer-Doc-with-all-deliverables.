import { type LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="card-surface p-6 h-full">
        <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
          <Icon className="text-gold" size={24} />
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </ScrollReveal>
  );
}
