import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Görseller | Çınar Soğutma & Beyaz Eşya Servisi",
  description:
    "Çınar Soğutma & Beyaz Eşya Servisi'nin gerçekleştirdiği klima ve beyaz eşya servis çalışmalarından fotoğraf ve videolar.",
  alternates: { canonical: "https://cinarsogutmabeyazesya.com/gorseller" },
};

const PHOTOS = [
  "126fa76d-44f2-4f5d-be07-89d086f70f29.jpg",
  "184e55be-5f1c-4aca-813f-466e1e46f6e5.jpg",
  "1fbe0639-5bd7-4a6b-a446-09e874d28bb1.jpg",
  "2c2d5dea-8aa4-4cdf-b0c2-7edd22d40be0.jpg",
  "2d81ee84-8cbf-4e45-b38f-41536ace72a2.jpg",
  "414b4716-9bc9-4a85-8652-a356320dcddb.jpg",
  "5362f0fc-c842-443d-8e75-b123ea33b178.jpg",
  "55e45d53-07d7-41a7-8997-376582ddc5a7.jpg",
  "b4fccadf-1ffc-4ff8-a889-433f07f649cb.jpg",
  "b9922d7b-d965-4722-ad15-c48231ca513b.jpg",
  "c2bd53a5-fceb-4beb-8016-9434a65381f3.jpg",
  "d305d301-22e1-46a6-ba24-ea8df0775946.jpg",
  "ee195cf9-ff28-41d3-985f-332bb038d45d.jpg",
  "f0d87f21-2fa1-4ce8-9177-715283f30033.jpg",
];

const VIDEOS = [
  "21dbc5a6-78c2-4276-b9b4-66d7646c353e.mp4",
  "e7232d3a-ea6a-4a58-8bef-8a22cc29863e.mp4",
];

export default function GorsellerPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#f7f8fa] pt-28 pb-14 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#1d6aff] uppercase tracking-widest mb-3">
            Galeri
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f1f3d] mb-5 tracking-tight">
            Görseller
          </h1>
          <p className="text-lg text-[#5a6a85] max-w-xl leading-relaxed">
            Gerçekleştirdiğimiz klima ve beyaz eşya servis çalışmalarından kareler.
          </p>
        </div>
      </div>

      {/* Fotoğraflar */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-semibold text-[#8898aa] uppercase tracking-widest mb-8">
            Fotoğraflar
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {PHOTOS.map((file) => (
              <div
                key={file}
                className="relative aspect-square rounded-2xl overflow-hidden bg-[#f7f8fa] group"
              >
                <Image
                  src={`/Gorseller/${file}`}
                  alt="Servis çalışması"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videolar */}
      <section className="bg-[#f7f8fa] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-semibold text-[#8898aa] uppercase tracking-widest mb-8">
            Videolar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VIDEOS.map((file) => (
              <div
                key={file}
                className="rounded-2xl overflow-hidden bg-black aspect-video"
              >
                <video
                  src={`/Gorseller/${file}`}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                  preload="metadata"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
