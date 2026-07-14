import { FAQS } from "@/src/lib/constants";
import ContactCTA from "@/src/components/contact/ContactCTA";
import { Faq } from "@/src/components/faq/FAQ";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Metadata } from "next";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
export const metadata: Metadata = {
  title: "Business Loan FAQs | Elmo Loans",
  description:
    "Answers to the most common questions about Elmo Loans business loans, including credit, funding speed, required documents, and eligibility.",
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_40%)]" />

        <div className="container-x relative py-20 text-center">
          <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
            Questions Answered
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Find answers to the most common questions about our business
            funding, eligibility requirements, approval process, and how Elmo
            Loans works.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="container-x">
          {/* <SectionHeading
            center
            eyebrow="Everything You Need to Know"
            title="Frequently Asked Questions"
          /> */}

          <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
