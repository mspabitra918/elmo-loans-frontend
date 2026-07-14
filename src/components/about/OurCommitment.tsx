"use client";

import { CheckCircle2 } from "lucide-react";

const commitments = [
  "Every applicant receives a real review—not an automatic rejection based solely on a credit score.",
  "Every offer clearly explains the total cost of borrowing in plain language before you accept.",
  "Businesses across a wide range of industries are considered, provided the funding purpose is legitimate.",
];

export default function OurCommitment() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container-x max-w-5xl">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-10">
          <h2 className="text-3xl font-bold text-navy-900">Our Commitment</h2>

          <div className="mt-8 space-y-6">
            {commitments.map((item) => (
              <div key={item} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-emerald-600" />

                <p className="leading-8 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
