"use client";

import Link from "next/link";
import { Loader2, SendHorizonal } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { formattedNumber } from "../form/StepContactIdentity";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.fullName.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

    if (!form.email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!form.phone.trim()) {
      toast.error("Please enter your phone number.");
      return;
    }

    if (!form.message.trim()) {
      toast.error("Please enter your message.");
      return;
    }

    try {
      setLoading(true);

      // Example API call
      // await api.contact(form);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Your message has been sent successfully.");

      setSubmitted(true);

      setForm({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
            <SendHorizonal className="h-9 w-9 text-emerald-600" />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-navy-900">
            Message Sent
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
            Thank you for contacting Elmo Loans. A member of our team will
            review your message and get back to you as soon as possible.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="btn-primary mt-8"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-navy-900">
            Send Us a Message
          </h2>

          <p className="mt-3 text-slate-600">
            Complete the form below and our team will get back to you as soon as
            possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block font-medium text-navy-900">
              Full Name
            </label>

            <input
              type="text"
              value={form.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="John Smith"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium text-navy-900">
                Email Address
              </label>

              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="john@example.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-navy-900">
                Phone Number
              </label>

              <input
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  handleChange("phone", formattedNumber(e.target.value))
                }
                placeholder="(416) 555-0199"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium text-navy-900">
              Message
            </label>

            <textarea
              rows={6}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="How can we help you?"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-base font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <SendHorizonal className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </form>

        <div className="mt-10 rounded-2xl bg-slate-50 p-6 text-center">
          <h3 className="text-xl font-semibold text-navy-900">
            Looking to apply for funding instead?
          </h3>

          <p className="mt-2 text-slate-600">
            Start your application in just a few minutes with no impact to your
            credit score.
          </p>

          <Link
            href="/apply"
            className="mt-5 inline-flex items-center font-semibold text-primary transition hover:underline"
          >
            Start your application →
          </Link>
        </div>
      </div>
    </section>
  );
}
