'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import OurMissionSection from "./components/expertise";
import ERPImplementationDiagram from "./components/erp";
import TechHero from "./components/hero";
import Journey from "./components/journey";

export default function AboutPage() {
  const pathname = usePathname();

  useEffect(() => {
    // Client-side specific code can go here
    // For example, analytics tracking, etc.
  }, [pathname]);

  return (
    <main className="min-h-* bg-[#fff5f5]">
      <TechHero />
      <div className="relative min-h-*">
        <Journey />
      </div>
      <div className="relative min-w-* min-h-*">
        <ERPImplementationDiagram />
      </div>
      <div className="relative">
        <OurMissionSection />
      </div>
    </main>
  );
}