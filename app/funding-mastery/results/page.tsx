import type { Metadata } from "next";
import ResultsPageLayout from "@/components/testimonials/ResultsPageLayout";

export const metadata: Metadata = {
  title: "Funding Program Results — Client Success Stories | Influence2Impact",
  description: "See how our clients are getting $150K+ in business funding through the Influence2Impact credit and funding program.",
};

export default function FundingResultsPage() {
  return <ResultsPageLayout pageKey="funding" />;
}
