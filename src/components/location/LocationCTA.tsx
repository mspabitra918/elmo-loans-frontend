"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LocationCTA() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center shadow-xl md:px-16">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_35%)]" />

          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to See What You Qualify For?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Checking your offer takes only a few minutes and won't impact your
              credit score.
            </p>

            <Link
              href="/apply"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary transition hover:bg-slate-100"
            >
              Check Your Offer
              <ArrowRight className="h-5 w-5" />
            </Link>

            <p className="mt-4 text-sm text-white/80">
              ✓ No obligation • ✓ No impact to your credit score
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
