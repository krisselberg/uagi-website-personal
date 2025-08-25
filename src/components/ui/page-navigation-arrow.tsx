'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface PageNavigationArrowProps {
  nextPage?: string;
  nextPageTitle?: string;
}

export function PageNavigationArrow({ nextPage, nextPageTitle }: PageNavigationArrowProps) {
  const pathname = usePathname();
  
  // Default navigation flow
  const getDefaultNavigation = () => {
    switch (pathname) {
      case '/':
        return { href: '/about', title: 'About Us' };
      case '/about':
        return { href: '/case-studies', title: 'Case Studies' };
      case '/case-studies':
        return { href: '/request-demo', title: 'Request Demo' };
      case '/request-demo':
        return { href: '/', title: 'Home' };
      case '/enterprise':
        return { href: '/request-demo', title: 'Request Demo' };
      case '/government':
        return { href: '/request-demo', title: 'Request Demo' };
      case '/privacy-policy':
        return { href: '/', title: 'Home' };
      default:
        return { href: '/', title: 'Home' };
    }
  };

  const navigation = nextPage && nextPageTitle 
    ? { href: nextPage, title: nextPageTitle }
    : getDefaultNavigation();

  return (
    <div className="w-full flex justify-center py-12 relative">
      {/* Background gradient for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
      
      <Link 
        href={navigation.href}
        className="group relative flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-110"
      >
        {/* Next page hint */}
        <div className="mb-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-sm font-medium text-white/80">
            Next: {navigation.title}
          </span>
        </div>

        {/* Arrow container with glow effect */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-[#B3EBF2]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Main arrow button */}
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-white/30 group-hover:shadow-[0_8px_32px_rgba(179,235,242,0.3)]">
            {/* Arrow icon */}
            <svg 
              className="w-6 h-6 text-white/70 group-hover:text-[#B3EBF2] transition-all duration-300 transform group-hover:translate-y-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
          
          {/* Pulsing indicator */}
          <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-[#B3EBF2]/30 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-1500"></div>
        </div>

        {/* Scroll hint text */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-xs text-white/60 font-medium tracking-wider uppercase">
            Continue
          </span>
        </div>
      </Link>
    </div>
  );
}