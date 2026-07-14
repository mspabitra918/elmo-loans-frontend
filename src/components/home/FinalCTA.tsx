import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-slate-50 py-12 md:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-navy-900 to-primary px-6 py-16 shadow-lift sm:px-12 sm:py-20">
          {/* Ambient brand gradients */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_85%_-10%,#10b98155,transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_50%_at_-5%_110%,#3b82f655,transparent_60%)]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
              Ready to See What You Qualify For?
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/80">
              Checking your offer takes a few minutes and won&apos;t affect your
              credit score.
            </p>

            <div className="mt-10 flex justify-center">
              <Link href="/apply" className="btn-primary px-8 py-4 text-base">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/70">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              No impact to your credit score
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
