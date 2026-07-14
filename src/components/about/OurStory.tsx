"use client";

import { Building2 } from "lucide-react";

export default function OurStory() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container-x max-w-5xl">
        <div className="flex gap-6">
          <div className="hidden md:flex  h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
            <Building2 className="h-8 w-8" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-navy-900">Our Story</h2>

            <p className="mt-6 leading-8 text-slate-600">
              Elmo Loans was founded in Ontario to close a gap in Canadian
              business lending. Too many business owners were waiting weeks for
              funding decisions—or being declined because of a credit score that
              didn't accurately reflect the health of their business.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              We built Elmo Loans as a direct lender. That means when you apply,
              you're working directly with the people reviewing your application
              and making the lending decision—not a broker sending your
              information to a network of unknown third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
