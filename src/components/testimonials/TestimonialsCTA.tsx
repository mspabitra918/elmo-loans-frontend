"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TestimonialsCTA() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-x">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to See What You Qualify For?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Checking your offer takes only a few minutes and won't impact your
            credit score.
          </p>

          <Link
            href="/apply"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-primary transition hover:bg-slate-100"
          >
            Check Your Offer
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
