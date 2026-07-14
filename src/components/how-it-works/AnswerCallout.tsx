"use client";

import { CircleHelp } from "lucide-react";

interface Props {
  question: string;
  answer: string;
}

export default function AnswerCallout({ question, answer }: Props) {
  return (
    <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <div className="flex gap-4">
        <CircleHelp className="mt-1 h-6 w-6 text-emerald-600" />

        <div>
          <h4 className="font-semibold text-navy-900">{question}</h4>

          <p className="mt-2 leading-7 text-slate-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}
