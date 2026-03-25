import ParticleField from "@/components/home/ParticleField";
import CursorGlow from "@/components/home/CursorGlow";
import HeroSection from "@/components/home/HeroSection";
import CredibilityMarquee from "@/components/home/CredibilityMarquee";
import PortalCardsGrid from "@/components/home/PortalCardsGrid";
import InlineResultsButton from "@/components/testimonials/InlineResultsButton";

export default function Home() {
  return (
    <>
      <ParticleField />
      <CursorGlow />
      <HeroSection />
      <div style={{ display: "flex", justifyContent: "center", padding: "0 24px" }}>
        <InlineResultsButton href="/results" />
      </div>
      <CredibilityMarquee />
      <PortalCardsGrid />
    </>
  );
}
