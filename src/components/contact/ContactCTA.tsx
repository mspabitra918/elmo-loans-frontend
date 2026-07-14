"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-8 py-14 text-center shadow-xl md:px-16">
          {/* Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_35%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_40%)]" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-black">
              Business Funding
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-black md:text-4xl">
              Looking to Apply for Funding Instead?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Checking your offer takes just a few minutes and won&apos;t impact
              your credit score. See how much funding your business may qualify
              for.
            </p>

            <div className="mt-10">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white transition hover:opacity-90"
              >
                Start Your Application
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-600">
              ✓ No obligation • ✓ No impact to your credit score
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
