const advantages = [
  { num: "01", title: "Profesyonel Yaklaşım", desc: "Deneyimli teknik ekiplerimizle her işe titizlikle yaklaşıyoruz." },
  { num: "02", title: "Titiz İşçilik", desc: "Standart altı işçilik kabul etmiyor, kaliteli sonuç teslim ediyoruz." },
  { num: "03", title: "Şeffaf Hizmet", desc: "İşlem öncesinde bilgilendirme yaparak şeffaf bir servis deneyimi sunuyoruz." },
  { num: "04", title: "Ankara Geneli Servis", desc: "Ankara'nın tüm ilçelerine ulaşarak yerinde servis desteği sağlıyoruz." },
  { num: "05", title: "Hızlı İletişim", desc: "Telefon ve WhatsApp üzerinden hızlı ve kolay iletişim imkânı." },
  { num: "06", title: "Müşteri Memnuniyeti", desc: "Her müşterimizin memnuniyeti önceliğimizdir." },
];

export default function WhyUs() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-[#1d6aff] uppercase tracking-widest mb-3">
            Neden Çınar Klima?
          </p>
          <h2
            id="why-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#0f1f3d] mb-5 tracking-tight"
          >
            Servis Hizmetinde Güven ve Kalite
          </h2>
          <p className="text-[#5a6a85] leading-relaxed max-w-xl">
            Çınar Klima &amp; Beyaz Eşya Servisi olarak Ankara genelinde klima
            ve beyaz eşya servis ihtiyaçlarınıza profesyonel çözümler sunmayı
            hedefliyoruz.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((a) => (
            <li key={a.num} className="flex gap-4 p-5 rounded-2xl bg-[#f7f8fa] border border-[#eef0f4]">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#e8f0fe] flex items-center justify-center text-xs font-bold text-[#1d6aff]">
                {a.num}
              </span>
              <div>
                <p className="text-sm font-bold text-[#0f1f3d] mb-0.5">{a.title}</p>
                <p className="text-sm text-[#5a6a85] leading-relaxed">{a.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
