interface CityHeroProps {
  city: string;
  province: string;
  intro: string;
}

export default function CityHero({ city, province, intro }: CityHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_40%)]" />

      <div className="container-x relative py-12 md:py-20 text-center">
        <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
          Business Funding
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Business Loans in {city}, {province}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {intro}
        </p>
      </div>
    </section>
  );
}
