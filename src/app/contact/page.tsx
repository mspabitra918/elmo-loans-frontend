import ContactHero from "@/src/components/contact/ContactHero";
import ContactInfo from "@/src/components/contact/ContactInfo";
// import ContactForm from "@/src/components/contact/ContactForm";
import ContactCTA from "@/src/components/contact/ContactCTA";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Elmo Loans | Get in Touch",
  description:
    "Questions before you apply? Contact Elmo Loans by phone, email, or our online contact form. Our team is here to help.",
};
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      {/* <ContactForm /> */}
      <ContactCTA />
    </>
  );
}
