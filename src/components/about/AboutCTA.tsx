"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="">
      <div className="container-x">
        <div className="rounded-3xl bg-primary px-8 py-12 md:py-16 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to See What You Qualify For?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Applying takes only a few minutes, and checking your offer won't
            affect your credit score.
          </p>

          <Link
            href="/apply"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-primary transition hover:bg-slate-100"
          >
            See What You Qualify For
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
