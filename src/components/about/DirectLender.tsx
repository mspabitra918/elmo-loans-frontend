"use client";

import { BadgeCheck, Clock3, ShieldCheck, MessagesSquare } from "lucide-react";

const benefits = [
  {
    icon: MessagesSquare,
    title: "One Point of Contact",
    description: "Work with the same team from application through funding.",
  },
  {
    icon: ShieldCheck,
    title: "Your Information Stays Private",
    description:
      "We don't sell your application to lists of third-party lenders.",
  },
  {
    icon: Clock3,
    title: "Faster Decisions",
    description: "No middleman means fewer delays and quicker answers.",
  },
  {
    icon: BadgeCheck,
    title: "Clear Loan Terms",
    description:
      "Know your rate, repayment term, and total borrowing cost before you sign.",
  },
];

export default function DirectLender() {
  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-navy-900">
            What "Direct Lender" Actually Means for You
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            When you choose Elmo Loans, you're dealing directly with your lender
            from start to finish.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {benefits.map((item) => (
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
      </div>
    </section>
  );
}
