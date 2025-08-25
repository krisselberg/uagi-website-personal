"use client";
import { Button } from "@/components/ui/button";
import { BeyondEarth } from "@/components/sections/beyond-earth";

export function HeroSection() {
  return (
    <>
      {/* Earth Background */}
      <div className="absolute inset-0 z-0">
        <BeyondEarth />
      </div>
      
      {/* Content */}
      <div className="container flex flex-col items-center justify-center relative z-10 pt-12 sm:pt-16 md:pt-24">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-6 sm:mb-8 md:mb-10 max-w-6xl mx-auto text-center text-white transition-all duration-1000 transform opacity-75 translate-y-0`}
          style={{
            textShadow: "0 1px 1px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.6), 0 8px 16px rgba(0, 0, 0, 0.4)"
          }}
        >
          AI Agents for Enterprise and Government
        </h1>
        <p
          className={`text-base sm:text-xl md:text-2xl text-white mb-8 sm:mb-10 max-w-6xl mx-auto text-center transition-all duration-1000 transform opacity-60 translate-y-0`}
          style={{ 
            transitionDelay: "300ms",
            textShadow: "0 1px 3px rgba(0, 0, 0, 0.8), 0 2px 6px rgba(0, 0, 0, 0.6), 0 4px 12px rgba(0, 0, 0, 0.4)"
          }}
        >
          UniversalAGI is the forward-deployed AI lab for your mission critical challenges
        </p>
        <div
          className={`flex flex-row gap-3 sm:gap-4 mb-16 sm:mb-20 transition-all duration-1000 transform px-4 sm:px-0 opacity-100 translate-y-0`}
          style={{ transitionDelay: "600ms" }}
        >
          <Button
            className="rounded-full text-black/90 text-xs sm:text-base md:text-lg px-3 py-5 sm:px-5 md:px-6 sm:py-5 md:py-6 font-semibold border-0 transition-all duration-300 hover:shadow-glow"
            style={{
              background: "linear-gradient(to right, #B3EBF2, #7dd8e6)",
              boxShadow:
                "0 4px 14px rgba(123, 216, 230, 0.5), 0 0 20px rgba(179, 235, 242, 0.3)",
            }}
          >
            <a href="/request-demo">Request a Demo</a>
          </Button>
          <Button className="rounded-full bg-black/90 text-white hover:bg-black/80 text-xs sm:text-base md:text-lg px-3 py-5 sm:px-5 md:px-6 sm:py-5 md:py-6 font-regular border border-gray-400/20">
            <a href="/#join-team">Careers</a>
          </Button>
        </div>
      </div>
    </>
  );
}

