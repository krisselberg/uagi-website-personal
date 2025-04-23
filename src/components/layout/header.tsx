"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
      className="fixed top-0 left-0 right-0 z-50 w-full py-3 md:py-4 bg-black/100 backdrop-blur-sm transition-all duration-300"
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
            src="/logos/uagi-logo.svg"
            alt="UniversalAGI Logo"
            width={160}
            height={32}
            className="w-[140px] md:w-[180px] lg:w-[200px] h-auto"
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation items - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
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

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 absolute left-0 right-0 p-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <Link 
            href="/about" 
            className="text-gray-100 hover:text-white transition-colors text-lg py-2 font-semibold border-b border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/request-demo" 
            className="text-gray-100 hover:text-white transition-colors text-lg py-2 font-semibold border-b border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Demo
          </Link>
          <Link 
            href="/#join-team" 
            className="text-gray-100 hover:text-white transition-colors text-lg py-2 font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Careers
          </Link>
        </div>
      )}
    </header>
  );
}
