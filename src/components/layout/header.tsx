"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="
          mx-4 md:mx-auto mt-4 md:mt-6 lg:mt-8 p-4 max-w-4xl
          bg-white/30 backdrop-blur-sm rounded-xl
          shadow-lg shadow-black/20
          transition-all duration-300
        "
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/uagi_black.png"
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
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation items - Desktop */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            <Link
              href="/about"
              className="text-black hover:text-gray-700 transition-colors text-base text-xl font-regular"
            >
              About Us
            </Link>
            <Link
              href="/case-studies"
              className="text-black hover:text-gray-700 transition-colors text-base text-xl font-regular"
            >
              Case Studies
            </Link>
            {/* <Link href="/request-demo" className="text-black hover:text-gray-700 transition-colors text-base text-xl font-regular">
            Demo
          </Link> */}
            <Link
              href="/#join-team"
              className="text-black hover:text-gray-700 transition-colors text-base text-xl font-regular"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div
          className="
            md:hidden bg-white/30 backdrop-blur-sm border-t border-gray-300 
            absolute left-4 right-4 md:left-0 md:right-0 p-4 flex flex-col space-y-0 
            animate-in fade-in slide-in-from-top-4 duration-200
            md:mx-auto max-w-4xl rounded-b-xl
            shadow-lg shadow-black/20
          "
        >
          <Link
            href="/about"
            className="text-black hover:text-gray-700 transition-colors text-xl py-3 font-regular border-b border-gray-300 rounded-t-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/case-studies"
            className="text-black hover:text-gray-700 transition-colors text-xl py-3 font-regular border-b border-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Case Studies
          </Link>
          <Link
            href="/#join-team"
            className="text-black hover:text-gray-700 transition-colors text-xl py-3 font-regular rounded-b-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Careers
          </Link>
        </div>
      )}
    </header>
  );
}
