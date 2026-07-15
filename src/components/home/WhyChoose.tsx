import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Building2,
    title: "We're the Lender, Not a Broker",
    description:
      "Your application goes directly to our underwriting team. We don't shop your information around to multiple lenders or companies you've never heard of.",
  },
  {
    icon: Zap,
    title: "Fast Decisions & Funding",
    description:
      "Business moves quickly, and so do we. Most applications receive a fast decision, with approved funding typically arriving within 24 to 72 hours.",
  },
  {
    icon: TrendingUp,
    title: "More Than Your Credit Score",
    description:
      "Credit challenges don't end the conversation. We look at how your business is performing today—not just a credit score from years ago.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Funding That Fits Your Business",
    description:
      "Whether you need funding for payroll, inventory, equipment, expansion, or seasonal cash flow, we welcome businesses across a wide range of industries.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-50 py-12 md:py-24">
      <div className="container-x">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            WHY BUSINESS OWNERS CHOOSE ELMO LOANS
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
            Built for Business Owners
            <span className="block bg-gradient-to-r from-emerald-600 to-primary bg-clip-text text-transparent md:pb-2">
              Who Need Funding Now
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Getting approved for business funding shouldn&apos;t take weeks, and
            it shouldn&apos;t depend on having a perfect credit score. Elmo
            Loans was built to make the process faster, simpler, and focused on
            your business—not unnecessary barriers.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-100">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-20 rounded-3xl bg-primary px-8 py-12 text-center text-white">
          <h3 className="text-3xl font-bold">
            Ready to See What You Qualify For?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Checking your offer only takes a few minutes and won&apos;t impact
            your credit score.
          </p>

          <Link
            href="/apply"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-primary transition hover:scale-105"
          >
            Check Your Offer
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
