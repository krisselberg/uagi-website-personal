"use client";

import { useEffect } from "react";

interface MetaTag {
  property?: string;
  name?: string;
  content: string;
}

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
    
    // Add WhatsApp specific meta tags directly to the document head
    const addWhatsAppMetaTags = () => {
      // Create and add OpenGraph meta tags for WhatsApp compatibility
      const metaTags: MetaTag[] = [
        { property: 'og:site_name', content: 'UniversalAGI' },
        { property: 'og:title', content: 'UniversalAGI' },
        { property: 'og:description', content: 'Latest AI Breakthroughs on top of your secure data' },
        { property: 'og:image', content: 'https://universalagi.netlify.app/message_thumbnail.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'UniversalAGI' },
        { property: 'og:url', content: 'https://universalagi.netlify.app' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'UniversalAGI' },
        { name: 'twitter:description', content: 'Latest AI Breakthroughs on top of your secure data' },
        { name: 'twitter:image', content: 'https://universalagi.netlify.app/message_thumbnail.png' }
      ];
      
      // Add meta tags to the document head
      metaTags.forEach(tag => {
        // Check if the meta tag already exists
        let selector = '';
        if (tag.property) {
          selector = `meta[property="${tag.property}"]`;
        } else if (tag.name) {
          selector = `meta[name="${tag.name}"]`;
        }
        
        const existingTag = document.querySelector(selector);
        if (!existingTag && selector) {
          const meta = document.createElement('meta');
          if (tag.property) {
            meta.setAttribute('property', tag.property);
          } else if (tag.name) {
            meta.setAttribute('name', tag.name);
          }
          meta.setAttribute('content', tag.content);
          document.head.appendChild(meta);
        }
      });
    };
    
    // Add the meta tags
    addWhatsAppMetaTags();
  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      {children}
    </body>
  );
}
