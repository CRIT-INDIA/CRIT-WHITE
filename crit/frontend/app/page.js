"use client";
import { Suspense, lazy, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import { ThreeDMarquee } from "./components/ui/3d-marquee";
import MovingClientsSection from "./components/ui/clients";



function BasicExample() {
  const images = [
    { src: "https://res.cloudinary.com/dujw4np0d/image/upload/v1753680388/istockphoto-2004564843-1024x1024_1_x6gfh5.avif", alt: "iStock Photo 2", industry: "Manufacturing" },
    { src: "https://res.cloudinary.com/dujw4np0d/image/upload/v1753687876/istockphoto-1368043872-1024x1024_1_malysw.avif", alt: "iStock Photo", industry: "Healthcare" },
    { src: "https://res.cloudinary.com/dujw4np0d/image/upload/v1753680974/istockphoto-870301606-1024x1024_1_ujsq5j.avif", alt: "iStock Photo 3", industry: "IT Companies" },
    { src: "https://res.cloudinary.com/dujw4np0d/image/upload/v1753681293/remove_watermark_image_20250728_111025_rjdpng.avif", alt: "Remove Watermark Image", industry: "Traders & Distributors" },
    { src: "https://res.cloudinary.com/dujw4np0d/image/upload/v1753687055/istockphoto-2212531431-1024x1024-processed_lightpdf.com_wa6pjr.avif", alt: "Transformed Image 11", industry: "Education" },
    { src: "https://res.cloudinary.com/dujw4np0d/image/upload/v1753684569/wmremove-transformed_13_gxy30s.avif", alt: "DeWatermark Image 1", industry: "Real Estate & Construction" },
    { src: "https://res.cloudinary.com/dujw4np0d/image/upload/v1753678389/wmremove-transformed_12_s29fd3.avif", alt: "Transformed Image 12", industry: "Retail Industry" },
  ];

  return (
    <div className="">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
}

// Lazy load non-critical components

const CardCarousel = dynamic(() => import('./components/ui/badge'), { 
  loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse"></div> 
}); 

const CustomerTestimonials = dynamic(() => import('./components/ui/review'), { 
  loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse"></div> 
});

const WhyChooseUs = dynamic(() => import('./components/ui/whychoose'), { 
  loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse"></div> 
});

const ServicesGrid = dynamic(() => import('./components/ui/ServicesGrid'), { 
  loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse"></div> 
});

const DesignClassesSection = dynamic(() => import('./components/ui/products'), { 
  loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse"></div> 
});

const SAPServices3DShowcase = dynamic(() => import('./components/ui/risewithsap'), { 
  loading: () => <div className="h-[600px] w-full bg-gray-100 animate-pulse"></div> 
});

const Capabilities = dynamic(() => import('./components/ui/capabilities'), { 
  loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse"></div> 
});

const GrowingSection = dynamic(() => import('./components/ui/growingsection'), { 
  loading: () => <div className="h-[400px] w-full bg-gray-100 animate-pulse"></div> 
});

const ContactForm = dynamic(() => import('./components/ui/ContactForm'), { 
  loading: () => <div className="h-[600px] w-full bg-gray-100 animate-pulse"></div> 
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/your-endpoint`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render components on the client side
  if (!isClient) {
    return (
      <div className="relative overflow-hidden max-w-[1800px] w-full mx-auto bg-[#fff5f5] min-h-screen">
        <div className="h-screen w-full bg-gray-100 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden max-w-[1800px] w-full mx-auto bg-[#fff5f5]">
      {/* Critical components rendered immediately */}
      <div className="relative h-* min-h-[400px] overflow-hidden">
        <ThreeDMarquee />
      </div>
      
      <div className="relative">  
        <MovingClientsSection />
      </div>

        <Suspense fallback={<div className="h-[500px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative">
            <WhyChooseUs />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[500px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative">
            <ServicesGrid mobileLimit={2} />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[500px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative">
            <DesignClassesSection />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[600px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative">
            <SAPServices3DShowcase />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[500px] w-full bg-gray-100 animate-pulse"></div>}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <BasicExample />
        </div>
        </Suspense>

        <Suspense fallback={<div className="h-[500px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative overflow-hidden">
            <Capabilities />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[400px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative">
            <GrowingSection />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[400px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative">
            <CustomerTestimonials />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[600px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative overflow-hidden">
            <ContactForm />
          </div>
        </Suspense>
      </div>
    
  );
}
