import DisclosureContent from "@/src/components/lending-disclosures/DisclosureContent";
import DisclosureHighlights from "@/src/components/lending-disclosures/DisclosureHighlights";
import LendingCTA from "@/src/components/lending-disclosures/LendingCTA";
import LendingDisclosuresHero from "@/src/components/lending-disclosures/LendingDisclosuresHero";

export default function AboutPage() {
  return (
    <>
      <LendingDisclosuresHero />
      <DisclosureContent />
      <DisclosureHighlights />
      {/* <LendingCTA /> */}
    </>
  );
}
