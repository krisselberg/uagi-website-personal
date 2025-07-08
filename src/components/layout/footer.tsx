import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 md:py-10 bg-black/90 border-t border-gray-800">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-2 mb-8 md:mb-6">
          {/* Logo and company info */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4 md:mb-6">
              <Image
                src="/logos/uagi-logo.svg"
                alt="UniversalAGI Logo"
                width={160}
                height={32}
                className="w-[140px] md:w-[180px] h-auto mb-2"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4 md:mb-6 max-w-xs">
              AI Agents for Enterprise and Government 
            </p>
            
            {/* Contact info moved here */}
            <div className="mb-4 md:mb-6">
              <ul className="space-y-2 md:space-y-2">
                <li className="flex items-start">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#B3EBF2] mr-2 md:mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-sm md:text-base text-gray-400">contact@universalagi.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#B3EBF2] mr-2 md:mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-sm md:text-base text-gray-400">San Francisco, CA</span>
                </li>
              </ul>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 md:space-x-4">
              <a href="https://www.linkedin.com/company/universalagi/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-[#B3EBF2]/20 hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/watch?v=DI-LKs3GpeE&t=330s" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-[#B3EBF2]/20 hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-white font-medium text-base md:text-lg mb-3 md:mb-4">Company</h3>
            <ul className="space-y-2 md:space-y-2">
              <li><Link href="/about" className="text-sm md:text-base text-gray-400 hover:text-[#B3EBF2] transition-colors duration-300">About Us</Link></li>
              <li><Link href="/request-demo" className="text-sm md:text-base text-gray-400 hover:text-[#B3EBF2] transition-colors duration-300">Demo</Link></li>
              <li><Link href="/#join-team" className="text-sm md:text-base text-gray-400 hover:text-[#B3EBF2] transition-colors duration-300">Careers</Link></li>
              <li><Link href="/privacy-policy" className="text-sm md:text-base text-gray-400 hover:text-[#B3EBF2] transition-colors duration-300">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-4 md:mb-4" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            © {currentYear} UniversalAGI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
