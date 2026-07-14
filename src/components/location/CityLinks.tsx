"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

interface CityLink {
  name: string;
  slug: string;
}

interface CityLinksProps {
  /** Province slug, e.g. "ontario". */
  province: string;
  /** Human-readable province name for the heading, e.g. "Ontario". */
  provinceName?: string;
  cities: CityLink[];
}

export default function CityLinks({
  province,
  provinceName,
  cities,
}: CityLinksProps) {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-12">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <MapPin className="h-4 w-4" />
              Explore by City
            </span>

            <h2 className="mt-5 text-3xl font-bold text-navy-900 md:text-4xl">
              Business Funding Across {provinceName ?? province}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Select your city to learn more about business funding in your
              local area.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                // href={`/business-loans/${province}/${city.slug}`}
                href="#"
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <div>
                  <h3 className="font-semibold text-navy-900">{city.name}</h3>

                  <p className="mt-1 text-sm text-slate-500">Business Loans</p>
                </div>

                <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
