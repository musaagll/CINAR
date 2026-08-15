import { brands } from "@/lib/brands";

function BrandItem({ name, color, i }: { name: string; color: string; i: number }) {
  return (
    <div
      key={`${name}-${i}`}
      className="flex items-center flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-200 px-2"
      title={name}
    >
      <span
        className="text-2xl font-extrabold tracking-tight whitespace-nowrap"
        style={{ color, fontFamily: "Inter, Arial, sans-serif" }}
      >
        {name}
      </span>
    </div>
  );
}

export default function BrandScroller() {
  const repeated = [...brands, ...brands, ...brands];

  return (
    <section
      className="bg-white border-y border-[#eef0f4] py-7 overflow-hidden"
      aria-label="Hizmet verdiğimiz markalar"
    >
      <p className="text-center text-xs font-semibold text-[#8898aa] uppercase tracking-widest mb-6">
        Hizmet Verdiğimiz Markalar
      </p>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
          aria-hidden="true"
        />

        <div
          className="flex items-center gap-12 brand-scroll"
          style={{ width: "max-content" }}
          aria-hidden="true"
        >
          {repeated.map((brand, i) => (
            <BrandItem key={`${brand.name}-${i}`} name={brand.name} color={brand.color} i={i} />
          ))}
        </div>
      </div>

      <ul className="sr-only">
        {brands.map((b) => (
          <li key={b.name}>{b.name}</li>
        ))}
      </ul>
    </section>
  );
}
