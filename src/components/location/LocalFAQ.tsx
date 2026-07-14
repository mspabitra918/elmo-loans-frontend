"use client";

import { Faq } from "@/src/components/faq/FAQ";

interface FAQItem {
  question: string;
  answer: string;
}

interface LocalFAQProps {
  title: string;
  items: FAQItem[];
}

export default function LocalFAQ({ title, items }: LocalFAQProps) {
  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Local Questions
            </span>

            <h2 className="mt-3 text-3xl font-bold text-navy-900">
              Frequently Asked Questions About {title}
            </h2>

            <p className="mt-4 text-slate-600">
              Answers to common questions from business owners in {title}.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <Faq items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
