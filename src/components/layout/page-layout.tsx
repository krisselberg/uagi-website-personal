"use client";

import { Header } from "./header";
import { Footer } from "./footer";
import { GlobalSpaceBackground } from "@/components/animations/GlobalSpaceBackground";
import { useEffect, useState } from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Check if space background already exists to prevent duplicates
    const existingBackground = document.getElementById('global-space-background');
    setIsMounted(!existingBackground);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Only render the background once */}
      {isMounted && <GlobalSpaceBackground />}
      <Header />
      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
