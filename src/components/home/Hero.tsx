"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CreditCard,
  ShieldCheck,
  Zap,
} from "lucide-react";

const trustItems = [
  { icon: Building2, title: "Direct Lender", subtitle: "No middlemen" },
  { icon: Zap, title: "Fast Funding", subtitle: "24–72 hours" },
  { icon: CreditCard, title: "All Credit Levels", subtitle: "Considered" },
  {
    icon: ShieldCheck,
    title: "Secure Application",
    subtitle: "Bank-level security",
  },
];

const stats = [
  { value: "$5K–$250K", label: "Funding range" },
  { value: "24–72 hrs", label: "Time to funding" },
  { value: "All credit", label: "Levels considered" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Ambient brand gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_-10%,#d1fae5,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_45%_at_-5%_110%,#dbeafe,transparent_60%)]" />

      <div className="container-x relative py-20 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Canadian-owned • Ontario-based direct lender
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Business funding,
            <span className="block bg-gradient-to-r from-emerald-600 to-primary bg-clip-text text-transparent">
              direct and fast
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-navy-300">
            {/* Get business funding from{" "}
            <span className="font-semibold text-navy-200">
              $5,000 to $250,000
            </span>{" "}
            with a fast decision and, if approved, funding in as little as{" "}
            <span className="font-semibold text-emerald-700">
              24 to 72 hours
            </span>
            . All credit levels considered — every industry welcome. */}
            Elmo Loans is a direct lender providing business loans up to
            $250,000 to Canadian business owners — funded in as fast as 24 to 72
            hours. All credit levels considered. All business types welcome.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/apply" className="btn-primary px-12 py-4 text-base">
              Check your offer
              <ArrowRight className="h-5 w-5" />
            </Link>
            {/* <Link
              href="#how-it-works"
              className="btn-secondary px-8 py-4 text-base"
            >
              How it works
            </Link> */}
          </div>

          <p className="mt-4 text-sm text-navy-100/90">
            ✓ Checking your offer won&apos;t impact your credit score
          </p>

          {/* Headline stats */}
          <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-3 divide-x divide-navy-100 rounded-2xl border border-navy-100 bg-white/70 py-5 shadow-lift backdrop-blur">
            {stats.map((stat) => (
              <div key={stat.label} className="px-3">
                <dt className="text-xl font-bold text-navy-900 sm:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-navy-400 sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Trust cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-100">
                <item.icon className="h-6 w-6" />
              </span>

              <h3 className="mt-4 text-base font-semibold text-navy-900">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-navy-700">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
