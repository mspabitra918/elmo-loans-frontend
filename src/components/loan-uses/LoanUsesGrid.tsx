"use client";

import {
  Wallet,
  Wrench,
  Boxes,
  Building2,
  Users,
  Megaphone,
  HandCoins,
  Hammer,
  TriangleAlert,
} from "lucide-react";

const uses = [
  {
    icon: Wallet,
    title: "Working Capital",
    description: "Smooth out cash flow gaps between receivables and expenses.",
  },
  {
    icon: Wrench,
    title: "Equipment Purchase or Repair",
    description:
      "Buy, replace, or repair the equipment your business depends on.",
  },
  {
    icon: Boxes,
    title: "Inventory Financing",
    description:
      "Stock up before busy seasons without putting pressure on cash flow.",
  },
  {
    icon: Building2,
    title: "Business Expansion",
    description:
      "Open a new location, launch a service, or grow your operations.",
  },
  {
    icon: Users,
    title: "Payroll Coverage",
    description: "Keep your team paid during slower periods.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Growth",
    description: "Invest in campaigns that bring in new customers and revenue.",
  },
  {
    icon: HandCoins,
    title: "Debt Consolidation",
    description: "Combine existing business debts into one manageable payment.",
  },
  {
    icon: Hammer,
    title: "Renovations & Improvements",
    description: "Upgrade your workspace to better serve customers.",
  },
  {
    icon: TriangleAlert,
    title: "Emergency Expenses",
    description: "Handle unexpected costs without disrupting your business.",
  },
];

export default function LoanUsesGrid() {
  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-navy-900">
            Funding That Works for Your Business
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every business reaches moments where the right funding makes all the
            difference—covering a short-term gap, investing in growth, or taking
            advantage of new opportunities. Elmo Loans doesn't limit you to one
            specific use.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {uses.map((item) => (
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

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
          <h3 className="text-2xl font-bold text-navy-900">
            Not sure if your situation qualifies?
          </h3>

          <p className="mt-4 leading-8 text-slate-700">
            It almost certainly does. Reach out to our team or start an
            application and we'll give you a straightforward answer about your
            options.
          </p>
        </div>
      </div>
    </section>
  );
}
