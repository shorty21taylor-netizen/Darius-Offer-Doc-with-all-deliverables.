import type { Metadata } from "next";
import ResultsPageLayout from "@/components/testimonials/ResultsPageLayout";

export const metadata: Metadata = {
  title: "Inner Circle Results — Elite Transformations | Influence2Impact",
  description: "Hear from Inner Circle members who are running $100K+ days and building generational wealth with Darius Benders.",
};

export default function InnerCircleResultsPage() {
  return <ResultsPageLayout pageKey="innerCircle" />;
}
