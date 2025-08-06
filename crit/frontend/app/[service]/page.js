'use client';

import { useParams } from 'next/navigation';
import ServiceBlock from '@/app/components/ui/ServiceBlock';

export default function ServicePage() {
  const { service } = useParams();
  
  // Map URL-friendly service names to the ones used in services.json
  const serviceNameMap = {
    'implementation': 'SAP Implementation Services',
    'Rollout ': 'SAP Rollout  Services',
    'support': 'SAP Support Services',
    'upgrade': 'SAP Upgrade Services',
    'integration': 'SAP Integration Services',
    'migration': 'SAP Migration Services',
    'automation': 'SAP Automation Services',
    'testing': 'SAP Testing Services'
  };

  return (
    <div className="relative min-h-screen">
      {/* Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.critindia.com/",
                "url": "https://www.critindia.com/",
                "name": "critindia : Connecting roots of SAP",
                "isPartOf": { "@id": "https://www.critindia.com/#website" },
                "about": { "@id": "https://www.critindia.com/#organization" },
                "primaryImageOfPage": { "@id": "https://www.critindia.com/#primaryimage" },
                "image": { "@id": "https://www.critindia.com/#primaryimage" },
                "thumbnailUrl": "https://www.critindia.com/critindia.png",
                "datePublished": "2025-07-31T11:19:30+00:00",
                "dateModified": "2025-07-31T11:48:47+00:00",
                "description": "Crit India is in SAP implementation and support. Critindia provides SAP solution and services across entire SAP range of technology.",
                "breadcrumb": { "@id": "https://www.critindia.com/#breadcrumb" },
                "inLanguage": "en-US",
                "potentialAction": [{ "@type": "ReadAction", "target": ["https://www.critindia.com/"] }]
              },
              {
                "@type": "ImageObject",
                "inLanguage": "en-US",
                "@id": "https://www.critindia.com/#primaryimage",
                "url": "https://www.critindia.com/critindia.png",
                "contentUrl": "https://www.critindia.com/critindia.png",
                "width": 150,
                "height": 40,
                "caption": "critindia-logo"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.critindia.com/#breadcrumb",
                "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home" }]
              },
              {
                "@type": "WebSite",
                "@id": "https://www.critindia.com/#website",
                "url": "https://www.critindia.com/",
                "name": "critindia",
                "description": "Connecting roots of SAP",
                "publisher": { "@id": "https://www.critindia.com/#organization" },
                "potentialAction": [{
                  "@type": "SearchAction",
                  "target": { "@type": "EntryPoint", "urlTemplate": "https://www.critindia.com/?s={search_term_string}" },
                  "query-input": "required name=search_term_string"
                }],
                "inLanguage": "en-US"
              },
              {
                "@type": "Organization",
                "@id": "https://www.critindia.com/#organization",
                "name": "critindia",
                "url": "https://www.critindia.com/",
                "logo": {
                  "@type": "ImageObject",
                  "inLanguage": "en-US",
                  "@id": "https://www.critindia.com/#/schema/logo/image/",
                  "url": "https://www.critindia.com/critindia.png",
                  "contentUrl": "https://www.critindia.com/critindia.png",
                  "width": 150,
                  "height": 40,
                  "caption": "critindia-Connecting roots of SAP"
                },
                "image": { "@id": "https://www.critindia.com/#/schema/logo/image/" }
              }
            ]
          })
        }}
      />
      <div className="">
        <ServiceBlock serviceName={serviceNameMap[service] || service} />
      </div>
    </div>
  );
}
