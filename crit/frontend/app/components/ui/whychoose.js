import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Industry Expertise",
      description: "Deep understanding of industry-specific requirements and best practices.Our team of SAP consultants has extensive experience in SAP implementation and projects across industries and geographies."
    },
    {
      title: "End-to-End Support", 
      description: "From planning and preparation to deployment and post support, we provide comprehensive assistance at every stage of the process."
    },
     {
      title: "Customized Solutions", 
      description: "We tailor our SAP services to meet the unique needs and challenges of your organization, ensuring a smooth and successful implementation."
    },
    {
      title: "Proven Methodology",
      description: "We follow a proven methodology and best practices to ensure that your SAP project is completed on time, within budget, and to your satisfaction."
    }
  ];

  // Preload the largest contentful image
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = 'https://res.cloudinary.com/dujw4np0d/image/upload/f_auto,q_75,w_1000/v1750913233/DeWatermark.ai_1750851940290-_2__iyr1bg.avif';
    link.imagesrcset = `
      https://res.cloudinary.com/dujw4np0d/image/upload/f_auto,q_75,w_400/v1750913233/DeWatermark.ai_1750851940290-_2__iyr1bg.avif 400w,
      https://res.cloudinary.com/dujw4np0d/image/upload/f_auto,q_75,w_600/v1750913233/DeWatermark.ai_1750851940290-_2__iyr1bg.avif 600w,
      https://res.cloudinary.com/dujw4np0d/image/upload/f_auto,q_75,w_800/v1750913233/DeWatermark.ai_1750851940290-_2__iyr1bg.avif 800w,
      https://res.cloudinary.com/dujw4np0d/image/upload/f_auto,q_75,w_1000/v1750913233/DeWatermark.ai_1750851940290-_2__iyr1bg.avif 1000w
    `;
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="text-black flex items-center w-full px-2 py-8 sm:px-4 sm:py-12 lg:px-10 lg:py-20">
      <div className="max-w-7xl mx-auto w-full px-0 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left side - Office Image */}
          <div className="relative w-full mb-8 lg:mb-0">
            <div className="rounded-none sm:rounded-xl overflow-hidden">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[3/2] min-h-[180px] sm:min-h-[240px] md:min-h-[320px]">
                <Image 
                  src="https://res.cloudinary.com/dujw4np0d/image/upload/f_auto,q_75,w_800/v1750913233/DeWatermark.ai_1750851940290-_2__iyr1bg.avif" 
                  srcSet="
                    https://res.cloudinary.com/dujw4np0d/image/upload/f_auto,q_75,w_400/v1750913233/DeWatermark.ai_1750851940290-_2__iyr1bg.avif 400w,
                    https://res.cloudinary.com/dujw4np0d/image/upload/f_auto,q_75,w_600/v1750913233/DeWatermark.ai_1750851940290-_2__iyr1bg.avif 600w,
                    https://res.cloudinary.com/dujw4np0d/image/upload/f_auto,q_75,w_800/v1750913233/DeWatermark.ai_1750851940290-_2__iyr1bg.avif 800w,
                    https://res.cloudinary.com/dujw4np0d/image/upload/f_auto,q_75,w_1000/v1750913233/DeWatermark.ai_1750851940290-_2__iyr1bg.avif 1000w
                  "
                  alt="Connecting Roots IT Office showing team collaboration and modern workspace environment" 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority
                  fetchPriority="high"
                  loading="eager"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 px-2 sm:px-8 lg:px-0">
            <header>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Why Choose{' '}
                <span className="text-red-500">Connecting Roots IT</span>
              </h2>
            </header>

            <ul className="space-y-2" role="list">
              {features.map((feature, index) => (
                <li key={index} className="flex sm:flex-row items-start gap-1 sm:gap-4">
                  {/* Red checkmark */}
                  <div className="flex-shrink-0 mt-1" aria-hidden="true">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white stroke-2" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
