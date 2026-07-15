import LegalCTA from "@/src/components/legal/LegalCTA";
import LegalHero from "@/src/components/legal/LegalHero";
import TermsContent from "@/src/components/legal/TermsContent";

export const metadata = {
  title: "Terms of Service | Elmo Loans",
  description:
    "Review the Terms of Service governing your use of the Elmo Loans website and business loan application process.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <LegalHero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our website or submitting a business loan application."
      />

      <TermsContent />

      <LegalCTA />
    </>
  );
}
