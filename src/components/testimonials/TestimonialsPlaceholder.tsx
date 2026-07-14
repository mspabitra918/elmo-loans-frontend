"use client";

import { AlertCircle, ExternalLink } from "lucide-react";

export default function TestimonialsPlaceholder() {
  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="container-x max-w-5xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
            <AlertCircle className="h-8 w-8 text-amber-600" />
          </div>

          <h2 className="mt-6 text-center text-3xl font-bold text-navy-900">
            Reviews Coming Soon
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center leading-8 text-slate-600">
            Elmo Loans is preparing to launch. Once we've helped our first
            customers, this page will display verified reviews directly from our
            Google Business Profile and/or Trustpilot.
          </p>

          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="font-semibold text-amber-900">
              Why don't we show testimonials yet?
            </h3>

            <p className="mt-3 leading-7 text-amber-800">
              We believe customer reviews should always be genuine and
              independently verifiable. Rather than publishing placeholder or
              fictional testimonials, we'll display authentic feedback after our
              first verified customer reviews are available.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h4 className="font-semibold">Google Reviews</h4>

              <p className="mt-3 text-slate-600">
                This section will display our verified Google Business reviews.
              </p>

              <button
                disabled
                className="mt-5 inline-flex items-center rounded-lg bg-slate-200 px-4 py-2 text-slate-500"
              >
                Coming Soon
              </button>
            </div>

            <div className="rounded-2xl border p-6">
              <h4 className="font-semibold">Trustpilot Reviews</h4>

              <p className="mt-3 text-slate-600">
                Verified Trustpilot reviews will appear here once available.
              </p>

              <button
                disabled
                className="mt-5 inline-flex items-center rounded-lg bg-slate-200 px-4 py-2 text-slate-500"
              >
                Coming Soon
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            Aggregate ratings and Review schema will be added once genuine,
            publicly visible reviews are available.
          </p>
        </div>
      </div>
    </section>
  );
}
