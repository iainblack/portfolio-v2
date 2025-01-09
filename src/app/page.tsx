'use client';

import { useRef } from "react";
import HeroSection from "@/components/main/HeroSection";
import QuickViewSection from "@/components/main/QuickViewSection";
import { ParticleBackground } from "@/components/ParticleBackground";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const quickView = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="h-full">
      <ParticleBackground />
      <HeroSection ref={heroRef} scrollNext={() => scrollToSection(quickView)} />
      <QuickViewSection ref={quickView} />
    </main>
  );
}