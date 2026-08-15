"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Klima Tamiri",
    desc: "Klimalarda oluşan arızaların tespiti ve profesyonel onarım hizmeti.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Klima Bakımı",
    desc: "Klimaların daha verimli ve sağlıklı çalışması için bakım hizmeti.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Klima Montajı",
    desc: "Yeni klima cihazlarınız için profesyonel montaj ve kurulum hizmeti.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22V12M3.27 6.96L12 12.01l8.73-5.05" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Klima Gaz Dolumu",
    desc: "Klima gaz kontrolü ve ihtiyaç halinde gaz dolumu hizmeti.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 3H5a2 2 0 00-2 2v3M21 3h-3a2 2 0 00-2 2v3M21 21h-3a2 2 0 01-2-2v-3M8 21H5a2 2 0 01-2-2v-3" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="#1d6aff" strokeWidth="2" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Klima Servisi",
    desc: "Klima cihazlarınız için kapsamlı teknik servis desteği.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="#1d6aff" strokeWidth="2" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Beyaz Eşya Tamir & Bakım",
    desc: "Beyaz eşyalarınız için tamir, bakım ve onarım hizmetleri.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#1d6aff" strokeWidth="2" />
        <path d="M9 9h6M9 12h6M9 15h4" stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

// ── SVG Illustrasyonlar ──────────────────────────────────────────
const galleryItems = [
  {
    id: 1,
    label: "Split Klima",
    bg: "#e8f0fe",
    accent: "#1d6aff",
    illustration: (
      <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
        {/* Duvar */}
        <rect width="280" height="180" fill="#f0f4ff" rx="12" />
        <rect x="0" y="130" width="280" height="50" fill="#e2eaff" rx="0" />
        {/* İç ünite — duvar tipi split klima */}
        <rect x="40" y="28" width="200" height="68" rx="10" fill="white" />
        <rect x="40" y="28" width="200" height="68" rx="10" stroke="#1d6aff" strokeWidth="1.5" strokeOpacity="0.25" />
        {/* Üst şerit */}
        <rect x="50" y="36" width="180" height="10" rx="3" fill="#e8f0fe" />
        {/* Izgara çizgileri */}
        <rect x="50" y="52" width="110" height="3" rx="1.5" fill="#3d82ff" fillOpacity="0.5" />
        <rect x="50" y="59" width="90" height="3" rx="1.5" fill="#3d82ff" fillOpacity="0.35" />
        <rect x="50" y="66" width="75" height="3" rx="1.5" fill="#3d82ff" fillOpacity="0.2" />
        {/* Sağ kontrol paneli */}
        <circle cx="220" cy="52" r="7" fill="#1d6aff" fillOpacity="0.15" stroke="#1d6aff" strokeWidth="1.2" strokeOpacity="0.4" />
        <circle cx="220" cy="52" r="3" fill="#1d6aff" fillOpacity="0.5" />
        <rect x="210" y="63" width="20" height="3" rx="1.5" fill="#1d6aff" fillOpacity="0.2" />
        <rect x="213" y="69" width="14" height="3" rx="1.5" fill="#1d6aff" fillOpacity="0.15" />
        {/* Alt kanat / ızgara */}
        <rect x="50" y="82" width="180" height="8" rx="3" fill="#dce8ff" />
        <line x1="80" y1="82" x2="80" y2="90" stroke="#1d6aff" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="110" y1="82" x2="110" y2="90" stroke="#1d6aff" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="140" y1="82" x2="140" y2="90" stroke="#1d6aff" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="170" y1="82" x2="170" y2="90" stroke="#1d6aff" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="200" y1="82" x2="200" y2="90" stroke="#1d6aff" strokeWidth="0.8" strokeOpacity="0.3" />
        {/* Hava akışı */}
        <path d="M70 102 Q100 115 70 128" stroke="#3d82ff" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.5" />
        <path d="M95 102 Q130 118 95 134" stroke="#3d82ff" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.4" />
        <path d="M120 102 Q160 120 120 138" stroke="#3d82ff" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.3" />
        <path d="M145 102 Q190 118 145 134" stroke="#3d82ff" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.2" />
        {/* Etiket */}
        <rect x="88" y="148" width="104" height="22" rx="6" fill="white" fillOpacity="0.9" />
        <text x="140" y="163" textAnchor="middle" fill="#0f1f3d" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">Split Klima</text>
      </svg>
    ),
  },
  {
    id: 2,
    label: "Gaz Dolumu",
    bg: "#f0fff4",
    accent: "#059669",
    illustration: (
      <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
        <rect width="280" height="180" fill="#f0fdf4" rx="12" />
        {/* Tüp */}
        <rect x="80" y="30" width="48" height="100" rx="16" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" strokeOpacity="0.4" />
        <rect x="88" y="22" width="32" height="14" rx="5" fill="#059669" fillOpacity="0.3" stroke="#059669" strokeWidth="1.2" strokeOpacity="0.5" />
        <rect x="96" y="14" width="16" height="12" rx="3" fill="#059669" fillOpacity="0.5" />
        {/* Valf */}
        <rect x="94" y="8" width="20" height="8" rx="2" fill="#059669" fillOpacity="0.7" />
        {/* Tüp etiketi */}
        <rect x="86" y="55" width="36" height="40" rx="4" fill="white" fillOpacity="0.7" />
        <text x="104" y="71" textAnchor="middle" fill="#059669" fontSize="7" fontWeight="700" fontFamily="Inter,sans-serif">R-410A</text>
        <text x="104" y="83" textAnchor="middle" fill="#065f46" fontSize="6" fontFamily="Inter,sans-serif">Soğutucu</text>
        <text x="104" y="93" textAnchor="middle" fill="#065f46" fontSize="6" fontFamily="Inter,sans-serif">Gaz</text>
        {/* Hortum */}
        <path d="M128 70 C160 70 165 90 175 90" stroke="#059669" strokeWidth="4" strokeLinecap="round" fill="none" strokeOpacity="0.6" />
        <path d="M128 70 C160 70 165 90 175 90" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" fill="none" strokeOpacity="0.5" />
        {/* Manometre */}
        <circle cx="185" cy="82" r="22" fill="white" stroke="#059669" strokeWidth="1.5" strokeOpacity="0.4" />
        <circle cx="185" cy="82" r="17" fill="#f0fdf4" />
        <circle cx="185" cy="82" r="3" fill="#059669" fillOpacity="0.5" />
        {/* Manometre iğnesi */}
        <line x1="185" y1="82" x2="192" y2="70" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
        {/* Manometre dereceleri */}
        <line x1="185" y1="66" x2="185" y2="70" stroke="#059669" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="199" y1="76" x2="195" y2="78" stroke="#059669" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="171" y1="76" x2="175" y2="78" stroke="#059669" strokeWidth="1" strokeOpacity="0.4" />
        {/* Klimaya bağlı dış ünite */}
        <rect x="195" y="50" width="55" height="80" rx="8" fill="white" stroke="#059669" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="222" cy="90" r="20" fill="#d1fae5" stroke="#059669" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="222" cy="90" r="8" fill="#6ee7b7" fillOpacity="0.4" />
        {/* Fan pervanesi */}
        <path d="M222 76 C226 83 222 90 222 90" stroke="#059669" strokeWidth="1.5" strokeOpacity="0.5" />
        <path d="M222 90 C215 86 222 90 222 90" stroke="#059669" strokeWidth="1.5" strokeOpacity="0.5" />
        <path d="M222 90 C229 94 222 90 222 90" stroke="#059669" strokeWidth="1.5" strokeOpacity="0.5" />
        <rect x="88" y="148" width="104" height="22" rx="6" fill="white" fillOpacity="0.9" />
        <text x="140" y="163" textAnchor="middle" fill="#0f1f3d" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">Gaz Dolumu</text>
      </svg>
    ),
  },
  {
    id: 3,
    label: "Çamaşır Makinesi",
    bg: "#fef3f2",
    accent: "#dc2626",
    illustration: (
      <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
        <rect width="280" height="180" fill="#fff5f5" rx="12" />
        {/* Makine gövdesi */}
        <rect x="60" y="20" width="160" height="140" rx="12" fill="white" stroke="#fca5a5" strokeWidth="1.5" strokeOpacity="0.5" />
        {/* Üst panel */}
        <rect x="60" y="20" width="160" height="30" rx="12" fill="#fee2e2" />
        <rect x="60" y="38" width="160" height="12" fill="#fee2e2" />
        {/* Kontrol düğmeleri */}
        <circle cx="100" cy="35" r="8" fill="white" stroke="#dc2626" strokeWidth="1.2" strokeOpacity="0.4" />
        <circle cx="100" cy="35" r="4" fill="#dc2626" fillOpacity="0.3" />
        <circle cx="125" cy="35" r="6" fill="white" stroke="#dc2626" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="125" cy="35" r="3" fill="#dc2626" fillOpacity="0.2" />
        <rect x="145" y="28" width="55" height="14" rx="4" fill="white" fillOpacity="0.7" />
        <rect x="149" y="31" width="20" height="2" rx="1" fill="#dc2626" fillOpacity="0.3" />
        <rect x="149" y="35" width="14" height="2" rx="1" fill="#dc2626" fillOpacity="0.2" />
        {/* Tambur kapağı */}
        <circle cx="140" cy="105" r="52" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" strokeOpacity="0.4" />
        <circle cx="140" cy="105" r="44" fill="white" stroke="#fca5a5" strokeWidth="1" strokeOpacity="0.3" />
        {/* Tambur içi */}
        <circle cx="140" cy="105" r="36" fill="#fee2e2" />
        {/* Tambur delikleri pattern */}
        <circle cx="128" cy="93" r="3" fill="#fca5a5" fillOpacity="0.5" />
        <circle cx="140" cy="90" r="3" fill="#fca5a5" fillOpacity="0.5" />
        <circle cx="152" cy="93" r="3" fill="#fca5a5" fillOpacity="0.5" />
        <circle cx="156" cy="105" r="3" fill="#fca5a5" fillOpacity="0.5" />
        <circle cx="152" cy="117" r="3" fill="#fca5a5" fillOpacity="0.5" />
        <circle cx="140" cy="120" r="3" fill="#fca5a5" fillOpacity="0.5" />
        <circle cx="128" cy="117" r="3" fill="#fca5a5" fillOpacity="0.5" />
        <circle cx="124" cy="105" r="3" fill="#fca5a5" fillOpacity="0.5" />
        {/* Merkez kilit */}
        <circle cx="140" cy="105" r="10" fill="white" stroke="#dc2626" strokeWidth="1.2" strokeOpacity="0.4" />
        <circle cx="140" cy="105" r="4" fill="#dc2626" fillOpacity="0.2" />
        {/* Kapak kolu */}
        <rect x="163" y="102" width="14" height="6" rx="3" fill="#fca5a5" />
        <rect x="88" y="155" width="104" height="0" rx="6" fill="white" fillOpacity="0" />
        <text x="140" y="168" textAnchor="middle" fill="#0f1f3d" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">Çamaşır Makinesi</text>
      </svg>
    ),
  },
  {
    id: 4,
    label: "Dış Ünite Bakımı",
    bg: "#fffbeb",
    accent: "#d97706",
    illustration: (
      <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
        <rect width="280" height="180" fill="#fffbeb" rx="12" />
        {/* Zemin */}
        <rect x="0" y="148" width="280" height="32" fill="#fef3c7" rx="0" />
        {/* Dış ünite gövdesi */}
        <rect x="55" y="40" width="110" height="110" rx="10" fill="white" stroke="#fcd34d" strokeWidth="1.5" strokeOpacity="0.6" />
        {/* Üst kapak */}
        <rect x="55" y="40" width="110" height="18" rx="10" fill="#fef3c7" />
        <rect x="55" y="52" width="110" height="6" fill="#fef3c7" />
        {/* Fan ızgarası */}
        <circle cx="110" cy="105" r="38" fill="#fef9c3" stroke="#fcd34d" strokeWidth="1.2" strokeOpacity="0.5" />
        {/* Izgara çizgileri */}
        <line x1="72" y1="105" x2="148" y2="105" stroke="#fcd34d" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="110" y1="67" x2="110" y2="143" stroke="#fcd34d" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="83" y1="78" x2="137" y2="132" stroke="#fcd34d" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="137" y1="78" x2="83" y2="132" stroke="#fcd34d" strokeWidth="0.8" strokeOpacity="0.3" />
        <circle cx="110" cy="105" r="24" fill="#fef3c7" stroke="#fcd34d" strokeWidth="1" strokeOpacity="0.4" />
        {/* Pervane kanatları */}
        <path d="M110 88 C116 96 110 105 110 105" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.7" />
        <path d="M110 105 C102 99 110 105 110 105" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.7" />
        <path d="M110 105 C118 111 110 105 110 105" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.7" />
        <circle cx="110" cy="105" r="5" fill="#d97706" fillOpacity="0.4" />
        {/* Sağ taraf bağlantı boruları */}
        <rect x="165" y="65" width="10" height="12" rx="3" fill="#fcd34d" fillOpacity="0.6" />
        <rect x="165" y="85" width="10" height="8" rx="2" fill="#fcd34d" fillOpacity="0.4" />
        {/* Bakım teknisyeni eli — tornavida */}
        <rect x="195" y="55" width="6" height="45" rx="3" fill="#d97706" fillOpacity="0.8" />
        <rect x="193" y="52" width="10" height="8" rx="2" fill="#92400e" fillOpacity="0.6" />
        <rect x="197" y="100" width="2" height="12" rx="1" fill="#78716c" fillOpacity="0.8" />
        {/* Kir / toz efekti */}
        <circle cx="85" cy="95" r="3" fill="#fcd34d" fillOpacity="0.3" />
        <circle cx="95" cy="115" r="2" fill="#fcd34d" fillOpacity="0.25" />
        <circle cx="130" cy="88" r="2.5" fill="#fcd34d" fillOpacity="0.25" />
        <text x="140" y="168" textAnchor="middle" fill="#0f1f3d" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">Dış Ünite Bakımı</text>
      </svg>
    ),
  },
  {
    id: 5,
    label: "Buzdolabı Tamiri",
    bg: "#f0f9ff",
    accent: "#0284c7",
    illustration: (
      <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
        <rect width="280" height="180" fill="#f0f9ff" rx="12" />
        {/* Buzdolabı gövdesi */}
        <rect x="80" y="12" width="120" height="158" rx="10" fill="white" stroke="#bae6fd" strokeWidth="1.5" strokeOpacity="0.7" />
        {/* Dondurucuyu ayıran çizgi */}
        <rect x="80" y="68" width="120" height="3" fill="#e0f2fe" />
        {/* Üst bölme (dondurucu) */}
        <rect x="80" y="12" width="120" height="56" rx="10" fill="#e0f2fe" />
        <rect x="80" y="52" width="120" height="20" fill="#e0f2fe" />
        {/* Dondurucu iç */}
        <rect x="92" y="22" width="96" height="40" rx="5" fill="#bae6fd" fillOpacity="0.4" />
        {/* Buz küpleri */}
        <rect x="100" y="30" width="16" height="16" rx="3" fill="white" fillOpacity="0.8" stroke="#7dd3fc" strokeWidth="1" strokeOpacity="0.5" />
        <rect x="120" y="30" width="16" height="16" rx="3" fill="white" fillOpacity="0.8" stroke="#7dd3fc" strokeWidth="1" strokeOpacity="0.5" />
        <rect x="140" y="30" width="16" height="16" rx="3" fill="white" fillOpacity="0.8" stroke="#7dd3fc" strokeWidth="1" strokeOpacity="0.5" />
        <rect x="160" y="30" width="16" height="16" rx="3" fill="white" fillOpacity="0.7" stroke="#7dd3fc" strokeWidth="1" strokeOpacity="0.4" />
        {/* Alt bölme (soğutucu) iç raflar */}
        <rect x="88" y="80" width="104" height="2" rx="1" fill="#bae6fd" fillOpacity="0.6" />
        <rect x="88" y="100" width="104" height="2" rx="1" fill="#bae6fd" fillOpacity="0.5" />
        <rect x="88" y="120" width="104" height="2" rx="1" fill="#bae6fd" fillOpacity="0.4" />
        <rect x="88" y="140" width="104" height="2" rx="1" fill="#bae6fd" fillOpacity="0.3" />
        {/* Raf içerikleri */}
        <rect x="95" y="82" width="30" height="16" rx="3" fill="#bae6fd" fillOpacity="0.5" />
        <rect x="130" y="82" width="22" height="16" rx="3" fill="#bae6fd" fillOpacity="0.4" />
        <rect x="157" y="84" width="28" height="14" rx="3" fill="#bae6fd" fillOpacity="0.3" />
        <rect x="95" y="104" width="18" height="14" rx="3" fill="#bae6fd" fillOpacity="0.4" />
        <rect x="118" y="103" width="30" height="15" rx="3" fill="#bae6fd" fillOpacity="0.3" />
        {/* Kapı kolu — üst */}
        <rect x="188" y="24" width="6" height="26" rx="3" fill="#0284c7" fillOpacity="0.3" />
        {/* Kapı kolu — alt */}
        <rect x="188" y="80" width="6" height="40" rx="3" fill="#0284c7" fillOpacity="0.25" />
        {/* Soğutma elemanı (arka) */}
        <rect x="175" y="72" width="16" height="95" rx="3" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="175" y1="82" x2="191" y2="82" stroke="#7dd3fc" strokeWidth="0.7" strokeOpacity="0.5" />
        <line x1="175" y1="92" x2="191" y2="92" stroke="#7dd3fc" strokeWidth="0.7" strokeOpacity="0.5" />
        <line x1="175" y1="102" x2="191" y2="102" stroke="#7dd3fc" strokeWidth="0.7" strokeOpacity="0.5" />
        <text x="140" y="175" textAnchor="middle" fill="#0f1f3d" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">Buzdolabı Tamiri</text>
      </svg>
    ),
  },
  {
    id: 6,
    label: "Klima Montajı",
    bg: "#f5f3ff",
    accent: "#7c3aed",
    illustration: (
      <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
        <rect width="280" height="180" fill="#f5f3ff" rx="12" />
        {/* Duvar */}
        <rect x="0" y="0" width="280" height="180" fill="#f5f3ff" rx="12" />
        <rect x="0" y="145" width="280" height="35" fill="#ede9fe" />
        {/* Matkap */}
        <rect x="30" y="55" width="55" height="28" rx="8" fill="#7c3aed" fillOpacity="0.15" stroke="#7c3aed" strokeWidth="1.2" strokeOpacity="0.4" />
        <rect x="28" y="63" width="12" height="12" rx="3" fill="#7c3aed" fillOpacity="0.25" />
        {/* Matkap ucu */}
        <rect x="18" y="67" width="12" height="4" rx="1" fill="#7c3aed" fillOpacity="0.5" />
        <rect x="11" y="68" width="8" height="2" rx="1" fill="#4c1d95" fillOpacity="0.6" />
        {/* Tetik */}
        <rect x="52" y="75" width="14" height="20" rx="5" fill="#7c3aed" fillOpacity="0.2" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.3" />
        {/* Dübel deliği duvarda */}
        <circle cx="14" cy="69" r="4" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.3" />
        {/* İç ünite (monte ediliyor) */}
        <rect x="100" y="28" width="155" height="52" rx="9" fill="white" stroke="#7c3aed" strokeWidth="1.5" strokeOpacity="0.3" />
        <rect x="110" y="36" width="135" height="10" rx="3" fill="#ede9fe" />
        <rect x="110" y="52" width="90" height="3" rx="1.5" fill="#a78bfa" fillOpacity="0.6" />
        <rect x="110" y="59" width="70" height="3" rx="1.5" fill="#a78bfa" fillOpacity="0.4" />
        <circle cx="220" cy="55" r="6" fill="#7c3aed" fillOpacity="0.2" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.3" />
        <rect x="110" y="68" width="135" height="6" rx="2" fill="#ddd6fe" />
        {/* Montaj vidaları */}
        <circle cx="108" cy="32" r="4" fill="#7c3aed" fillOpacity="0.3" />
        <circle cx="252" cy="32" r="4" fill="#7c3aed" fillOpacity="0.3" />
        <circle cx="108" cy="76" r="4" fill="#7c3aed" fillOpacity="0.2" />
        <circle cx="252" cy="76" r="4" fill="#7c3aed" fillOpacity="0.2" />
        {/* Boru tesisatı */}
        <path d="M178 80 L178 115 Q178 128 165 128 L100 128" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" fill="none" strokeOpacity="0.4" />
        <path d="M190 80 L190 120 Q190 135 177 135 L100 135" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none" strokeOpacity="0.3" />
        {/* Dış ünite */}
        <rect x="200" y="108" width="62" height="55" rx="8" fill="white" stroke="#7c3aed" strokeWidth="1.2" strokeOpacity="0.3" />
        <circle cx="231" cy="135" r="18" fill="#ede9fe" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M231 120 C236 127 231 135 231 135" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
        <path d="M231 135 C224 131 231 135 231 135" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
        <path d="M231 135 C238 139 231 135 231 135" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
        <circle cx="231" cy="135" r="4" fill="#7c3aed" fillOpacity="0.3" />
        <text x="140" y="170" textAnchor="middle" fill="#0f1f3d" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">Klima Montajı</text>
      </svg>
    ),
  },
];

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState<"hizmetler" | "gorseller">("hizmetler");

  return (
    <section
      className="bg-[#f7f8fa] py-20 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold text-[#1d6aff] uppercase tracking-widest mb-3">
              Hizmetlerimiz
            </p>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-extrabold text-[#0f1f3d] mb-3 tracking-tight"
            >
              Profesyonel Servis Çözümleri
            </h2>
            <p className="text-[#5a6a85] text-base leading-relaxed">
              Klima ve beyaz eşyalarınız için ihtiyaç duyduğunuz servis hizmetleri tek noktada.
            </p>
          </div>

          {/* Tab Switcher */}
          <div
            className="flex items-center gap-1 p-1 bg-white rounded-xl border border-[#eef0f4] self-start sm:self-auto"
            role="tablist"
            aria-label="Bölüm seçimi"
          >
            <button
              id="tab-btn-hizmetler"
              role="tab"
              aria-selected={activeTab === "hizmetler"}
              aria-controls="tab-hizmetler"
              onClick={() => setActiveTab("hizmetler")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                activeTab === "hizmetler"
                  ? "bg-[#1d6aff] text-white shadow-sm"
                  : "text-[#5a6a85] hover:text-[#0f1f3d]"
              }`}
            >
              Hizmetlerimiz
            </button>
            <button
              id="tab-btn-gorseller"
              role="tab"
              aria-selected={activeTab === "gorseller"}
              aria-controls="tab-gorseller"
              onClick={() => setActiveTab("gorseller")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                activeTab === "gorseller"
                  ? "bg-[#1d6aff] text-white shadow-sm"
                  : "text-[#5a6a85] hover:text-[#0f1f3d]"
              }`}
            >
              Görseller
            </button>
          </div>
        </div>

        {/* Tab: Hizmetler */}
        <div
          id="tab-hizmetler"
          role="tabpanel"
          hidden={activeTab !== "hizmetler"}
          aria-labelledby="tab-btn-hizmetler"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <article
                key={s.num}
                className="group bg-white rounded-2xl p-6 border border-[#eef0f4] hover:border-[#1d6aff]/20 hover:shadow-[0_4px_24px_0_rgba(29,106,255,0.08)] transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#e8f0fe]">
                    {s.icon}
                  </div>
                  <span className="text-xs font-bold text-[#dde3ec] group-hover:text-[#c0cfe8] transition-colors">
                    {s.num}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0f1f3d] mb-2">{s.title}</h3>
                <p className="text-sm text-[#5a6a85] leading-relaxed mb-4">{s.desc}</p>
                <Link
                  href="/hizmetler"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1d6aff] hover:gap-2.5 transition-all duration-150"
                  aria-label={`${s.title} hakkında detaylı bilgi`}
                >
                  Detaylı Bilgi
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#dde3ec] text-sm font-semibold text-[#0f1f3d] hover:border-[#1d6aff] hover:text-[#1d6aff] transition-all duration-150 bg-white"
            >
              Tüm Hizmetleri Gör
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Tab: Görseller */}
        <div
          id="tab-gorseller"
          role="tabpanel"
          hidden={activeTab !== "gorseller"}
          aria-labelledby="tab-btn-gorseller"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                role="img"
                className="group rounded-2xl overflow-hidden border border-[#eef0f4] hover:border-[#1d6aff]/20 hover:shadow-[0_4px_24px_0_rgba(29,106,255,0.08)] transition-all duration-200 bg-white"
                style={{ aspectRatio: "16/10" }}
                aria-label={item.label}
              >
                <div className="w-full h-full p-2">
                  {item.illustration}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
