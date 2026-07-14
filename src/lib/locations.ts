export interface FAQItem {
  question: string;
  answer: string;
}

export interface CityContent {
  slug: string;
  name: string;
  intro: string;
  faq?: FAQItem[];
}

export interface ProvinceContent {
  slug: string;
  name: string;
  description: string;
  faq?: FAQItem[];
  cities: CityContent[];
}

export const LOCATION_DATA: Record<string, ProvinceContent> = {
  ontario: {
    slug: "ontario",
    name: "Ontario",
    description:
      "Elmo Loans is headquartered right here in Ontario, where we began helping Canadian business owners access fast, straightforward funding. Whether you're located in Toronto, Ottawa, or a smaller Ontario community, you can apply online and receive funding in as little as 24 to 72 hours, subject to approval.",
    cities: [
      {
        slug: "toronto",
        name: "Toronto",
        intro:
          "Toronto is home to one of Canada's most diverse business communities, from restaurants and retail to logistics, professional services, and technology companies. Elmo Loans helps businesses across Toronto access funding with the same fast approval process available across Ontario.",
      },
      {
        slug: "ottawa",
        name: "Ottawa",
        intro:
          "Ottawa has a strong mix of government contractors, technology companies, and local small businesses. Elmo Loans provides business funding throughout the city.",
      },
      {
        slug: "mississauga",
        name: "Mississauga",
        intro:
          "Mississauga is one of Canada's largest business hubs, with major logistics, manufacturing, and professional service companies operating throughout the city. Elmo Loans funds eligible Mississauga businesses with the same fast turnaround offered across Ontario.",
      },
      {
        slug: "hamilton",
        name: "Hamilton",
        intro:
          "Hamilton continues to grow through manufacturing, healthcare, construction, and small business entrepreneurship. Elmo Loans supports eligible businesses throughout the area.",
      },
    ],
  },

  alberta: {
    slug: "alberta",
    name: "Alberta",
    description:
      "Alberta's economy is powered by energy, construction, transportation, and a growing technology sector. Elmo Loans provides fast business funding to eligible businesses across the province, with the same 24 to 72 hour turnaround, subject to approval.",
    cities: [
      {
        slug: "calgary",
        name: "Calgary",
        intro:
          "Calgary combines a strong energy sector with one of the most active entrepreneurial and startup communities in the country. Elmo Loans funds Calgary business owners across every industry, from established operators to fast-growing new ventures.",
      },
      {
        slug: "edmonton",
        name: "Edmonton",
        intro:
          "As Alberta's capital, Edmonton anchors the province's public sector, healthcare, manufacturing, and logistics industries. Elmo Loans provides business funding to eligible Edmonton businesses throughout the city.",
      },
      {
        slug: "red-deer",
        name: "Red Deer",
        intro:
          "Sitting between Calgary and Edmonton, Red Deer is a central hub for agriculture, trades, and regional retail. Elmo Loans helps Red Deer business owners access funding without the delays of traditional lenders.",
      },
      {
        slug: "lethbridge",
        name: "Lethbridge",
        intro:
          "Lethbridge is a leading centre for agriculture, agri-food processing, and distribution in southern Alberta. Elmo Loans funds eligible Lethbridge businesses with a fast, fully online application.",
      },
    ],
  },
};

/** Default local FAQ used when a city does not define its own. */
export function cityFaq(city: CityContent, province: ProvinceContent): FAQItem[] {
  return (
    city.faq ?? [
      {
        question: `Do you fund businesses in ${city.name}?`,
        answer:
          "Yes. We provide business funding to eligible businesses throughout the city.",
      },
      {
        question: `Is Elmo Loans based in ${city.name}?`,
        answer: `Elmo Loans is headquartered in Ontario and serves businesses across ${province.name}, including ${city.name}.`,
      },
    ]
  );
}

/** Default province FAQ used when a province does not define its own. */
export function provinceFaq(province: ProvinceContent): FAQItem[] {
  return (
    province.faq ?? [
      {
        question: `Do you offer business loans in ${province.name}?`,
        answer: `Yes. We provide business funding to eligible businesses across ${province.name}.`,
      },
      {
        question: `Is funding slower in ${province.name}?`,
        answer:
          "No. Approved businesses typically receive funding within 24 to 72 hours.",
      },
    ]
  );
}

export function getProvince(slug: string): ProvinceContent | undefined {
  return LOCATION_DATA[slug];
}

export function getCity(
  provinceSlug: string,
  citySlug: string
): { province: ProvinceContent; city: CityContent } | undefined {
  const province = LOCATION_DATA[provinceSlug];
  if (!province) return undefined;

  const city = province.cities.find((c) => c.slug === citySlug);
  if (!city) return undefined;

  return { province, city };
}

/** Params for statically generating every province page. */
export function allProvinceParams(): { province: string }[] {
  return Object.values(LOCATION_DATA).map((p) => ({ province: p.slug }));
}

/** Params for statically generating every city page. */
export function allCityParams(): { province: string; city: string }[] {
  return Object.values(LOCATION_DATA).flatMap((p) =>
    p.cities.map((c) => ({ province: p.slug, city: c.slug }))
  );
}
