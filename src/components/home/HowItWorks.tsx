import Link from "next/link";
import { ArrowRight, CheckCircle2, CreditCard, FileText } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Apply Online",
    description:
      "Tell us about your business and how much funding you need. Our secure online application takes about 5 minutes to complete.",
  },
  {
    number: "02",
    icon: CheckCircle2,
    title: "Get a Fast Decision",
    description:
      "Our underwriting team reviews your application directly. No brokers. No unnecessary delays. Just a quick decision.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Get Funded",
    description:
      "Once approved, funds are deposited directly into your business bank account—typically within 24 to 72 hours.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="container-x">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl ">
            Three Steps
            <span className="block bg-gradient-to-r from-emerald-600 to-primary bg-clip-text text-transparent">
              to Funding
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Applying is simple. Our streamlined process helps Canadian business
            owners move from application to funding quickly.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Desktop Connecting Line */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-slate-200 lg:block" />

          <div className="grid gap-10 lg:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Number */}
                  <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-100">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/apply"
            className="btn-primary inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-primary/90"
          >
            Start Your Application
            <ArrowRight className="h-5 w-5" />
          </Link>

          <p className="mt-4 text-sm text-slate-500">
            No impact to your credit score to apply.
          </p>
        </div>
      </div>
    </section>
  );
}
