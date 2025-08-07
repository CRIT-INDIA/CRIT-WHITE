'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  CheckCircle, ArrowRight, Clock, Users, Shield, Zap,
  Database, BarChart3, Settings, Cpu, Globe, Lock, TrendingUp,
  Layers, Smartphone, RefreshCw, Target, Activity, Monitor,
  Lightbulb, Rocket, Brain, Star, DollarSign
} from 'lucide-react';

const ICONS = {
  'Strategic Alignment': Target,
  'Process Standardization': CheckCircle,
  'Data Centralization': Database,
  'Scalable Foundation': TrendingUp,
  'Cost Optimization': DollarSign,
  'Compliance Assurance': Shield,
  'Global Standardization': Globe,
  'Rapid Expansion': Rocket,
  'Local Adaptation': Settings,
  'Reduced Implementation Time': Clock,
  'Cost Efficiency': BarChart3,
  'Risk Mitigation': Shield,
  'Continuous Operations': Activity,
  'Performance Excellence': Zap,
  'Expert Guidance': Users,
  'Proactive Maintenance': RefreshCw,
  'Cost Predictability': DollarSign,
  'Technology Innovation': Lightbulb,
  'Technology Modernization': Cpu,
  'Enhanced User Experience': Smartphone,
  'Advanced Analytics': BarChart3,
  'Future-Proof Platform': TrendingUp,
  'Improved Performance': Zap,
  'Security Enhancement': Lock,
  'Unified Data Ecosystem': Database,
  'Real-Time Synchronization': Activity,
  'Enhanced Collaboration': Users,
  'Flexible Architecture': Layers,
  'Reduced Complexity': Settings,
  'Improved Decision Making': Brain,
  'Seamless Transition': ArrowRight,
  'Modern Platform Benefits': Star,
  'Data Integrity Assurance': Shield,
  'Scalable Infrastructure': TrendingUp,
  'Process Efficiency': Zap,
  'Intelligent Automation': Brain,
  'Real-Time Operations': Activity,
  'Cost Reduction': DollarSign,
  'Scalable Solutions': TrendingUp,
  'Enhanced Accuracy': CheckCircle,
  'Quality Assurance': CheckCircle,
  'Performance Optimization': Zap,
  'Accelerated Deployment': Rocket,
  'Compliance Validation': Shield,
  'User Experience Excellence': Smartphone
};

function getIconComponent(title) {
  const Icon = ICONS[title] || Star;
  return <Icon className="w-6 h-6" aria-hidden="true" />;
}

export default function BenefitsSection({ serviceName }) {
  const [benefits, setBenefits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeBenefit, setActiveBenefit] = useState(0);
  const benefitsRef = useRef(null);

  // Normalize service name for robust matching
  const normalizeServiceName = useCallback((name) => {
    if (!name) return '';
    return name
      .toLowerCase()
      .replace(/[-_]/g, ' ')
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/\broll\s*out\b/gi, 'rollout')
      .replace(/\s+/g, ' ')
      .trim();
  }, []);

  // Fetch benefits data
  useEffect(() => {
    if (!serviceName) {
      setBenefits([]);
      setIsLoading(false);
      return;
    }

    async function fetchBenefits() {
      setIsLoading(true);
      try {
        const response = await fetch('/json/data/benefits.json');
        if (!response.ok) throw new Error('Failed to fetch benefits data');
        const data = await response.json();

        const normalizedProp = normalizeServiceName(serviceName);
        const serviceKey = Object.keys(data.benefits).find(key =>
          normalizeServiceName(key) === normalizedProp
        );

        if (serviceKey && data.benefits[serviceKey]?.length > 0) {
          const formatted = data.benefits[serviceKey].map(benefit => ({
            title: benefit.title || 'Benefit',
            description: benefit.description || '',
            detailedDescription: benefit.detailedDescription || (benefit.description ? [benefit.description] : ['No detailed description available.']),
          }));
          setBenefits(formatted);
          setActiveBenefit(0);
        } else {
          setBenefits([{
            title: 'Benefits Coming Soon',
            description: 'We are currently preparing detailed benefits for this service. Please check back soon or contact us for more information.',
            detailedDescription: ['We are currently preparing detailed benefits for this service. Please check back soon or contact us for more information.']
          }]);
        }
      } catch (error) {
        setBenefits([{
          title: 'Service Unavailable',
          description: 'We are currently unable to load the benefits. Please try again later.',
          detailedDescription: ['We are currently unable to load the benefits. Please try again later.']
        }]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBenefits();
  }, [serviceName, normalizeServiceName]);

  // Auto-rotate benefit highlight every 5 seconds (pause on hover)
  useEffect(() => {
    if (benefits.length <= 1) return;

    let interval;
    function startRotation() {
      interval = setInterval(() => setActiveBenefit(prev => (prev + 1) % benefits.length), 5000);
    }
    startRotation();

    return () => clearInterval(interval);
  }, [benefits.length]);

  // Keyboard navigation for benefits list
  const handleKeyDown = (e) => {
    if (benefits.length <= 1) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
      scrollToActiveBenefit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveBenefit((prev) => (prev - 1 + benefits.length) % benefits.length);
      scrollToActiveBenefit();
    }
  };

  // Scroll focused benefit button into view if out of viewport
  const scrollToActiveBenefit = () => {
    const container = benefitsRef.current;
    if (!container) return;
    const activeButton = container.querySelector(`button[data-index="${activeBenefit}"]`);
    if (activeButton && typeof activeButton.scrollIntoView === 'function') {
      activeButton.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" aria-live="polite" aria-busy="true" role="status">
        <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-red-600" aria-label="Loading"></div>
      </div>
    );
  }

  return (
    <section
      id="benefits"
      className="relative pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-[#fff5f5] scroll-mt-4"
      aria-label={`Key benefits for ${serviceName || 'SAP Services'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Why Choose {serviceName ? serviceName.replace(/-/g, ' ').toUpperCase() : 'SAP SERVICES'}
            <svg className="mx-auto my-0" style={{marginTop: '-4px'}} width="210" height="18" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 18 Q 110 8, 215 14" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" fill="none"/>
                                <path d="M15 21 Q 120 15, 200 18" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none"/>
                            </svg>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the key benefits that make our {serviceName?.toLowerCase() || 'SAP services'} the preferred choice for enterprises worldwide.
          </p>
        </header>

        {/* Grid Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Detail Panel */}
          <article
            className="relative lg:sticky lg:top-8 bg-gradient-to-br from-red-50 via-white to-orange-50 p-8 rounded-3xl border-2 border-red-100 shadow-xl backdrop-blur-sm transition-shadow duration-300"
            aria-live="polite"
            aria-atomic="true"
            tabIndex={-1}
          >
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-red-300/20 to-pink-300/20 rounded-full blur-lg animate-pulse pointer-events-none"></div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-400/20 via-orange-400/20 to-red-400/20 animate-pulse pointer-events-none"></div>

            {/* Content */}
            {benefits[activeBenefit] && (
              <>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="p-2 rounded-full bg-red-200 text-red-600">
                    {getIconComponent(benefits[activeBenefit].title)}
                  </span>
                  <span>{benefits[activeBenefit].title}</span>
                </h3>
                <p className="text-gray-700 mb-6">{benefits[activeBenefit].description}</p>
                {benefits[activeBenefit].detailedDescription && (
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {benefits[activeBenefit].detailedDescription.map((desc, idx) => (
                      <li key={idx} className="mb-1">{desc}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </article>

          {/* Right List Panel */}
          <nav
            className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md max-h-[600px] overflow-y-auto space-y-4
            scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-red-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
            aria-label="Select a benefit"
            ref={benefitsRef}
            onKeyDown={handleKeyDown}
          >
            {benefits.map((benefit, index) => {
              const isActive = index === activeBenefit;
              return (
                <button
                  key={index}
                  data-index={index}
                  type="button"
                  onClick={() => setActiveBenefit(index)}
                  className={`flex items-center gap-4 w-full text-left p-4 rounded-xl transition-transform transform focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1
                    ${isActive
                    ? 'bg-red-500 text-white shadow-lg scale-105'
                    : 'bg-gray-50 text-gray-900 hover:bg-red-50'}
                  `}
                  aria-current={isActive ? 'true' : 'false'}
                  aria-label={`${benefit.title}: ${benefit.description}`}
                >
                  <span className={`shrink-0 ${isActive ? 'text-white' : 'text-red-500'}`}>
                    {getIconComponent(benefit.title)}
                  </span>
                  <div>
                    <h4 className="font-semibold">{benefit.title}</h4>
                    <p className="text-sm mt-1 line-clamp-2">{benefit.description}</p>
                  </div>
                  <ArrowRight className={`ml-auto w-5 h-5 ${isActive ? 'text-white' : 'text-red-400'}`} aria-hidden="true" />
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}
