import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Loan Eligibility | Elmo Loans",
  description:
    "Learn what it takes to qualify for a business loan with Elmo Loans. Simple requirements and all credit levels considered.",
};
import EligibilityHero from "@/src/components/eligibility/EligibilityHero";
import EligibilityRequirements from "@/src/components/eligibility/EligibilityRequirements";
import EligibilityCallouts from "@/src/components/eligibility/EligibilityCallouts";
import EligibilityCTA from "@/src/components/eligibility/EligibilityCTA";

export default function EligibilityPage() {
  return (
    <>
      <EligibilityHero />
      <EligibilityRequirements />
      <EligibilityCallouts />
      <EligibilityCTA />
    </>
  );
}
