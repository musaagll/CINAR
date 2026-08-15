const reviews = [
  { name: "Mehmet A.", city: "Çankaya", text: "Klima bakımını çok hızlı ve temiz yaptılar. Kesinlikle tavsiye ederim." },
  { name: "Ayşe K.", city: "Keçiören", text: "Teknisyen çok kibar ve profesyoneldi. Sorun anında çözüldü, teşekkürler." },
  { name: "Ali R.", city: "Yenimahalle", text: "Gaz dolumu için aradım, aynı gün geldiler. Fiyat gayet makul." },
  { name: "Fatma Ş.", city: "Mamak", text: "Buzdolabım çalışmıyordu, çok kısa sürede tamir ettiler. Harika hizmet." },
  { name: "Hüseyin T.", city: "Etimesgut", text: "Klima montajı için çok memnun kaldım. Düzenli ve temiz çalışıyorlar." },
  { name: "Zeynep B.", city: "Sincan", text: "Çamaşır makinem arıza yaptı, hızlı müdahale ettiler. Çok teşekkürler." },
  { name: "Mustafa Ç.", city: "Altındağ", text: "Klima tamiri için geldi ekip, sorunun kaynağını hemen buldu. Profesyonel." },
  { name: "Hatice D.", city: "Pursaklar", text: "Bakım hizmetinden çok memnun kaldım. Fiyatlar da gayet uygun." },
  { name: "İbrahim E.", city: "Gölbaşı", text: "Bulaşık makinem çalışmıyordu, aynı gün müdahale ettiler. Süper hizmet." },
  { name: "Elif Y.", city: "Eryaman", text: "Klima servisi için hem hızlı hem uygun fiyatlı. Tekrar arayacağım." },
  { name: "Ahmet S.", city: "Batıkent", text: "Çok profesyonel ekip. Klimam şimdi tertemiz çalışıyor. Teşekkürler." },
  { name: "Meryem Ö.", city: "İncek", text: "Servis ekibi çok nazik ve çalışkan. Kesinlikle tavsiye ederim." },
  { name: "Ramazan K.", city: "Çankaya", text: "Kurutma makinem bozulmuştu, kısa sürede hallettiler. Çok memnunum." },
  { name: "Selin A.", city: "Keçiören", text: "Klima bakımı için çok memnun kaldım. Çok temiz iş çıkardılar." },
  { name: "Burak M.", city: "Yenimahalle", text: "Gaz dolumu ve bakım aynı anda yapıldı. Fiyat-performans mükemmel." },
  { name: "Gülay T.", city: "Etimesgut", text: "Ekip zamanında geldi ve işi eksiksiz tamamladı. Güvenilir hizmet." },
  { name: "Ömer F.", city: "Mamak", text: "Klima montajı çok düzgün yapıldı. Duvarlar tertemiz kaldı. Harika." },
  { name: "Nilüfer C.", city: "Sincan", text: "Beyaz eşya tamirinde çok başarılılar. Tecrübeli teknisyenler." },
  { name: "Emre B.", city: "Altındağ", text: "Klimam hiç soğutmuyordu, gaz dolu yapıldı, şimdi çok iyi çalışıyor." },
  { name: "Hacer K.", city: "Pursaklar", text: "Çamaşır makinem iki günde tamir edildi. Çok memnun kaldım." },
  { name: "Serkan Y.", city: "Gölbaşı", text: "Klima bakım hizmeti mükemmeldi. Çok özenli ve dikkatli çalıştılar." },
  { name: "Pınar U.", city: "Eryaman", text: "Buzdolabım arıza yaptı, hızlıca gelip düzelttiler. Teşekkürler." },
  { name: "Tuncay E.", city: "Batıkent", text: "Hem uygun fiyatlı hem hızlı servis. Her konuda memnun kaldım." },
  { name: "Derya L.", city: "Çankaya", text: "Klima montajı çok profesyonel yapıldı. İleride yine arayacağım." },
  { name: "Cengiz A.", city: "Keçiören", text: "Fırınım bozulmuştu, aynı gün tamir ettiler. Çok başarılı ekip." },
  { name: "Sevim R.", city: "Yenimahalle", text: "Servis ekibi çok güler yüzlü ve çalışkan. Memnuniyetle önerim." },
  { name: "Volkan H.", city: "Mamak", text: "Klimalarımı her yıl burada bakıma yaptırıyorum. Hiç sorun yaşamadım." },
  { name: "Nurcan B.", city: "Sincan", text: "Bulaşık makinem sızdırıyordu, gelip hemen düzelttiler. Süper hizmet." },
  { name: "Barış Ş.", city: "Etimesgut", text: "Gaz dolumu ve filtre temizliği yapıldı. Klima çok daha iyi soğutuyor." },
  { name: "Leyla D.", city: "Pursaklar", text: "Beyaz eşya servisi için çok memnun kaldım. Profesyonel ve hızlı." },
  { name: "Kemal Y.", city: "Gölbaşı", text: "Klima tamirini çok kısa sürede hallettiler. Fiyatlar makul." },
  { name: "Aslı M.", city: "Eryaman", text: "Çok nazik ve bilgili teknisyenler. Her şey çok düzgün yapıldı." },
  { name: "Ufuk K.", city: "Batıkent", text: "Servis talebi açtım, ertesi gün geldiler. Çok hızlı ve güvenilir." },
  { name: "Semra C.", city: "İncek", text: "Klimam çok gürültülü yapıyordu, bakımda sorun bulundü ve çözüldü." },
  { name: "Kadir T.", city: "Çankaya", text: "Ocağım bozulmuştu, kısa sürede gelip tamir ettiler. Teşekkürler." },
  { name: "Reyhan A.", city: "Keçiören", text: "Klima montajında çok özenli çalıştılar. Duvarlar hiç kirlenmedi." },
  { name: "Murat Ö.", city: "Yenimahalle", text: "Her yıl klima bakımı yaptırıyorum, her seferinde memnun kalıyorum." },
  { name: "Filiz E.", city: "Mamak", text: "Buzdolabı tamiri için hızlıca geldiler. Çok kaliteli bir hizmet." },
  { name: "Selçuk B.", city: "Sincan", text: "Klima servisi için aradım, çok ilgili ve yardımcı oldular." },
  { name: "Gamze R.", city: "Etimesgut", text: "Çamaşır makinem arıza yaptı, iki saatte tamir edildi. Harikaydı." },
  { name: "Tolga K.", city: "Pursaklar", text: "Gaz dolumu fiyatı çok makul. Klima şimdi harika çalışıyor." },
  { name: "Sibel Y.", city: "Gölbaşı", text: "Teknisyen çok bilgiliydi ve sorunu hemen tespit etti. Teşekkürler." },
  { name: "Orhan D.", city: "Eryaman", text: "Klima bakımı ve temizliği çok güzel yapıldı. Çok memnunum." },
  { name: "Yasemin A.", city: "Batıkent", text: "Servis ekibi çok temiz çalışıyor. Hiçbir iz bırakmadılar. Harika." },
  { name: "Cemal Ş.", city: "İncek", text: "Klima montajım kusursuz yapıldı. Çok hızlı ve profesyonel ekip." },
  { name: "Berna K.", city: "Çankaya", text: "Beyaz eşya servisinde çok memnun kaldım. Kesinlikle tavsiye ederim." },
  { name: "Hakan T.", city: "Keçiören", text: "Kurutma makinemi tamir ettiler, çok memnun kaldım. Teşekkürler." },
  { name: "Nermin C.", city: "Yenimahalle", text: "Klima arızası için aradım, aynı gün geldiler. Müthiş bir hizmet." },
  { name: "Erdoğan B.", city: "Mamak", text: "Fiyat uygun, hizmet kaliteli. Klima bakımı için doğru adres." },
  { name: "Şule Y.", city: "Sincan", text: "Klimam artık çok verimli çalışıyor. Bakım için teşekkürler." },
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 üzerinden 5 yıldız">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// İlk 25 üst satır, son 25 alt satır
const row1 = reviews.slice(0, 25);
const row2 = reviews.slice(25);

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-2xl p-5 border border-[#eef0f4] shadow-sm mx-2">
      <StarRating />
      <p className="mt-3 text-sm text-[#374151] leading-relaxed line-clamp-3">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-3 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#e8f0fe] flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-bold text-[#1d6aff]">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#0f1f3d]">{review.name}</p>
          <p className="text-xs text-[#8898aa]">{review.city}, Ankara</p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      className="bg-[#f7f8fa] py-16 lg:py-20 overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-xs font-semibold text-[#1d6aff] uppercase tracking-widest mb-3">
          Müşteri Yorumları
        </p>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2
            id="reviews-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#0f1f3d] tracking-tight"
          >
            Müşterilerimiz Ne Diyor?
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => (
                <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-[#0f1f3d]">5.0</span>
            <span className="text-sm text-[#8898aa]">— 50 değerlendirme</span>
          </div>
        </div>
      </div>

      {/* Üst sıra — sola kayıyor */}
      <div className="relative mb-4">
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #f7f8fa, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #f7f8fa, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="flex review-scroll-left"
          style={{ width: "max-content" }}
          aria-hidden="true"
        >
          {[...row1, ...row1, ...row1].map((r, i) => (
            <ReviewCard key={`r1-${i}`} review={r} />
          ))}
        </div>
      </div>

      {/* Alt sıra — sağa kayıyor */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #f7f8fa, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #f7f8fa, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="flex review-scroll-right"
          style={{ width: "max-content" }}
          aria-hidden="true"
        >
          {[...row2, ...row2, ...row2].map((r, i) => (
            <ReviewCard key={`r2-${i}`} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
