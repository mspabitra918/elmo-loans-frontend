"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EligibilityCTA() {
  return (
    <section className="pb-12 md:pb-20">
      <div className="container-x">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to Check Your Eligibility?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            It only takes a few minutes to apply, and checking your eligibility
            won't affect your credit score.
          </p>

          <Link
            href="/apply"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-primary transition hover:bg-slate-100"
          >
            Check Your Eligibility Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
