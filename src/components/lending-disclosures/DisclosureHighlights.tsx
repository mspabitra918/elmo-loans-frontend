"use client";

import {
  BadgeDollarSign,
  CalendarRange,
  FileText,
  Percent,
} from "lucide-react";

const items = [
  {
    icon: BadgeDollarSign,
    title: "Total Loan Amount",
    description: "The exact amount being borrowed before funding is issued.",
  },
  {
    icon: Percent,
    title: "Interest Rate & Full APR",
    description:
      "Your interest rate together with the complete Annual Percentage Rate, including applicable fees.",
  },
  {
    icon: CalendarRange,
    title: "Repayment Schedule",
    description: "Your loan term, payment frequency, and repayment dates.",
  },
  {
    icon: FileText,
    title: "Total Cost of Borrowing",
    description: "The complete amount you'll repay over the life of the loan.",
  },
];

export default function DisclosureHighlights() {
  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-navy-900">
            Every Offer Clearly Shows
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Before you accept any loan offer, you'll receive a clear breakdown
            of every important detail.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <item.icon className="h-7 w-7" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-navy-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
          <h3 className="text-2xl font-bold text-navy-900">
            Questions About Your Offer?
          </h3>

          <p className="mt-4 leading-8 text-slate-700">
            If anything in your loan offer is unclear, our team will explain it
            before you accept. We'll answer your questions with no pressure and
            no obligation, so you can make an informed decision.
          </p>
        </div>
      </div>
    </section>
  );
}
