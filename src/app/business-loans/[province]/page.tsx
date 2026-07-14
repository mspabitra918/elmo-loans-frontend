import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  allProvinceParams,
  getProvince,
  provinceFaq,
} from "@/src/lib/locations";
import { createMetadata } from "@/src/lib/seo";
import ProvinceHero from "@/src/components/province/ProvinceHero";
import CityLinks from "@/src/components/location/CityLinks";
import LocalFAQ from "@/src/components/location/LocalFAQ";
import LocationCTA from "@/src/components/location/LocationCTA";

type Params = { province: string };

export function generateStaticParams() {
  return allProvinceParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { province } = await params;
  const data = getProvince(province);

  if (!data) return {};

  return createMetadata(
    `Business Loans in ${data.name} | Elmo Loans`,
    data.description,
    `/business-loans/${data.slug}`
  );
}

export default async function ProvincePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { province } = await params;
  const data = getProvince(province);

  if (!data) notFound();

  return (
    <>
      <ProvinceHero province={data.name} description={data.description} />

      <CityLinks
        province={data.slug}
        provinceName={data.name}
        cities={data.cities.map((c) => ({ name: c.name, slug: c.slug }))}
      />

      <LocalFAQ title={data.name} items={provinceFaq(data)} />

      <LocationCTA />
    </>
  );
}
