import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | Çınar Klima & Beyaz Eşya Servisi",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#f7f8fa] px-4">
      <div className="text-center max-w-md">
        <p className="text-[80px] font-extrabold text-[#dde3ec] leading-none mb-6">
          404
        </p>
        <h1 className="text-2xl font-extrabold text-[#0f1f3d] mb-3 tracking-tight">
          Aradığınız Sayfayı Bulamadık.
        </h1>
        <p className="text-[#5a6a85] mb-8">
          Sayfa taşınmış veya silinmiş olabilir. Ana sayfaya dönebilir ya da
          bize ulaşabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#1d6aff] hover:opacity-90 active:scale-95 transition-all duration-150"
          >
            Ana Sayfaya Dön
          </Link>
          <a
            href="tel:05075866063"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#0f1f3d] bg-white border border-[#dde3ec] hover:border-[#1d6aff] hover:text-[#1d6aff] active:scale-95 transition-all duration-150"
          >
            Bizi Ara
          </a>
        </div>
      </div>
    </div>
  );
}
