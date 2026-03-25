import type { Metadata } from "next";
import ResultsPageLayout from "@/components/testimonials/ResultsPageLayout";

export const metadata: Metadata = {
  title: "Fund2Grow Results — Success Stories | Influence2Impact",
  description: "See how funding professionals are scaling their businesses with the Fund2Grow CRM and automation platform.",
};

export default function SaasResultsPage() {
  return <ResultsPageLayout pageKey="saas" />;
}
