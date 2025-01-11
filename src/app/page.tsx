'use client';

import { useRef } from "react";
import HeroSection from "@/components/main/Hero";
import ContactCard from "@/components/sub/ContactCard";

export default function Home() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="h-full overflow-x-hidden">
      <HeroSection scrollNext={() => scrollToSection(contactRef)} />
      <ContactCard ref={contactRef} />
    </main>
  );
}