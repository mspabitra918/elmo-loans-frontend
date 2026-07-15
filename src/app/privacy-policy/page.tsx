import LegalCTA from "@/src/components/legal/LegalCTA";
import LegalHero from "@/src/components/legal/LegalHero";
import LegalSection from "@/src/components/legal/LegalSection";

export const metadata = {
  title: "Privacy Policy | Elmo Loans",
  description:
    "Learn how Elmo Loans collects, uses, stores, and protects your personal information in accordance with Canadian privacy laws.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHero
        title="Privacy Policy"
        subtitle="How Elmo Loans collects, uses, stores, and protects your personal information."
      />

      <LegalSection />

      <LegalCTA />
    </>
  );
}
