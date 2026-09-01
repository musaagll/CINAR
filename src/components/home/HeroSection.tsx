import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[calc(100vh-80px)] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
      aria-label="Hero bölümü"
    >
      {/* Arka plan: logo watermark */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/CINARLOGO.png"
          alt=""
          fill
          className="object-cover object-center select-none"
          priority
          quality={90}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(247,248,250,0.97) 0%, rgba(247,248,250,0.93) 45%, rgba(247,248,250,0.55) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 75% 50%, rgba(29,106,255,0.06) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* İçerik */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e8f0fe] rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1d6aff]" aria-hidden="true" />
            <span className="text-xs font-semibold text-[#1d6aff] uppercase tracking-wider">
              Ankara Geneli Servis
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0f1f3d] leading-[1.1] tracking-tight mb-6">
            Ankara&apos;da Klima ve Beyaz Eşya Servisinde{" "}
            <span className="text-[#1d6aff]">Güvenilir Çözüm</span>
          </h1>

          <p className="text-lg text-[#5a6a85] leading-relaxed mb-3">
            Klima ve beyaz eşyalarınız için profesyonel tamir, bakım, montaj,
            gaz dolumu ve teknik servis hizmeti.
          </p>
          <p className="text-sm text-[#8898aa] mb-8">
            Ankara&apos;nın tüm ilçelerine servis hizmeti.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a
              href="tel:05075866063"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-[#0f1f3d] bg-white border border-[#dde3ec] transition-all duration-150 hover:border-[#1d6aff] hover:text-[#1d6aff] active:scale-95 shadow-sm"
              aria-label="Hemen ara: 0507 586 60 63"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              0507 586 60 63
            </a>
            <a
              href="tel:05369322422"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-[#0f1f3d] bg-white border border-[#dde3ec] transition-all duration-150 hover:border-[#1d6aff] hover:text-[#1d6aff] active:scale-95 shadow-sm"
              aria-label="Hemen ara: 0536 932 24 22"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              0536 932 24 22
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
