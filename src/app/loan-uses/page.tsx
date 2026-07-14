import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What You Can Use a Business Loan For | Elmo Loans",
  description:
    "Business funding for working capital, payroll, inventory, equipment, expansion, marketing, and more.",
};
import LoanUsesHero from "@/src/components/loan-uses/LoanUsesHero";
import LoanUsesGrid from "@/src/components/loan-uses/LoanUsesGrid";
import LoanUsesCTA from "@/src/components/loan-uses/LoanUsesCTA";

export default function LoanUsesPage() {
  return (
    <>
      <LoanUsesHero />
      <LoanUsesGrid />
      <LoanUsesCTA />
    </>
  );
}
