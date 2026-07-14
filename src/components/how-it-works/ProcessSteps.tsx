"use client";

import { ClipboardList, SearchCheck, FileCheck, Wallet } from "lucide-react";

import AnswerCallout from "./AnswerCallout";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Apply Online in Minutes",
    description:
      "Fill out a short online application with basic details about your business — no lengthy paperwork up front. We'll ask about your business, how much funding you're looking for, and what it's for. This step typically takes 5 to 7 minutes.",

    question: "Does applying affect my credit score?",

    answer:
      "Checking your eligibility with Elmo Loans does not require a hard credit check. If you decide to proceed with a formal offer, we'll clearly let you know before anything occurs that could affect your credit score.",
  },

  {
    number: "02",
    icon: SearchCheck,
    title: "We Review Your Application",
    description:
      "Our underwriting team reviews your application directly—we don't send your information to multiple lenders. We may request supporting documents such as bank statements or proof of business registration if needed.",

    question: "Why does funding take between 24 and 72 hours?",

    answer:
      "Applications with complete information are usually processed fastest. If additional documents or verification are required, funding may take closer to 72 hours.",
  },

  {
    number: "03",
    icon: FileCheck,
    title: "Review Your Offer",
    description:
      "If approved, you'll receive a clear offer showing your approved amount, repayment term, and the full cost of borrowing before you accept. No hidden fees or surprise charges.",

    question: "",

    answer: "",
  },

  {
    number: "04",
    icon: Wallet,
    title: "Get Funded",
    description:
      "After you accept your offer, funds are sent directly to your business bank account, typically within 24 to 72 hours of final approval.",

    question: "",

    answer: "",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="container-x max-w-5xl">
        <div className="space-y-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex items-start gap-6">
                <div className="hidden md:flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
                  <step.icon className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Step {step.number}
                  </span>

                  <h2 className="mt-2 text-3xl font-bold text-navy-900">
                    {step.title}
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {step.description}
                  </p>

                  {step.question && (
                    <AnswerCallout
                      question={step.question}
                      answer={step.answer}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
