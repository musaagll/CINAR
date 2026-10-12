import content from "@/../content/yorumlar.json";
// Edited from the Gomp panel (content/yorumlar.json).
const reviews = content.reviews;

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
