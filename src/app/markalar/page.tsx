import type { Metadata } from "next";
import { brands } from "@/lib/brands";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Markalar | Ankara Klima & Beyaz Eşya Servisi",
  description:
    "Arçelik, Beko, Bosch, Samsung, LG, Vestel, Daikin, Mitsubishi ve daha pek çok marka için Ankara genelinde klima ve beyaz eşya servis hizmeti. Çınar Klima.",
  alternates: { canonical: "https://cinarklima.com/markalar" },
};

const categories = ["Tümü", "Beyaz Eşya", "Klima", "Beyaz Eşya & Klima", "Klima & Isıtma"];

export default function MarkalarsPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#f7f8fa] pt-28 pb-14 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#1d6aff] uppercase tracking-widest mb-3">
            Hizmet Verdiğimiz Markalar
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f1f3d] mb-5 tracking-tight">
            Markalar
          </h1>
          <p className="text-lg text-[#5a6a85] max-w-2xl leading-relaxed">
            Türkiye&apos;nin ve dünyanın önde gelen klima ile beyaz eşya markalarına
            Ankara genelinde profesyonel servis hizmeti sunuyoruz.
          </p>
        </div>
      </div>

      {/* Brand Grid */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="brands-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="brands-heading" className="sr-only">Hizmet verdiğimiz markalar listesi</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {brands.map((brand) => (
              <article
                key={brand.name}
                className="group bg-[#f7f8fa] rounded-2xl p-6 border border-[#eef0f4] hover:bg-white hover:border-[#dde3ec] hover:shadow-[0_4px_24px_0_rgba(15,31,61,0.07)] transition-all duration-200"
              >
                {/* Marka adı */}
                <div className="mb-4">
                  <span
                    className="text-3xl font-extrabold tracking-tight leading-none"
                    style={{ color: brand.color, fontFamily: "Inter, Arial, sans-serif" }}
                  >
                    {brand.name}
                  </span>
                </div>

                {/* Kategori ve ülke */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#e8f0fe] text-[#1d6aff]">
                    {brand.category}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white border border-[#dde3ec] text-[#5a6a85]">
                    {brand.country}
                  </span>
                </div>

                {/* Açıklama */}
                <p className="text-sm text-[#5a6a85] leading-relaxed">{brand.desc}</p>

                {/* Servis bilgisi */}
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#059669]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 4L12 14.01l-3-3" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Ankara Geneli Servis Veriyoruz
                </div>
              </article>
            ))}
          </div>

          {/* Alt bilgi */}
          <div className="mt-12 p-6 lg:p-8 rounded-2xl bg-[#f7f8fa] border border-[#eef0f4]">
            <p className="text-sm text-[#5a6a85] leading-relaxed text-center max-w-2xl mx-auto">
              Listede yer almayan marka ve model için de servis hizmeti sunuyoruz.
              Cihazınızın markasından bağımsız olarak{" "}
              <a
                href="tel:05075866063"
                className="text-[#1d6aff] font-semibold hover:underline"
              >
                0507 586 60 63
              </a>{" "}
              numaralı hattımızı arayabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
