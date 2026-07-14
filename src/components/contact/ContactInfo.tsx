"use client";

import { Clock3, Mail, MapPin, Phone, TriangleAlert } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactInfo() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container-x">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
            {/* Contact Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm h-fit">
              <h2 className="text-2xl font-bold text-navy-900">
                Contact Information
              </h2>

              <p className="mt-3 text-slate-600">
                Have questions before applying? Reach out to our team using any
                of the contact methods below.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-500">Phone</p>

                    <a
                      href="tel:+14165550199"
                      className="mt-1 block text-lg font-semibold text-navy-900 hover:text-primary"
                    >
                      (416) 555-0199
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-500">Email</p>

                    <a
                      href="mailto:hello@elmoloans.ca"
                      className="mt-1 block text-lg font-semibold text-navy-900 hover:text-primary"
                    >
                      hello@elmoloans.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Address
                    </p>

                    <p className="mt-1 font-semibold text-navy-900">
                      100 King Street West
                      <br />
                      Suite 500
                      <br />
                      Toronto, ON M5X 1A9
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                    <Clock3 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Business Hours
                    </p>

                    <p className="mt-1 font-semibold text-navy-900">
                      Monday – Friday
                    </p>

                    <p className="text-slate-600">9:00 AM – 6:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
