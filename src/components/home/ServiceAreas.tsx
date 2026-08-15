const districts = [
  "Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut",
  "Sincan", "Altındağ", "Pursaklar", "Gölbaşı", "Eryaman",
  "Batıkent", "İncek", "Beypazarı", "Nallıhan", "Çamlıdere",
  "Kızılcahamam", "Çubuk", "Elmadağ", "Polatlı", "Haymana",
  "Bala", "Şereflikoçhisar", "Kahramankazan", "Akyurt",
];

export default function ServiceAreas() {
  return (
    <section
      className="bg-[#f7f8fa] py-20 lg:py-28"
      aria-labelledby="areas-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold text-[#1d6aff] uppercase tracking-widest mb-3">
            Hizmet Bölgesi
          </p>
          <h2
            id="areas-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#0f1f3d] mb-4 tracking-tight"
          >
            Ankara&apos;nın Her Yerindeyiz
          </h2>
          <p className="text-[#5a6a85] leading-relaxed">
            Çınar Klima &amp; Beyaz Eşya Servisi olarak Ankara&apos;nın tüm
            ilçelerine klima ve beyaz eşya servis hizmeti sunuyoruz.
          </p>
        </div>

        {/* District chips */}
        <div
          className="flex flex-wrap gap-2"
          role="list"
          aria-label="Hizmet verilen Ankara ilçeleri"
        >
          {districts.map((d) => (
            <span
              key={d}
              role="listitem"
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium bg-white border border-[#dde3ec] text-[#0f1f3d] hover:border-[#1d6aff] hover:text-[#1d6aff] transition-colors duration-150 cursor-default"
            >
              {d}
            </span>
          ))}
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium bg-[#e8f0fe] border border-[#1d6aff]/20 text-[#1d6aff]">
            ve diğer ilçeler
          </span>
        </div>

        <p className="mt-8 text-sm text-[#8898aa]">
          Ankara Klima Servisi · Ankara Klima Tamiri · Ankara Klima Bakımı ·
          Ankara Klima Montajı · Ankara Beyaz Eşya Servisi · Ankara Beyaz Eşya
          Tamiri
        </p>
      </div>
    </section>
  );
}
