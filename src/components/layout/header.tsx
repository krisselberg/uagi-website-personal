"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress as a value between 0 and 1
      // Fully visible after scrolling 50px
      const progress = Math.min(1, window.scrollY / 50);
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Call handler right away to check initial scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Calculate dynamic styles based on scroll progress
  const borderOpacity = scrollProgress * 0.3; // Reduced from 0.6 to 0.3 for subtlety
  const shadowOpacity = scrollProgress * 0.08; // Slightly reduced from 0.1
  
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 w-full py-4 bg-black/100 backdrop-blur-sm transition-all duration-300"
      style={{
        // Remove hard border and replace with just a shadow for a softer look
        boxShadow: `0 4px 12px -6px rgba(60, 70, 80, ${shadowOpacity}), 0 1px 3px rgba(75, 85, 99, ${borderOpacity})`,
        // The first shadow has vertical offset, negative spread for subtle edge glow
        // The second shadow is thinner for a slight edge definition
      }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/universalagi.png"
            alt="UniversalAGI Logo"
            width={200}
            height={40}
            priority
          />
        </Link>

        {/* Navigation items */}
        <div className="flex items-center space-x-6">
          <Link href="/about" className="text-gray-100 hover:text-white transition-colors text-base font-semibold">
            About Us
          </Link>
          <Link href="/request-demo" className="text-gray-100 hover:text-white transition-colors text-base font-semibold">
            Demo
          </Link>
          <Link href="/#join-team" className="text-gray-100 hover:text-white transition-colors text-base font-semibold">
            Careers
          </Link>
        </div>
      </div>
    </header>
  );
}
