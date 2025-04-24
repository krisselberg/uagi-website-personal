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
    
    // Removed the WhatsApp meta tag injection from here to avoid conflicts
    // const addWhatsAppMetaTags = () => { ... };
    // addWhatsAppMetaTags();

  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      {children}
    </body>
  );
}
