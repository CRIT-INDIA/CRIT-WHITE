'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function TawkToWidget({ hideButtons }) {
  useEffect(() => {
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      iframe[title*="Tawk"] {
        transition: opacity 0.3s, transform 0.3s !important;
      }
      .tawk-button-container {
        transition: opacity 0.3s !important;
      }
      .hide-tawk-widget .tawk-button-container {
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className={`fixed bottom-24 right-8 z-40 transition-opacity duration-300 ${hideButtons ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <Script
        id="tawk-to-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.Tawk_API = window.Tawk_API || {};
            window.Tawk_LoadStart = new Date();
            
            (function(){
              var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/6890795160925719231fc7d5/1j1q5jq00';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `,
        }}
      />
    </div>
  );
}
