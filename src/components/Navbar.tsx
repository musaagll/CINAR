"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetlerimiz" },
  { href: "/markalar", label: "Markalar" },
  { href: "/gorseller", label: "Görseller" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_16px_0_rgba(15,31,61,0.08)]"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
        aria-label="Ana navigasyon"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center flex-shrink-0 focus-visible:outline-[#1d6aff]"
          aria-label="Çınar Klima & Beyaz Eşya Servisi - Ana Sayfa"
        >
          <Image
            src="/CINARLOGO.png"
            alt="Çınar Klima & Beyaz Eşya Servisi Logo"
            width={180}
            height={64}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  active
                    ? "text-[#1d6aff] bg-[#e8f0fe]"
                    : "text-[#0f1f3d] hover:text-[#1d6aff] hover:bg-[#f0f4ff]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:05075866063" className="flex items-center gap-1.5 text-sm font-semibold text-[#0f1f3d] hover:text-[#1d6aff] transition-colors" aria-label="Telefon: 0507 586 60 63">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            0507 586 60 63
          </a>
          <a href="tel:05369322422" className="flex items-center gap-1.5 text-sm font-semibold text-[#0f1f3d] hover:text-[#1d6aff] transition-colors" aria-label="Telefon: 0536 932 24 22">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            0536 932 24 22
          </a>
        </div>

        {/* Mobile right */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="tel:05075866063"
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#e8f0fe] text-[#1d6aff]"
            aria-label="Hemen Ara"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-[#f7f8fa] transition-colors"
            aria-label={menuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" stroke="#0f1f3d" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="#0f1f3d" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-t border-[#eef0f4] px-4 pb-6 pt-2"
          aria-label="Mobil menü"
        >
          <div className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                    active
                      ? "text-[#1d6aff] bg-[#e8f0fe]"
                      : "text-[#0f1f3d] hover:bg-[#f7f8fa]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <Link
            href="/iletisim"
            className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white"
            style={{ background: "#1d6aff" }}
          >
            Servis Talebi Oluştur
          </Link>
        </div>
      )}
    </header>
  );
}
