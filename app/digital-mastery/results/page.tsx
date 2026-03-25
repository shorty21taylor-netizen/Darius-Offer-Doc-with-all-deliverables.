import type { Metadata } from "next";
import ResultsPageLayout from "@/components/testimonials/ResultsPageLayout";

export const metadata: Metadata = {
  title: "Digital Mastermind Results — Scaling Stories | Influence2Impact",
  description: "See how our clients are scaling to 5-figures/week with webinar selling through the Digital Mastermind program.",
};

export default function DigitalResultsPage() {
  return <ResultsPageLayout pageKey="digital" />;
}
