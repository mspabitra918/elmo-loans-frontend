"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MIN = 5000;
const MAX = 250000;

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(value);

export default function LoanAmount() {
  const [amount, setAmount] = useState(75000);

  const low = Math.round(amount * 0.95);
  const high = Math.round(amount * 1.05);
  const progress = ((amount - MIN) / (MAX - MIN)) * 100;

  return (
    <section className="bg-slate-50 py-12 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            FUNDING AMOUNTS
          </span>

          {/* <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-navy-900 lg:text-5xl"></h2> */}

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl ">
            How Much Can
            <span className="block bg-gradient-to-r from-emerald-600 to-primary bg-clip-text text-transparent">
              You Borrow?
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-navy-700">
            Elmo Loans provides business funding from{" "}
            <span className="font-semibold text-navy-900">$5,000</span> up to{" "}
            <span className="font-semibold text-navy-900">$250,000</span>, based
            on your business&apos;s revenue and financial profile. Whatever
            stage your business is at, we&apos;ll work with you to find an
            amount that fits.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-navy-100 bg-white p-8 shadow-lift sm:p-10">
          <div className="text-center">
            <p className="text-sm font-medium text-navy-700">
              Requested Funding
            </p>

            <h3 className="mt-3 bg-linear-to-r from-emerald-600 to-primary bg-clip-text text-5xl font-black text-transparent">
              {formatCurrency(amount)}
            </h3>
          </div>

          <div className="mt-10">
            <input
              type="range"
              min={MIN}
              max={MAX}
              step={5000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              aria-label="Requested funding amount"
              className="h-2.5 w-full cursor-pointer appearance-none rounded-full accent-emerald-600"
              style={{
                background: `linear-gradient(to right, var(--color-emerald-600, #059669) 0%, var(--color-emerald-600, #059669) ${progress}%, var(--color-navy-100) ${progress}%, var(--color-navy-100) 100%)`,
              }}
            />

            <div className="mt-3 flex justify-between text-sm font-medium text-navy-700">
              <span>$5K</span>
              <span>$250K</span>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Estimated Funding Range
            </p>

            <h4 className="mt-3 text-3xl font-bold text-navy-900">
              {formatCurrency(low)} – {formatCurrency(high)}
            </h4>
          </div>

          <div className="mt-10 text-center">
            <Link href="/apply" className="btn-primary px-8 py-4 text-base">
              Check Your Offer
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
