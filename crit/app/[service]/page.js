// app/[service]/page.js

import ClientServiceBlock from './ClientServiceBlock';

// Provide static paths for all valid [service] routes
export async function generateStaticParams() {
  return [
    { service: 'implementation' },
    { service: 'rollout' },
    { service: 'support' },
    { service: 'upgrade' },
    { service: 'integration' },
    { service: 'migration' },
    { service: 'automation' },
    { service: 'testing' }
  ];
}

export default function ServicePage({ params }) {
  // You get { service } from params directly (server side)
  const { service } = params;

  return (
    <div className="relative min-h-screen">
      {/* Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              // ... your schema as before ...
            ]
          })
        }}
      />
      <div>
        {/* Pass the param as prop to the client component */}
        <ClientServiceBlock service={service} />
      </div>
    </div>
  );
}
