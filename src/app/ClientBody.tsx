"use client";

import { useEffect } from "react";

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
      const metaTags = [
        { property: 'og:title', content: 'UniversalAGI' },
        { property: 'og:description', content: 'Latest AI Breakthroughs on top of your secure data' },
        { property: 'og:image', content: 'https://universalagi.netlify.app/message_thumbnail.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: 'https://universalagi.netlify.app' },
        { property: 'og:type', content: 'website' }
      ];
      
      // Add meta tags to the document head
      metaTags.forEach(tag => {
        // Check if the meta tag already exists
        const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
        if (!existingTag) {
          const meta = document.createElement('meta');
          meta.setAttribute('property', tag.property);
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
