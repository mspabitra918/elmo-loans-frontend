import FinalCTA from "../components/home/FinalCTA";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import LoanAmount from "../components/home/LoanAmount";
import SocialProof from "../components/home/SocialProof";
import WhyChoose from "../components/home/WhyChoose";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elmo Loans | Canadian Business Loans up to $250,000",
  description:
    "Direct lender. Business loans up to $250,000, funded in 24–72 hours. All credit levels and industries considered. Apply online in minutes.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <LoanAmount />
      <SocialProof />
      <FinalCTA />
    </>
  );
}
