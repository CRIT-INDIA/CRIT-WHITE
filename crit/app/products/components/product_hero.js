"use client";
import Image from "next/image";
import {
  ChevronRight,
  Users,
  BookOpen,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  Layers,
  Database,
  Globe,
  X,
} from "lucide-react";
import React from "react"; // Added missing import for React

const services = [
  {
    id: 1,
    name: "SAP S/4HANA",
    slug: "sap-s4hana-products",
    tagline: "The Future of ERP",
    description:
      "Get hands-on with SAP's integrated, intelligent, next-generation ERP platform for modern businesses. Learn core and advanced modules.",
    features: [
      "Finance & Controlling (FI/CO)",
      "Supply Chain Management",
      "Embedded Analytics & Reporting",
      "Cloud and On-prem Deployment Options",
    ],
    icon: <Database className="w-14 h-14 lg:w-16 lg:h-16 transition-colors" />,
    modules: 12,
    certification: "SAP S/4HANA Certified",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    name: "SAP Ariba",
    slug: "sap-ariba-products",
    tagline: "Procurement Excellence",
    description:
      "Master collaborative procurement, supplier management, and sourcing with SAP Ariba's cloud-based solutions.",
    features: [
      "Supplier & Contract Management",
      "Guided Sourcing",
      "Spend Analysis",
      "Procure-to-Pay Automation",
    ],
    icon: <TrendingUp className="w-14 h-14 lg:w-16 lg:h-16 transition-colors" />,
    modules: 8,
    certification: "SAP Ariba Certified",
    difficulty: "Beginner",
  },
  {
    id: 3,
    name: "SAP SuccessFactors",
    slug: "sap-successfactors-products",
    tagline: "Human Capital Revolution",
    description:
      "Revolutionize HR management—from recruiting to performance—with SAP's leading cloud HCM suite.",
    features: [
      "Core HR / Employee Central",
      "Talent & Performance Management",
      "Learning & Development",
      "HR Analytics & Workforce Planning",
    ],
    icon: <Users className="w-14 h-14 lg:w-16 lg:h-16 transition-colors" />,
    modules: 10,
    certification: "SAP SuccessFactors Certified",
    difficulty: "Intermediate",
  },
  {
    id: 5, // Changed id to 5 for SAP BusinessObjects
    name: "SAP BusinessObjects",
    slug: "sap-businessobjects-products",
    tagline: "Data Intelligence",
    description:
      "Gain expertise in SAP BusinessObjects for enterprise reporting, data visualization, and business intelligence.",
    features: [
      "Crystal Reports & Web Intelligence",
      "Interactive Dashboards",
      "Self-Service BI",
      "Semantic Layer Design",
    ],
    icon: <Layers className="w-14 h-14 lg:w-16 lg:h-16 transition-colors" />,
    modules: 7,
    certification: "SAP BusinessObjects Certified",
    difficulty: "Intermediate",
  },
  {
    id: 4,
    name: "SAP Hybris",
    slug: "sap-hybris-products",
    tagline: "Commerce Innovation",
    description:
      "Create seamless omnichannel e-commerce experiences and customer journeys using the SAP Commerce platform.",
    features: [
      "Product Content Management",
      "Omnichannel Commerce",
      "Personalization & Promotions",
      "API-First Architecture",
    ],
    icon: <Globe className="w-14 h-14 lg:w-16 lg:h-16 transition-colors" />,
    modules: 9,
    certification: "SAP Commerce Certified",
    difficulty: "Advanced",
  },
  {
    id: 6,
    name: "SAP Concur",
    slug: "sap-concur-products",
    tagline: "Expense Simplified",
    description:
      "Learn to automate travel expense management, streamline compliance and expense management using SAP Concur.",
    features: [
      "Expense & Invoice Automation",
      "Travel Booking Integration",
      "Policy Compliance",
      "Mobile Receipt Capture",
    ],
    icon: <Target className="w-14 h-14 lg:w-16 lg:h-16 transition-colors" />,
    modules: 5,
    certification: "SAP Concur Certified",
    difficulty: "Beginner",
  }
];

export default function Home() {
  return (
    <div className="min-h-* flex flex-col justify-center p-5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-16 gap-8">
        {/* Left: Heading */}
        <div className="flex flex-col items-center lg:items-start justify-center">
          {/* Logo + Title section - optional, can uncomment and add logo if desired */}
          {/* <Image src="/logo.svg" width={180} height={100} alt="Logo" className="mb-8" />*/}
          <h1 className="text-4xl md:text-5xl font-extrabold text-black text-center lg:text-left mb-4">
            LEARN MORE<br /> ABOUT OUR <br />
            <span className="text-red-600">PRODUCTS</span> {/* Using your original red color */}
          </h1>
        </div>
        {/* Right: Product Grid */}
        {/* Keeping lg:grid-cols-4 as per your provided code */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* SAP S/4HANA card - spans 2 rows */}
          <div
            className="service-card card-hover-gradient group relative bg-white border border-[#d9dbe7] flex flex-col h-full items-center shadow rounded-2xl transition-all duration-400 min-h-[200px] p-4 md:p-7 row-span-2 col-span-1 max-w-xs w-[90%] mx-auto focus:outline-none overflow-hidden hover:z-20 transform translate-y-0 hover:-translate-y-2 hover:transition-transform hover:duration-500 hover:ease-in-out"
            style={{ gridRow: "span 2 / span 2" }}
          >
            <div className="flex flex-col justify-end items-center mt-auto mb-1 transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
              <div className="mb-2 text-red-600 group-hover:text-red-600 group-hover:drop-shadow-xl transition-all duration-500 ease-in-out group-hover:scale-105">
                {React.cloneElement(services[0].icon, { className: 'w-12 h-12' })}
              </div>
              <h4 className="text-red-600 group-hover:text-red-600 text-lg font-bold text-center mb-0 leading-tight uppercase transition-colors duration-500 ease-in-out">
                {services[0].name}
              </h4>
              <div className="text-[#292359] group-hover:text-white/90 text-[0.7rem] text-center uppercase font-bold opacity-80 tracking-wide mb-1 transition-colors duration-500 ease-in-out">
                {services[0].tagline}
              </div>
              <div className="service-desc text-[#777094] group-hover:text-white/85 text-xs font-medium mt-1 text-center leading-snug">
                {services[0].description}
              </div>
            </div>
          </div>
          {/* Other cards */}
          {services.slice(1).map((service, i) => {
            const isBusinessObjects = service.name === "SAP BusinessObjects";
            return (
              <div
                key={service.name}
                className={`service-card card-hover-gradient group rounded-2xl bg-white border border-[#d9dbe7] flex flex-col h-full items-center shadow transition-all duration-600 p-3 md:p-7 max-w-xs w-[90%] mx-auto focus:outline-none overflow-hidden transform translate-y-0 hover:-translate-y-2 hover:transition-transform hover:duration-500 hover:ease-in-out ${
                  isBusinessObjects ? "row-span-2 col-span-1" : ""
                }`}
                style={isBusinessObjects ? { gridRow: "span 2 / span 2" } : {}}
              >
                <div className="flex flex-col justify-end items-center mt-auto mb-1 transition-transform duration-500 ease-linear group-hover:-translate-y-2">
                  <div className="mb-2 text-red-600 group-hover:text-red-600 group-hover:drop-shadow-xl transition-all duration-500 ease-in-out">
                    {React.cloneElement(service.icon, { className: 'w-12 h-12' })}
                  </div>
                  <h4 className="text-red-600 group-hover:text-red-600 text-lg font-bold text-center mb-0 leading-tight uppercase transition-colors duration-500 ease-in-out">
                    {service.name}
                  </h4>
                  <div className="text-[#292359]  group-hover:text-white/90 text-[0.7rem] text-center uppercase font-bold opacity-80 tracking-wide mb-1 transition-colors duration-500 ease-in-out">
                    {service.tagline}
                  </div>
                  <div className="service-desc text-[#777094] group-hover:text-white/85 text-xs font-medium mt-1 text-center leading-snug">
                    {service.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Fade effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      {/* Custom styling for hover transitions and icon color */}
      <style jsx global>{`
        .service-card .lucide {
          stroke: #380d4a;
          transition: stroke 0.25s;
        }
        .service-card:hover .lucide {
          stroke: #ef4444;
        }
        .service-card:hover h4, .service-card:hover .tagline {
          color: #fff !important;
        }
        .service-desc {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.55s cubic-bezier(.36,1.02,.39,.98),
            transform 0.55s cubic-bezier(.36,1.02,.39,.98),
            color 0.35s ease;
          will-change: opacity, transform;
          pointer-events: none;
        }
        .service-card:hover .service-desc,
        .service-card:focus .service-desc,
        .service-card:focus-visible .service-desc,
        .service-card:active .service-desc,
        .service-card:focus-within .service-desc,
        .group:hover .service-desc {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
      `}</style>
    </div>
  );
}
