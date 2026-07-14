"use client";

export default function LendingDisclosuresHero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,.15),transparent_40%)]" />

      <div className="container-x relative py-12 md:py-20 text-center">
        <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
          Lending Disclosures
        </span>

        <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          How We Calculate and Disclose Your Cost of Borrowing
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Clear, upfront pricing — no fine print surprises.
        </p>
      </div>
    </section>
  );
}
