const steps = [
  {
    num: "01",
    title: "Bize Ulaşın",
    desc: "Telefon veya WhatsApp üzerinden servis talebinizi iletin.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Sorunu Anlatalım",
    desc: "Cihaz ve servis ihtiyacınız hakkında bilgi alın.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Servis Desteği",
    desc: "Uygun servis planlaması gerçekleştirilir.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#1d6aff" strokeWidth="2" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Çözüm",
    desc: "Cihazınız için gerekli bakım, tamir veya onarım işlemi gerçekleştirilir.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4L12 14.01l-3-3" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold text-[#1d6aff] uppercase tracking-widest mb-3">
            Nasıl Çalışıyoruz?
          </p>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#0f1f3d] tracking-tight"
          >
            Servis Sürecimiz
          </h2>
        </div>

        {/* Connector line — desktop only, positioned outside ol */}
        <div className="relative">
          <div
            className="hidden lg:block absolute top-[26px] left-[12.5%] right-[12.5%] h-px bg-[#eef0f4] pointer-events-none z-0"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <li key={s.num} className="relative flex flex-col items-start lg:items-center lg:text-center z-10">
                <div className="flex items-center gap-4 lg:flex-col lg:gap-0 lg:mb-5 mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-[#e8f0fe] relative z-10">
                    {s.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="sm:hidden flex-shrink-0 w-px h-8 bg-[#eef0f4] ml-[25px]"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="lg:px-2">
                  <span className="text-xs font-bold text-[#1d6aff] mb-1 block">{s.num}</span>
                  <h3 className="text-base font-bold text-[#0f1f3d] mb-1.5">{s.title}</h3>
                  <p className="text-sm text-[#5a6a85] leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
