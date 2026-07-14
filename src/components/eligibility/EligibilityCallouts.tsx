"use client";

import { CreditCard, Rocket } from "lucide-react";

export default function EligibilityCallouts() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-x max-w-5xl space-y-8">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
          <div className="flex gap-5">
            <div className="hidden md:flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <CreditCard className="h-7 w-7" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                What About My Credit?
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Your credit score is one factor among several—it isn't the only
                thing we consider. We also look at your business's current
                performance, revenue, and cash flow, so a lower credit score
                doesn't automatically mean you won't qualify.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8">
          <div className="flex gap-5">
            <div className="hidden md:flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Rocket className="h-7 w-7" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                What If I'm a Startup?
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                If your business has been operating for less than three months,
                we may still be able to help depending on your industry and
                financial profile. The quickest way to find out is to submit an
                application and let our team review your situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
