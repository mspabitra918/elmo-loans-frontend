import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allCityParams, cityFaq, getCity } from "@/src/lib/locations";
import { createMetadata } from "@/src/lib/seo";
import CityHero from "@/src/components/location/CityHero";
import LocalFAQ from "@/src/components/location/LocalFAQ";
import LocationCTA from "@/src/components/location/LocationCTA";

type Params = { province: string; city: string };

export function generateStaticParams() {
  return allCityParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { province, city } = await params;
  const data = getCity(province, city);

  if (!data) return {};

  return createMetadata(
    `Business Loans in ${data.city.name}, ${data.province.name} | Elmo Loans`,
    data.city.intro,
    `/business-loans/${data.province.slug}/${data.city.slug}`
  );
}

export default async function CityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { province, city } = await params;
  const data = getCity(province, city);

  if (!data) notFound();

  return (
    <>
      <CityHero
        city={data.city.name}
        province={data.province.name}
        intro={data.city.intro}
      />

      <LocalFAQ
        title={data.city.name}
        items={cityFaq(data.city, data.province)}
      />

      <LocationCTA />
    </>
  );
}
