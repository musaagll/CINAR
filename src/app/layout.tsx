import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import SchemaOrg from "@/components/SchemaOrg";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cinarklima.com"),
  title: {
    default: "Çınar Klima & Beyaz Eşya Servisi | Ankara Klima Servisi",
    template: "%s | Çınar Klima & Beyaz Eşya Servisi",
  },
  description:
    "Çınar Klima & Beyaz Eşya Servisi, Ankara genelinde klima tamiri, bakım, montaj, gaz dolumu ve beyaz eşya tamir bakım hizmetleri sunar. 0507 586 6063",
  icons: {
    icon: [
      { url: "/CINARLOGO.png", type: "image/png" },
    ],
    apple: "/CINARLOGO.png",
    shortcut: "/CINARLOGO.png",
  },
  keywords: [
    "Ankara klima servisi",
    "Ankara klima tamiri",
    "Ankara klima bakımı",
    "Ankara klima montajı",
    "Ankara klima gaz dolumu",
    "Ankara beyaz eşya servisi",
    "Ankara beyaz eşya tamiri",
    "Ankara beyaz eşya bakım",
    "klima tamiri Ankara",
    "klima servisi Ankara",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Çınar Klima & Beyaz Eşya Servisi",
    title: "Çınar Klima & Beyaz Eşya Servisi | Ankara Klima Servisi",
    description:
      "Ankara genelinde klima tamiri, bakım, montaj, gaz dolumu ve beyaz eşya servis hizmetleri. 0507 586 6063",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  authors: [{ name: "Çınar Klima & Beyaz Eşya Servisi" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="TR-06" />
        <meta name="geo.placename" content="Ankara" />
      </head>
      <body className="font-[var(--font-inter)] antialiased">
        <SchemaOrg />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
