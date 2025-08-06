import { Inter } from 'next/font/google';
import './contactus.css';

const inter = Inter({ subsets: ['latin'] });

export default function ContactLayout({ children }) {
  const structuredData = {
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
      }
    ]
  };

  return (
    <div className={inter.className}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </div>
  );
}
