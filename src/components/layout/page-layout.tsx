"use client";

import { Header } from "./header";
import { Footer } from "./footer";
import { GlobalSpaceBackground } from "@/components/animations/GlobalSpaceBackground";
import { useEffect, useState } from "react";
import { SpaceAnimationProvider } from "@/context/SpaceAnimationContext";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Small delay to ensure DOM is fully loaded before checking
    const timer = setTimeout(() => {
      // Check if space background already exists to prevent duplicates
      const existingBackground = document.getElementById('global-space-background');
      setIsMounted(!existingBackground);
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <SpaceAnimationProvider initialSpeed={0.5}>
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
    </SpaceAnimationProvider>
  );
}
