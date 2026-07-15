import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LegalCTA() {
  return (
    <section className="border-t bg-slate-50">
      <div className="container-x py-16 text-center">
        <h2 className="text-3xl font-bold text-navy-900">Ready to Apply?</h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Checking your offer only takes a few minutes and won&apos;t affect
          your credit score.
        </p>

        <Link
          href="/apply"
          className="btn-primary mx-auto mt-8 inline-flex items-center gap-2"
        >
          Check Your Offer
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
