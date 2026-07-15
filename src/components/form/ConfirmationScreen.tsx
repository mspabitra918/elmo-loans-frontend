import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface ConfirmationScreenProps {
  firstName: string;
  reviewTime?: string;
}

export function ConfirmationScreen({
  firstName,
  reviewTime = "24 hours",
}: ConfirmationScreenProps) {
  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        You&apos;re All Set!
      </h1>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Thanks for applying,
        <span className="font-semibold text-slate-900"> {firstName}</span>.
        <br />A funding specialist will review your application and reach out
        within <span className="font-semibold">{reviewTime}</span>. Please keep
        an eye on your email and phone for updates.
      </p>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Have a question in the meantime?
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          Our team is happy to help if you need assistance or have questions
          about your application.
        </p>

        <Link
          href="/contact"
          className="mt-5 inline-flex items-center font-semibold text-emerald-600 transition hover:text-emerald-700 hover:underline"
        >
          Contact us →
        </Link>
      </div>
    </div>
  );
}
