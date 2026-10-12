"use client";
import content from "@/../content/galeri.json";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// Edited from the Gomp panel (content/galeri.json).
const PHOTOS = content.photos.map((photo) => photo.src);

const VIDEOS = [
  "21dbc5a6-78c2-4276-b9b4-66d7646c353e.mp4",
  "e7232d3a-ea6a-4a58-8bef-8a22cc29863e.mp4",
];

export default function GorsellerPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() =>
    setLightbox((i) => (i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null)), []);
  const next = useCallback(() =>
    setLightbox((i) => (i !== null ? (i + 1) % PHOTOS.length : null)), []);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

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
            {PHOTOS.map((file, i) => (
              <button
                key={file}
                onClick={() => setLightbox(i)}
                className="relative aspect-square rounded-2xl overflow-hidden bg-[#f7f8fa] group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1d6aff]"
                aria-label={`Fotoğraf ${i + 1} — büyütmek için tıklayın`}
              >
                <Image
                  src={file}
                  alt={`Servis çalışması ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <svg className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
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
              <div key={file} className="rounded-2xl overflow-hidden bg-black aspect-video">
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

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          {/* Kapat */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Kapat"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Sol */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-6 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Önceki"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Resim */}
          <div
            className="relative w-full max-w-4xl mx-16 aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={PHOTOS[lightbox]}
              alt={`Servis çalışması ${lightbox + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Sağ */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-6 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Sonraki"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Sayaç */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightbox + 1} / {PHOTOS.length}
          </p>
        </div>
      )}
    </>
  );
}
