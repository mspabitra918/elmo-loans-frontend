import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Elmo Loans",
  description:
    "See exactly how Elmo Loans' application, approval, and funding process works—from application to money in your business account.",
};
import HowItWorksHero from "@/src/components/how-it-works/HowItWorksHero";
import ProcessSteps from "@/src/components/how-it-works/ProcessSteps";
import HowItWorksCTA from "@/src/components/how-it-works/HowItWorksCTA";

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <ProcessSteps />
      <HowItWorksCTA />
    </>
  );
}
