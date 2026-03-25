import ParticleField from "@/components/home/ParticleField";
import CursorGlow from "@/components/home/CursorGlow";
import HeroSection from "@/components/home/HeroSection";
import CredibilityMarquee from "@/components/home/CredibilityMarquee";
import PortalCardsGrid from "@/components/home/PortalCardsGrid";

export default function Home() {
  return (
    <>
      <ParticleField />
      <CursorGlow />
      <HeroSection />
      <CredibilityMarquee />
      <PortalCardsGrid />
    </>
  );
}
