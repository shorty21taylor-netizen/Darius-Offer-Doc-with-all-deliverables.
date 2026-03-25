import type { Metadata } from "next";
import ResultsPageLayout from "@/components/testimonials/ResultsPageLayout";

export const metadata: Metadata = {
  title: "Results — Real Client Transformations | Influence2Impact",
  description: "See real results from real people across all Influence2Impact programs with Darius Benders.",
};

export default function HomeResultsPage() {
  return <ResultsPageLayout pageKey="home" />;
}
