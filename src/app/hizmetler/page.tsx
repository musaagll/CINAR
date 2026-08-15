import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Ankara Klima & Beyaz Eşya Servisi",
  description:
    "Ankara genelinde klima tamiri, klima bakımı, klima montajı, klima gaz dolumu ve beyaz eşya tamir, bakım, onarım hizmetleri. Çınar Klima & Beyaz Eşya Servisi.",
  alternates: { canonical: "https://cinarsogutmabeyazesya.com/hizmetler" },
};

const klimaServices = [
  {
    title: "Klima Tamiri",
    desc: "Klimalarda oluşan tüm arızaların profesyonel ekipmanlarla tespiti ve onarımı. Soğutma, ısıtma, devre ve mekanik arızalarda kapsamlı tamir hizmeti.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Klima Bakımı",
    desc: "Klimanızın ömrünü uzatmak ve enerji verimliliğini artırmak için filtre temizliği, gaz kontrolü ve kapsamlı bakım işlemleri.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Klima Montajı",
    desc: "Yeni klima cihazlarınızın profesyonel kurulumu. Duvar delinmesi, boru tesisatı ve çalışma testleri dahil tam montaj hizmeti.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22V12M3.27 6.96L12 12.01l8.73-5.05" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Klima Gaz Dolumu",
    desc: "Klima cihazınızın soğutma gazı seviyesinin kontrolü ve gerektiğinde profesyonel gaz dolumu. Verimli çalışma için gaz bakımı.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 3H5a2 2 0 00-2 2v3M21 3h-3a2 2 0 00-2 2v3M21 21h-3a2 2 0 01-2-2v-3M8 21H5a2 2 0 01-2-2v-3" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="#1d6aff" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Klima Servisi",
    desc: "Klima cihazlarınız için kapsamlı teknik servis desteği. Periyodik servis, arıza tespiti ve önleyici bakım hizmetleri.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="#1d6aff" strokeWidth="2" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const beyazEsyaServices = [
  {
    title: "Beyaz Eşya Tamiri",
    desc: "Buzdolabı, çamaşır makinesi, bulaşık makinesi, kurutma makinesi, fırın ve ocak arızalarının tespiti ve profesyonel onarımı.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Beyaz Eşya Bakımı",
    desc: "Beyaz eşyalarınızın ömrünü uzatmak ve verimli çalışmasını sağlamak için kapsamlı bakım ve temizlik hizmetleri.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Beyaz Eşya Onarımı",
    desc: "Mekanik ve elektronik arızaların giderilmesi, yedek parça temini ve uzun ömürlü onarım hizmetleri.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#1d6aff" strokeWidth="2" />
        <path d="M9 9h6M9 12h6M9 15h4" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const devices = [
  {
    label: "Buzdolabı",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="#1d6aff" strokeWidth="2" />
        <path d="M5 10h14M9 6v2M9 14v4" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Çamaşır Makinesi",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="2" width="18" height="20" rx="2" stroke="#1d6aff" strokeWidth="2" />
        <circle cx="12" cy="13" r="4" stroke="#1d6aff" strokeWidth="2" />
        <path d="M7 6h2M17 6h-2" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Bulaşık Makinesi",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="2" width="18" height="20" rx="2" stroke="#1d6aff" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="#1d6aff" strokeWidth="2" />
        <circle cx="12" cy="12" r="1.5" fill="#1d6aff" />
        <path d="M7 7h10" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Kurutma Makinesi",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="2" width="18" height="20" rx="2" stroke="#1d6aff" strokeWidth="2" />
        <circle cx="12" cy="13" r="4" stroke="#1d6aff" strokeWidth="2" />
        <path d="M8 6h1M12 6h1" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Fırın",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#1d6aff" strokeWidth="2" />
        <rect x="6" y="8" width="12" height="8" rx="1" stroke="#1d6aff" strokeWidth="1.5" />
        <circle cx="7" cy="6" r="1" fill="#1d6aff" />
        <circle cx="12" cy="6" r="1" fill="#1d6aff" />
        <circle cx="17" cy="6" r="1" fill="#1d6aff" />
      </svg>
    ),
  },
  {
    label: "Ocak",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="14" rx="2" stroke="#1d6aff" strokeWidth="2" />
        <circle cx="8" cy="11" r="2" stroke="#1d6aff" strokeWidth="1.5" />
        <circle cx="16" cy="11" r="2" stroke="#1d6aff" strokeWidth="1.5" />
        <circle cx="8" cy="17" r="2" stroke="#1d6aff" strokeWidth="1.5" />
        <circle cx="16" cy="17" r="2" stroke="#1d6aff" strokeWidth="1.5" />
        <path d="M3 4h18" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function HizmetlerPage() {
  return (
    <>
      {/* CINARPANO — yüksek kalite, yanlarda küçük boşluk */}
      <div className="w-full mt-20 lg:mt-[80px] px-3 sm:px-4 lg:px-6 pt-3">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/CINARPANO.png"
            alt="Çınar Klima & Beyaz Eşya Servisi"
            width={1920}
            height={800}
            className="w-full h-auto"
            priority
            quality={100}
            unoptimized
          />
        </div>
      </div>

      {/* Sayfa başlığı — görselin hemen altında */}
      <div className="bg-[#f7f8fa] py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#1d6aff] uppercase tracking-widest mb-3">
            Hizmetlerimiz
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f1f3d] mb-4 tracking-tight">
            Hizmetlerimiz
          </h1>
          <p className="text-lg text-[#5a6a85] max-w-2xl leading-relaxed">
            Klima ve beyaz eşyalarınız için profesyonel tamir, bakım, montaj ve
            servis çözümleri.
          </p>
        </div>
      </div>

      {/* Klima Services */}
      <section
        className="bg-white py-16 lg:py-20"
        aria-labelledby="klima-services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ background: "#e8f0fe" }}
              aria-hidden="true"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h2
              id="klima-services-heading"
              className="text-2xl font-extrabold text-[#0f1f3d] tracking-tight"
            >
              Klima Servisleri
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {klimaServices.map((s) => (
              <article
                key={s.title}
                className="bg-[#f7f8fa] rounded-2xl p-6 border border-[#eef0f4] hover:border-[#1d6aff]/25 hover:bg-white hover:shadow-[0_4px_24px_0_rgba(29,106,255,0.07)] transition-all duration-200 flex flex-col"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-[#dde3ec] mb-5">
                  {s.icon}
                </div>
                <h3 className="text-base font-bold text-[#0f1f3d] mb-2">{s.title}</h3>
                <p className="text-sm text-[#5a6a85] leading-relaxed flex-1">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Beyaz Eşya Services */}
      <section
        className="bg-[#f7f8fa] py-16 lg:py-20"
        aria-labelledby="beyaz-esya-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ background: "#e8f0fe" }}
              aria-hidden="true"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#1d6aff" strokeWidth="2" />
                <path d="M9 9h6M9 12h6M9 15h4" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h2
              id="beyaz-esya-heading"
              className="text-2xl font-extrabold text-[#0f1f3d] tracking-tight"
            >
              Beyaz Eşya Servisleri
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {beyazEsyaServices.map((s) => (
              <article
                key={s.title}
                className="bg-white rounded-2xl p-6 border border-[#eef0f4] hover:border-[#1d6aff]/25 hover:shadow-[0_4px_24px_0_rgba(29,106,255,0.07)] transition-all duration-200 flex flex-col"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#e8f0fe] mb-5">
                  {s.icon}
                </div>
                <h3 className="text-base font-bold text-[#0f1f3d] mb-2">{s.title}</h3>
                <p className="text-sm text-[#5a6a85] leading-relaxed flex-1">{s.desc}</p>
              </article>
            ))}
          </div>

          {/* Device categories */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#eef0f4]">
            <h3 className="text-base font-bold text-[#0f1f3d] mb-5">
              Hizmet Verdiğimiz Cihazlar
            </h3>
            <div
              className="flex flex-wrap gap-3"
              role="list"
              aria-label="Hizmet verilen beyaz eşya cihazları"
            >
              {devices.map((d) => (
                <div
                  key={d.label}
                  role="listitem"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f7f8fa] border border-[#eef0f4] text-sm font-medium text-[#0f1f3d]"
                >
                  {d.icon}
                  {d.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
