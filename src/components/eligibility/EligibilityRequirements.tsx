"use client";

import {
  Building2,
  CalendarClock,
  BadgeDollarSign,
  Landmark,
  IdCard,
} from "lucide-react";

const requirements = [
  {
    icon: Building2,
    title: "Registered Canadian Business",
    description:
      "Your business must be registered in Canada as a sole proprietorship, partnership, or corporation.",
  },
  {
    icon: CalendarClock,
    title: "At Least 3 Months in Business",
    description:
      "Your business should have been actively operating for a minimum of three months.",
  },
  {
    icon: BadgeDollarSign,
    title: "Minimum Monthly Revenue",
    description: "Average monthly business revenue of at least $8,000.",
  },
  {
    icon: Landmark,
    title: "Canadian Business Bank Account",
    description: "An active business bank account is required for funding.",
  },
  {
    icon: IdCard,
    title: "Government-Issued Identification",
    description:
      "Valid ID for the business owner or authorized signing officer.",
  },
];

export default function EligibilityRequirements() {
  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-navy-900">
            Basic Eligibility Requirements
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            To apply for a business loan with Elmo Loans, you'll generally need
            the following:
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {requirements.map((item) => (
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
