'use client';

import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import { ParticleBackground2 } from "@/components/ParticleBackground2";

export default function Home() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="h-full overflow-x-hidden">
      <ParticleBackground2 />
      <HeroSection scrollNext={() => scrollToSection(contactRef)} />
      <ContactSection ref={contactRef} />
    </main>
  );
}