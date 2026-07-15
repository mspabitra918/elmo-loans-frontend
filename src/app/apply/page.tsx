"use client";
import { useState } from "react";
import type { Metadata } from "next";
import { ApplyForm } from "@/src/components/form/ApplyForm";
import { ConfirmationScreen } from "@/src/components/form/ConfirmationScreen";
import { JsonLd } from "@/src/layout/JsonLd";
import { breadcrumbSchema } from "../../lib/schema";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Apply Now", path: "/apply" },
        ])}
      />
      <section className="container-x py-12 sm:py-16">
        {submitted ? (
          <ConfirmationScreen
            firstName={firstName}
            reviewTime="24 - 72 hours "
          />
        ) : (
          <>
            <div className="mb-10 max-w-2xl">
              <h1 className="text-3xl font-bold sm:text-4xl">
                Apply for your loan
              </h1>

              <p className="mt-3 text-lg text-navy-600">
                It takes about five minutes. There are no upfront fees and
                checking your amount won’t cost you anything.
              </p>
            </div>

            <ApplyForm
              onSuccess={(name) => {
                setFirstName(name);
                setSubmitted(true);
              }}
            />
          </>
        )}
      </section>
    </>
  );
}
