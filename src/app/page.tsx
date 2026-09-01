import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import BrandScroller from "@/components/home/BrandScroller";
import WhyUs from "@/components/home/WhyUs";
import ServiceAreas from "@/components/home/ServiceAreas";
import ProcessSteps from "@/components/home/ProcessSteps";
import Reviews from "@/components/home/Reviews";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Çınar Klima & Beyaz Eşya Servisi | Ankara Klima Servisi",
  description:
    "Çınar Klima & Beyaz Eşya Servisi, Ankara genelinde klima tamiri, bakım, montaj, gaz dolumu ve beyaz eşya tamir bakım hizmetleri sunar. 0507 586 6063",
  alternates: { canonical: "https://cinarklima.com" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandScroller />
      <WhyUs />
      <ServiceAreas />
      <ProcessSteps />
      <Reviews />
      <CTASection />
    </>
  );
}
