import TestimonialsCTA from "@/src/components/testimonials/TestimonialsCTA";
import TestimonialsHero from "@/src/components/testimonials/TestimonialsHero";
import TestimonialsPlaceholder from "@/src/components/testimonials/TestimonialsPlaceholder";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Customer Reviews | Elmo Loans",
  description:
    "Read verified customer reviews and testimonials from Canadian business owners funded by Elmo Loans.",
};
export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsPlaceholder />
      <TestimonialsCTA />
    </>
  );
}
