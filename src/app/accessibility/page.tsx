import AccessibilityContent from "@/src/components/legal/AccessibilityContent";
import LegalCTA from "@/src/components/legal/LegalCTA";
import LegalHero from "@/src/components/legal/LegalHero";

export const metadata = {
  title: "Accessibility Statement | Elmo Loans",
  description:
    "Learn about Elmo Loans' commitment to making our website accessible and usable for everyone.",
};

export default function AccessibilityPage() {
  return (
    <>
      <LegalHero
        title="Accessibility Statement"
        subtitle="We're committed to making our website accessible to everyone."
      />

      <AccessibilityContent />

      <LegalCTA />
    </>
  );
}
