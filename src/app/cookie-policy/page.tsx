import CookieContent from "@/src/components/legal/CookieContent";
import LegalCTA from "@/src/components/legal/LegalCTA";
import LegalHero from "@/src/components/legal/LegalHero";

export const metadata = {
  title: "Cookie Policy | Elmo Loans",
  description:
    "Learn how Elmo Loans uses cookies and similar technologies to improve your browsing experience and website functionality.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <LegalHero
        title="Cookie Policy"
        subtitle="Learn how Elmo Loans uses cookies and similar technologies on our website."
      />

      <CookieContent />

      <LegalCTA />
    </>
  );
}
