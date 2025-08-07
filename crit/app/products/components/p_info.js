'use client';
import React, { useState } from 'react';
import { 
  Database, 
  ShoppingCart,
  MessageSquare, 
  Users, 
  BarChart3, 
  Plane, 
  Handshake,
  FileText,
  Building2,
  TrendingUp,
  Shield,
  Award,
  Phone,
  Mail,
  Calendar,
  Download,
  ChevronRight,
  Briefcase,
  Settings,
  DollarSign,
  Clock
} from 'lucide-react';

const SAPProductsInfo = () => {
  const [selectedProduct, setSelectedProduct] = useState('sap-s4hana');

  // Custom styles for animations
  const animationStyles = `
    /* Hide scrollbar for all browsers */
    * {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* Internet Explorer 10+ */
    }
    *::-webkit-scrollbar {
      display: none; /* WebKit */
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideInLeft {
      from { transform: translateX(-20px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideInUp {
      from { transform: translateY(50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes fadeInUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    /* Educational animations */
    @keyframes knowledgeGlow {
      0%, 100% { box-shadow: 0 0 5px rgba(220, 38, 38, 0.3); }
      50% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.6); }
    }
    
    @keyframes insightPulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.8; }
      100% { transform: scale(1); opacity: 1; }
    }
    
    @keyframes learningFlow {
      0% { transform: translateY(0) rotate(0deg); }
      25% { transform: translateY(-2px) rotate(1deg); }
      75% { transform: translateY(2px) rotate(-1deg); }
      100% { transform: translateY(0) rotate(0deg); }
    }
    
    @keyframes dataVisualization {
      0% { opacity: 0; transform: scale(0.8); }
      50% { opacity: 0.7; transform: scale(1.1); }
      100% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes strategicThinking {
      0% { transform: translateX(0); }
      25% { transform: translateX(3px); }
      75% { transform: translateX(-3px); }
      100% { transform: translateX(0); }
    }
    
    .animate-fade-in {
      animation: fadeIn 0.8s ease-out;
    }
    .animate-slide-in-left {
      animation: slideInLeft 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .animate-slide-in-right {
      animation: slideInRight 0.8s ease-out;
    }
    .animate-slide-in-up {
      animation: slideInUp 0.6s ease-out;
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.5s ease-out forwards;
      opacity: 0;
    }
    
    
    /* Educational animation classes */
    .knowledge-glow {
      animation: knowledgeGlow 3s ease-in-out infinite;
    }
    
    .insight-pulse {
      animation: insightPulse 2s ease-in-out infinite;
    }
    
    .learning-flow {
      animation: learningFlow 4s ease-in-out infinite;
    }
    
    .data-visualization {
      animation: dataVisualization 1.5s ease-out;
    }
    
    .strategic-thinking {
      animation: strategicThinking 3s ease-in-out infinite;
    }
    
    /* Interactive learning effects */
    .learning-highlight {
      transition: all 0.3s ease;
    }
    
    .capability-item {
      transition: all 0.4s ease;
      position: relative;
    }
    
    .outcome-item {
      transition: all 0.4s ease;
      position: relative;
    }
  `;

  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = animationStyles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const products = [
    {
      id: 'sap-s4hana',
      name: 'SAP S/4HANA',
      subtitle: 'Next-Generation Intelligent ERP Suite',
      category: 'Enterprise Resource Planning',
      icon: <Database className="w-8 h-8 text-blue-600" />,
    executiveSummary: 'SAP S/4HANA acts as the intelligent core of your organization, like a central nervous system providing real-time visibility and control across all business functions. Built on the foundation of the SAP HANA in-memory platform, it delivers unparalleled speed and efficiency, enabling you to process vast amounts of data instantly. This allows for data-driven decision-making, proactive problem-solving, and the automation of a wide range of tasks, freeing up resources for strategic initiatives. Beyond enhanced performance, SAP S/4HANA simplifies your IT landscape, reducing complexity and costs. More importantly, it empowers comprehensive digital transformation by providing the platform for adopting new technologies like AI, machine learning, and IoT, ultimately driving innovation and competitive advantage.',
    keyCapabilities: [
        'Real-time financial planning and analysis with embedded analytics',
        'Intelligent automation through machine learning and AI integration',
        'Simplified data architecture reducing system complexity by 75%',
        'Cloud-first architecture with flexible deployment options',
        'Advanced supply chain optimization and demand planning',
        'Integrated compliance and risk management frameworks'
      ],
      businessOutcomes: [
        'Reduce time-to-insight from days to minutes with real-time analytics',
        'Decrease operational costs by 15-25% through process optimization',
        'Accelerate month-end close processes by up to 50%',
        'Improve cash flow management with real-time financial visibility',
        'Enable faster decision-making with predictive analytics capabilities'
      ],
      technicalSpecs: {
        deployment: 'Cloud | On-Premise | Hybrid',
        integration: 'REST APIs, SAP Cloud Platform Integration',
        security: 'SOC 2 Type II, ISO 27001, GDPR Compliant',
        availability: '99.9% SLA with 24/7 support'
      },
      investmentMetrics: {
        roi: '145% over 3 years',
        paybackPeriod: '18 months',
        costReduction: '20-30% in operational costs',
        productivity: '25% improvement in employee productivity'
      },
      industryFocus: ['Manufacturing', 'Financial Services', 'Retail', 'Healthcare', 'Oil & Gas', 'Utilities'],
      clientProfile: 'Mid-market to Enterprise (300+ employees)',
      implementationTime: '6-18 months depending on complexity'
    },
    {
      id: 'sap-ariba',
      name: 'SAP Ariba',
      subtitle: 'Global Procurement and Supply Chain Network',
      category: 'Procurement Excellence',
      icon: <Handshake className="w-8 h-8 text-white" />,
      executiveSummary: 'SAP Ariba provides a comprehensive platform connecting your organization to the world\'s largest business network, facilitating strategic procurement, deeper supplier collaboration, and optimized supply chain management. Going beyond simple transactions, Ariba offers tools for strategic sourcing, contract management, and spend analysis, empowering you to negotiate better deals and drive cost savings. The secure and collaborative platform fosters stronger relationships with your trading partners by streamlining communication, improving transparency, and mitigating risk throughout the supply chain. Ultimately, SAP Ariba enables you to build a more resilient, efficient, and agile supply chain, driving significant value for your business.',
      keyCapabilities: [
        'Strategic sourcing with AI-powered supplier recommendations',
        'Contract lifecycle management with automated compliance monitoring',
        'Dynamic supplier risk assessment and performance analytics',
        'Guided buying experiences with intelligent catalog management',
        'Automated invoice processing and payment optimization',
        'Supplier network analytics and market intelligence'
      ],
      businessOutcomes: [
        'Achieve 10-20% reduction in procurement costs through better sourcing',
        'Improve supplier performance by 30% with enhanced collaboration',
        'Reduce contract cycle times by 40% with automated workflows',
        'Enhance compliance rates to 95%+ through policy enforcement',
        'Accelerate innovation through strategic supplier partnerships'
      ],
      technicalSpecs: {
        deployment: 'Cloud-based SaaS Platform',
        integration: 'SAP and third-party ERP systems',
        security: 'Multi-tenant architecture with enterprise-grade security',
        availability: '99.9% uptime with global data centers'
      },
      investmentMetrics: {
        roi: '300% over 3 years',
        paybackPeriod: '12 months',
        costReduction: '15-25% in procurement spend',
        productivity: '40% faster procurement cycles'
      },
      industryFocus: ['Manufacturing', 'Government', 'Healthcare', 'Technology', 'Professional Services'],
      clientProfile: 'Mid-market to Enterprise (200+ employees)',
      implementationTime: '3-8 months depending on scope'
    },
    {
      id: 'sap-successfactors',
      name: 'SAP SuccessFactors',
      subtitle: 'Comprehensive Human Capital Management Suite',
      category: 'Human Resources Technology',
      icon: <Users className="w-8 h-8 text-blue-600" />,
      executiveSummary: 'SAP SuccessFactors revolutionizes human resources, transforming it into a strategic business driver through intelligent talent management, comprehensive workforce analytics, and engaging employee experience solutions. Going beyond traditional HR processes, SuccessFactors empowers you to align your people strategy directly with your overarching business objectives. By providing deep insights into your workforce, you can make data-driven decisions to attract, retain, and develop top talent in today\'s fiercely competitive market. Furthermore, SuccessFactors fosters a culture of continuous improvement by enabling personalized employee experiences, promoting collaboration, and driving increased engagement, ultimately leading to higher productivity and business success.',
      keyCapabilities: [
        'AI-powered talent acquisition and candidate matching',
        'Continuous performance management with goal alignment',
        'Personalized learning and development pathways',
        'Compensation planning and equity management',
        'Succession planning with talent mobility insights',
        'Advanced workforce analytics and predictive modeling'
      ],
      businessOutcomes: [
        'Reduce time-to-hire by 50% with intelligent recruiting tools',
        'Increase employee engagement scores by 25% through personalized experiences',
        'Improve talent retention rates by 30% with proactive management',
        'Accelerate leadership development with succession planning',
        'Optimize workforce costs through predictive analytics'
      ],
      technicalSpecs: {
        deployment: 'Cloud-native SaaS Platform',
        integration: 'SAP ERP, Workday, Oracle HCM, and 500+ connectors',
        security: 'ISO 27001, SOC 2 Type II, Privacy Shield certified',
        availability: '99.9% SLA with regional data residency'
      },
      investmentMetrics: {
        roi: '225% over 3 years',
        paybackPeriod: '15 months',
        costReduction: '20-35% in HR operational costs',
        productivity: '30% improvement in HR team efficiency'
      },
      industryFocus: ['Technology', 'Financial Services', 'Manufacturing', 'Healthcare', 'Public Sector'],
      clientProfile: 'Mid-market to Enterprise (100+ employees)',
      implementationTime: '3-10 months depending on modules'
    },
    {
      id: 'sap-commerce',
      name: 'SAP Commerce Cloud',
      subtitle: 'Omnichannel Digital Commerce Platform',
      category: 'Digital Experience',
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      executiveSummary: 'SAP Commerce Cloud empowers businesses to create and deliver personalized, seamless, and engaging shopping experiences across all touchpoints, from web and mobile to in-store and beyond. Leveraging advanced AI-driven personalization capabilities, Commerce Cloud enables you to understand individual customer needs and preferences, delivering tailored product recommendations, targeted promotions, and relevant content. With robust B2B commerce functionalities, it supports complex business scenarios, including self-service portals, contract pricing, and streamlined order management. Ultimately, SAP Commerce Cloud not only drives revenue growth and increases customer loyalty but also provides the agility and scalability needed to adapt to the ever-evolving demands of the modern commerce landscape.',
      keyCapabilities: [
        'Omnichannel experience management with unified customer profiles',
        'AI-powered personalization and product recommendations',
        'Advanced B2B commerce with account-based selling',
        'Headless commerce architecture for flexible front-end experiences',
        'Order orchestration and inventory management across channels',
        'Real-time customer service integration and support tools'
      ],
      businessOutcomes: [
        'Increase conversion rates by 20-40% through personalization',
        'Reduce time-to-market for new products by 60%',
        'Improve customer lifetime value by 35% with enhanced experiences',
        'Optimize inventory turnover with intelligent demand forecasting',
        'Enable rapid international expansion with localized commerce'
      ],
      technicalSpecs: {
        deployment: 'Cloud-native with microservices architecture',
        integration: 'SAP ERP, third-party systems via APIs',
        security: 'PCI DSS compliant, enterprise-grade security',
        availability: '99.9% SLA with auto-scaling capabilities'
      },
      investmentMetrics: {
        roi: '280% over 3 years',
        paybackPeriod: '14 months',
        costReduction: '25-40% in commerce platform costs',
        productivity: '50% faster campaign deployment'
      },
      industryFocus: ['Retail', 'Consumer Goods', 'Manufacturing', 'B2B Wholesale', 'Fashion'],
      clientProfile: 'Mid-market to Enterprise (50+ employees)',
      implementationTime: '3-12 months depending on complexity'
    },
    {
      id: 'sap-businessobjects',
      name: 'SAP BusinessObjects',
      subtitle: 'Enterprise Business Intelligence Platform',
      category: 'Analytics & Intelligence',
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      executiveSummary: 'SAP BusinessObjects provides a complete suite of business intelligence tools, empowering organizations to unlock the full potential of their data and transform it into actionable insights. Through self-service analytics capabilities, BusinessObjects enables users across the organization to explore data independently and answer their own business questions. It also offers robust enterprise reporting features for creating standardized reports and dashboards, along with advanced visualization options for presenting data in compelling and easily understandable formats. By democratizing access to data while maintaining robust governance and security controls, SAP BusinessObjects ensures that everyone has the information they need to make better decisions, driving improved business performance.',
      keyCapabilities: [
        'Self-service analytics with drag-and-drop report building',
        'Enterprise-grade reporting with pixel-perfect formatting',
        'Interactive dashboards with real-time data visualization',
        'Advanced analytics including predictive and statistical modeling',
        'Mobile BI with offline capabilities for field users',
        'Governed data access with role-based security controls'
      ],
      businessOutcomes: [
        'Reduce report generation time by 70% with self-service capabilities',
        'Improve decision-making speed by 40% with real-time insights',
        'Increase data adoption across the organization by 60%',
        'Optimize operational efficiency through performance analytics',
        'Enable regulatory compliance with automated reporting'
      ],
      technicalSpecs: {
        deployment: 'Cloud | On-Premise | Hybrid environments',
        integration: 'SAP and non-SAP data sources, REST APIs',
        security: 'Row-level security, LDAP/SSO integration',
        availability: '99.9% SLA with disaster recovery options'
      },
      investmentMetrics: {
        roi: '190% over 3 years',
        paybackPeriod: '16 months',
        costReduction: '30-45% in reporting costs',
        productivity: '60% improvement in analyst productivity'
      },
      industryFocus: ['Financial Services', 'Manufacturing', 'Healthcare', 'Government', 'Telecommunications'],
      clientProfile: 'Mid-market to Enterprise (250+ employees)',
      implementationTime: '3-8 months depending on scope'
    },
    {
      id: 'sap-concur',
      name: 'SAP Concur',
      subtitle: 'Travel, Expense & Invoice Management',
      category: 'Financial Operations',
      icon: <Plane className="w-8 h-8 text-white" />,
      executiveSummary: 'SAP Concur offers a cloud-based solution that simplifies and automates the entire travel and expense management process for organizations of all sizes, worldwide. By leveraging intelligent automation, Concur streamlines expense reporting, automates invoice processing, and ensures compliance with company policies and regulatory requirements. The platform provides comprehensive audit capabilities, offering complete visibility and control over business spending, enabling organizations to identify potential cost savings and mitigate risks. From booking travel to submitting expenses and reimbursing employees, SAP Concur provides an integrated and user-friendly experience that increases efficiency, reduces administrative overhead, and improves financial transparency.',
      keyCapabilities: [
        'Automated expense reporting with receipt capture and processing',
        'Integrated travel booking with policy compliance monitoring',
        'Invoice management with automated approval workflows',
        'Advanced analytics and spend visibility dashboards',
        'Mobile-first experience with offline capabilities',
        'Risk management and duty of care for traveling employees'
      ],
      businessOutcomes: [
        'Reduce expense processing costs by 65% through automation',
        'Improve policy compliance rates to 98% with intelligent controls',
        'Accelerate expense reimbursement cycles by 75%',
        'Achieve 15-25% savings in travel spending through optimization',
        'Enhance employee satisfaction with streamlined processes'
      ],
      technicalSpecs: {
        deployment: 'Cloud-based SaaS with global data centers',
        integration: 'ERP systems, credit card feeds, travel agencies',
        security: 'SOC 2 Type II, ISO 27001, GDPR compliant',
        availability: '99.9% SLA with 24/7 support coverage'
      },
      investmentMetrics: {
        roi: '385% over 3 years',
        paybackPeriod: '8 months',
        costReduction: '50-70% in T&E processing costs',
        productivity: '80% reduction in manual processing time'
      },
      industryFocus: ['Professional Services', 'Technology', 'Manufacturing', 'Financial Services', 'Healthcare'],
      clientProfile: 'Small to Enterprise (25+ employees)',
      implementationTime: '3-5 months depending on complexity'
    }
  ];

  const currentProduct = products.find(p => p.id === selectedProduct);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white" >
      {/* Executive Header */}
      <div className="border-b border-red-200 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              
              <div>
                <span>Contact Us</span>
                <h1 className="text-2xl font-bold text-gray-900">
                  SAP Enterprise Solutions Portfolio
                </h1>
                <p className="text-lg text-gray-700">
                  Strategic Technology Solutions for Digital Transformation
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
             <a href="/contact"> <button
                className="flex items-center space-x-2 border border-red-300 text-black px-6 py-3 rounded-lg transition-colors group hover:text-white hover:bg-red-600 hover:border-red-600"
               >
                <Calendar className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                <span>Schedule Meeting</span>
              </button></a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 overflow-x-auto">
          {/* Product Navigation */}
          <div className="relative lg:col-span-1 lg:sticky top-8">
            <div className="rounded-lg shadow-sm border border-red-200 p-6 bg-white hover:shadow-lg transition-all duration-300 ease-out" >
              <h3 className="text-lg font-semibold text-red-600 mb-4">Solutions Portfolio</h3>
              <nav className="space-y-2">
                {products.map((product, index) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-300 transform hover:translate-x-2 hover:shadow-md ${
                      selectedProduct === product.id
                        ? 'bg-red-100 text-red-600 border border-red-300 scale-105 shadow-md'
                        : 'hover:bg-red-50 hover:text-gray-900 text-gray-900'
                    }`}
                  >
                    <div className={`${selectedProduct === product.id ? 'text-red-600' : 'text-red-400'}`}>
                      {React.cloneElement(product.icon, { className: 'w-8 h-8', color: selectedProduct === product.id ? '#dc2626' : '#f87171' })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-700 truncate">{product.category}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-red-300" />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-3">
            {currentProduct && (
              <div className="space-y-8" key={selectedProduct}>
                {/* Product Header */}
                <div className="rounded-lg mt-10 mr-10 shadow-sm border border-red-200 p-8 bg-red-100 hover:shadow-lg transition-all duration-300 transform knowledge-glow">
                  <div className="flex items-start space-x-4">
                    <div className="text-red-600">
                      {React.cloneElement(currentProduct.icon, { className: 'w-8 h-8', color: '#dc2626' })}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black mb-2">
                        {currentProduct.name}
                      </h2>
                      <p className="text-lg text-gray-900 mb-4">
                        {currentProduct.subtitle}
                      </p>
                      <div className="flex flex-col items-start space-y-2 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0 text-sm text-gray-900">
                        <span className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4 text-red-400" />
                          <span>{currentProduct.category}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Users className="w-4 h-4 text-red-400" />
                          <span>{currentProduct.clientProfile}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-red-400" />
                          <span>{currentProduct.implementationTime}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Executive Summary */}
                <div className="rounded-lg shadow-sm border border-red-200 p-8 bg-white hover:shadow-lg transition-all duration-300 transform ">
                  <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-red-500 learning-flow" />
                    <span>Executive Summary</span>
                  </h3>
                  <p className="text-gray-900 leading-relaxed text-lg text-justify">
                    {currentProduct.executiveSummary}
                  </p>
                </div>

                {/* Key Capabilities & Business Outcomes */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="rounded-lg shadow-sm border border-red-200 p-8 bg-white hover:shadow-lg transition-all duration-300 transform ">
                    <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center space-x-2">
                      <Settings className="w-5 h-5 text-red-500" />
                      <span>Key Capabilities</span>
                    </h3>
                    <div className="space-y-4">
                      {currentProduct.keyCapabilities.map((capability, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 insight-pulse"></div>
                          <span className="text-gray-900 transition-colors duration-200 capability-item">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg shadow-sm border border-red-200 p-8 bg-white hover:shadow-lg transition-all duration-300 transform">
                    <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-red-500" />
                      <span>Business Outcomes</span>
                    </h3>
                    <div className="space-y-4">
                      {currentProduct.businessOutcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 insight-pulse"></div>
                          <span className="text-gray-900 transition-colors duration-200 outcome-item">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Investment Metrics */}
                <div className="rounded-lg shadow-sm border border-red-200 p-8 sm:block hidden bg-white hover:shadow-lg transition-all duration-300 transform data-visualization">
                  <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center space-x-2 flex-row">
                    <DollarSign className="w-5 h-5 text-red-500 strategic-thinking" />
                    <span>Investment Analysis</span>
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="text-center">
                      <div className="font-bold text-red-600 mb-1 text-xs sm:text-base">
                        {currentProduct.investmentMetrics.roi}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-600 mb-1 text-xs sm:text-base">
                        {currentProduct.investmentMetrics.paybackPeriod}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-600 mb-1 text-xs sm:text-base">
                        {currentProduct.investmentMetrics.costReduction}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-600 mb-1 text-xs sm:text-base">
                        {currentProduct.investmentMetrics.productivity}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 mt-1">
                    <div className="text-xs text-gray-700 text-center">Total ROI</div>
                    <div className="text-xs text-gray-700 text-center">Payback Period</div>
                    <div className="text-xs text-gray-700 text-center">Cost Reduction</div>
                    <div className="text-xs text-gray-700 text-center">Productivity Gain</div>
                  </div>
                </div>

                {/* Technical Specifications & Industries */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="rounded-lg shadow-sm border border-red-200 p-8 bg-white hover:shadow-lg transition-all duration-300 transform ">
                    <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-red-500" />
                      <span>Technical Specifications</span>
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">Deployment Options</div>
                        <div className="text-gray-900">{currentProduct.technicalSpecs.deployment}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Integration Capabilities</div>
                        <div className="text-gray-900">{currentProduct.technicalSpecs.integration}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Security & Compliance</div>
                        <div className="text-gray-900">{currentProduct.technicalSpecs.security}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Service Level Agreement</div>
                        <div className="text-gray-900">{currentProduct.technicalSpecs.availability}</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg shadow-sm border border-red-200 p-8 sm:block hidden bg-white hover:shadow-lg transition-all duration-300 transform ">
                    <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center space-x-2">
                      <Building2 className="w-5 h-5 text-red-500" />
                      <span>Industry Applications</span>
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {currentProduct.industryFocus.map((industry, index) => (
                        <div key={index} className="flex items-center space-x-2 p-3 rounded-lg learning-highlight">
                          <Award className="w-4 h-4 text-red-500 insight-pulse" />
                          <span className="text-sm text-gray-900">{industry}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Executive Contact Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-red-600">
              Executive Consultation Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Partner with our enterprise solution architects to develop a strategic roadmap tailored to your business objectives and digital transformation goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg p-4 sm:p-8 text-center break-words group bg-white border border-red-200 shadow-sm learning-highlight">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600">
                <Phone className="w-8 h-8 text-white learning-flow" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Strategic Advisory</h3>
              <p className="text-gray-700 mb-6 text-justify">
                One-on-one consultation with certified solution architects to assess your enterprise requirements and develop implementation strategies.
              </p>
            </div>
            
            <div className="rounded-lg p-4 sm:p-8 text-center break-words group bg-white border border-red-200 shadow-sm learning-highlight" >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600">
                <FileText className="w-8 h-8 text-white strategic-thinking" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Business Case Development</h3>
              <p className="text-gray-700 mb-6 text-justify">
                Comprehensive ROI analysis, risk assessment, and business case documentation to support your technology investment decisions.
              </p>
            </div>
            
            <div className="rounded-lg p-4 sm:p-8 text-center break-words group bg-white border border-red-200 shadow-sm learning-highlight">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:bg-red-600">
                <Award className="w-8 h-8 text-white insight-pulse" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Proof of Concept</h3>
              <p className="text-gray-700 mb-6 text-justify">
                Customized demonstration environments and pilot programs to validate solution fit and demonstrate business value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAPProductsInfo;