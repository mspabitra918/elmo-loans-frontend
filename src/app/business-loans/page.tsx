"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";
import { LOCATION_DATA } from "@/src/lib/locations";
import { createMetadata } from "@/src/lib/seo";
import LocationCTA from "@/src/components/location/LocationCTA";

// export const metadata: Metadata = createMetadata(
//   "Business Loans Across Canada | Elmo Loans",
//   "Fast business funding for Canadian business owners. Apply online and get funded in as little as 24 to 72 hours, subject to approval. Explore business loans by province.",
//   "/business-loans",
// );

// export default function BusinessLoansPage() {
//   // const provinces = Object.values(LOCATION_DATA);

//   // return (
//   //   <>
//   //     <section className="relative overflow-hidden bg-black">
//   //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_35%)]" />
//   //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_40%)]" />

//   //       <div className="container-x relative py-20 text-center">
//   //         <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
//   //           Canadian Business Funding
//   //         </span>

//   //         <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
//   //           Business Loans Across Canada
//   //         </h1>

//   //         <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
//   //           Elmo Loans helps business owners access fast, straightforward
//   //           funding. Apply online and receive funding in as little as 24 to 72
//   //           hours, subject to approval. Select your province to learn more.
//   //         </p>
//   //       </div>
//   //     </section>

//   //     <section className="bg-white py-20">
//   //       <div className="container-x">
//   //         <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
//   //           {provinces.map((province) => (
//   //             <Link
//   //               key={province.slug}
//   //               href={`/business-loans/${province.slug}`}
//   //               className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
//   //             >
//   //               <div className="flex items-center gap-3">
//   //                 <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
//   //                   <MapPin className="h-5 w-5" />
//   //                 </span>

//   //                 <div>
//   //                   <h2 className="font-semibold text-navy-900">
//   //                     {province.name}
//   //                   </h2>

//   //                   <p className="mt-0.5 text-sm text-slate-500">
//   //                     {province.cities.length} cities served
//   //                   </p>
//   //                 </div>
//   //               </div>

//   //               <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-primary" />
//   //             </Link>
//   //           ))}
//   //         </div>
//   //       </div>
//   //     </section>

//   //     <LocationCTA />
//   //   </>
//   // );
// }

export default function BusinessLoansPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/business-loans/ontario");
  }, [router]);

  return null;
}
