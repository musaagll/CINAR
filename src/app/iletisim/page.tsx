import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Ankara Klima & Beyaz Eşya Servisi",
  description:
    "Ankara klima ve beyaz eşya servisi için bize ulaşın. Telefon: 0507 586 60 63. WhatsApp ile hızlı iletişim. Ankara'nın tüm ilçelerine servis.",
  alternates: { canonical: "https://cinarklima.com/iletisim" },
};

export default function IletisimPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#f7f8fa] pt-28 pb-14 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#1d6aff] uppercase tracking-widest mb-3">
            İletişim
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f1f3d] mb-5 tracking-tight">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-lg text-[#5a6a85] max-w-xl leading-relaxed">
            Klima veya beyaz eşyanız için servis desteğine mi ihtiyacınız var?
            Bizi arayın veya WhatsApp&apos;tan yazın.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <section
        className="bg-white py-14 lg:py-20"
        aria-label="İletişim bilgileri"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">

            {/* Telefon */}
            <a
              href="tel:05075866063"
              className="group flex flex-col gap-4 p-7 rounded-2xl bg-[#f7f8fa] border border-[#eef0f4] hover:border-[#1d6aff]/30 hover:bg-white hover:shadow-[0_4px_24px_0_rgba(29,106,255,0.08)] transition-all duration-200"
              aria-label="Telefon numarasını ara: 0507 586 60 63"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#e8f0fe]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                    stroke="#1d6aff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#8898aa] uppercase tracking-wider mb-1">
                  Telefon
                </p>
                <p className="text-2xl font-extrabold text-[#0f1f3d] tracking-tight mb-1">
                  0507 586 60 63
                </p>
                <p className="text-sm text-[#5a6a85]">Tıklayarak hemen arayın</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1d6aff] group-hover:gap-2.5 transition-all duration-150">
                Hemen Ara
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/905075866063"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 p-7 rounded-2xl bg-[#f7f8fa] border border-[#eef0f4] hover:border-[#25D366]/40 hover:bg-white hover:shadow-[0_4px_24px_0_rgba(37,211,102,0.08)] transition-all duration-200"
              aria-label="WhatsApp üzerinden mesaj gönderin"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#e8f0fe]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#8898aa] uppercase tracking-wider mb-1">
                  WhatsApp
                </p>
                <p className="text-2xl font-extrabold text-[#0f1f3d] tracking-tight mb-1">
                  0507 586 60 63
                </p>
                <p className="text-sm text-[#5a6a85]">Mesaj gönderin, hızlıca yanıt alalım</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#25D366] group-hover:gap-2.5 transition-all duration-150">
                WhatsApp&apos;tan Yaz
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          {/* Hizmet bölgesi */}
          <div className="mt-8 flex items-center gap-3 max-w-2xl p-5 rounded-2xl bg-[#f7f8fa] border border-[#eef0f4]">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-[#dde3ec]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                  stroke="#1d6aff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="3" stroke="#1d6aff" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#8898aa] uppercase tracking-wider mb-0.5">
                Hizmet Bölgesi
              </p>
              <p className="text-sm font-semibold text-[#0f1f3d]">
                Ankara ve tüm ilçeleri
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
