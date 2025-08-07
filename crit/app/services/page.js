'use client';
import React, { useEffect } from 'react';
import SapHero from './components/service_hero';
import ServicesGrid1 from './components/s_cards';
import FaqSection1 from './components/faq';

export default function Services() {
  useEffect(() => {
    // Clean up any duplicate modals
    const existingModals = document.querySelectorAll('[data-modal="cta"]');
    existingModals.forEach(modal => modal.remove());
  }, []);

  return (
    <div className="relative bg-[#fff5f5]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-red-500/[0.05] bg-[size:50px_50px]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-red-50" />

      <div className="relative flex-1 w-full text-white pt-15 pb-10 sm:pb-18 sm:pb-22 md:pb-26">
        <div className="max-w-[90rem] mx-auto">
          <SapHero />
          <ServicesGrid1 />
          <FaqSection1 />
        </div>
      </div>
    </div>
  );
}
