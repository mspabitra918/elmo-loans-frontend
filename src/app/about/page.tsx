import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Elmo Loans | Direct Canadian Business Lender",
  description:
    "Elmo Loans is a direct business lender headquartered in Ontario, built to help Canadian business owners access fast, straightforward funding.",
};
import AboutHero from "@/src/components/about/AboutHero";
import OurStory from "@/src/components/about/OurStory";
import DirectLender from "@/src/components/about/DirectLender";
import OurCommitment from "@/src/components/about/OurCommitment";
import AboutCTA from "@/src/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <DirectLender />
      <OurCommitment />
      <AboutCTA />
    </>
  );
}
