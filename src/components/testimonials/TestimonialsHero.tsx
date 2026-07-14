"use client";

import { Star } from "lucide-react";

export default function TestimonialsHero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_40%)]" />

      <div className="container-x relative py-12 md:py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
          <Star className="h-4 w-4 fill-current" />
          Customer Reviews
        </span>

        <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          What Business Owners Say About Elmo Loans
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Real feedback from businesses we've funded.
        </p>
      </div>
    </section>
  );
}
