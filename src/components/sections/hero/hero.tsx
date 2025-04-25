'use client';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useSpaceAnimation } from "@/context/SpaceAnimationContext";

// Define a breakpoint for mobile (e.g., Tailwind's default 'md' is 768px)
const MOBILE_BREAKPOINT = 768;

export function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(true); // Default to true initially
    const { setSpeed, defaultSpeed } = useSpaceAnimation();
    const hoverSpeed = 2.5;

    // Effect to check window width on mount and resize
    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        
        // Check on initial mount
        checkDevice();
        
        // Add resize listener
        window.addEventListener('resize', checkDevice);
        
        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    // Effect to set initial load animation
    useEffect(() => {
        setIsLoaded(true);
        // Cleanup: Ensure speed is reset if component unmounts while hovered (desktop only)
        return () => {
            // Check isMobile directly in cleanup, don't rely on potentially stale closure value
            if (window.innerWidth >= MOBILE_BREAKPOINT) {
                setSpeed(defaultSpeed);
            }
        };
    // No need for isMobile dependency here as we check width directly in cleanup
    }, [setSpeed, defaultSpeed]); 

    const handleMouseEnter = () => {
        // Strict check: Do absolutely nothing on mobile
        if (isMobile) return; 
        setSpeed(hoverSpeed);
    };

    const handleMouseLeave = () => {
        // Strict check: Do absolutely nothing on mobile
        if (isMobile) return;
        setSpeed(defaultSpeed);
    };

    return (
        <section className="w-full pt-32 pb-48 sm:pt-40 sm:pb-64 md:pt-40 md:pb-40 relative overflow-hidden">
            {/* Content */}
            <div className="container flex flex-col items-center justify-center relative z-10 pt-12 sm:pt-16 md:pt-24">
                <h1 
                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-6 sm:mb-8 md:mb-10 max-w-6xl mx-auto text-center text-foreground transition-all duration-1000 transform ${ 
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ 
                        textShadow: '0 0 20px rgba(255, 255, 255, 0.15), 0 0 30px rgba(179, 235, 242, 0.1)'
                    }}
                >
                    AI Agents for Enterprise and Government
                </h1>
                <p 
                    className={`text-base sm:text-xl md:text-2xl text-foreground mb-8 sm:mb-10 max-w-6xl mx-auto text-center transition-all duration-1000 transform ${ 
                        isLoaded ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: '300ms' }}
                >
                    Latest AI Breakthroughs on top of your secure data
                </p>
                <div 
                    className={`flex flex-row gap-3 sm:gap-4 mb-16 sm:mb-20 transition-all duration-1000 transform px-4 sm:px-0 ${ 
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: '600ms' }}
                >
                    <Button 
                        // Always attach handlers, but they check isMobile internally
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="rounded-full text-black/90 text-xs sm:text-base md:text-lg px-3 py-5 sm:px-5 md:px-6 sm:py-5 md:py-6 font-semibold border-0 transition-all duration-300 hover:shadow-glow"
                        style={{ 
                            background: 'linear-gradient(to right, #B3EBF2, #7dd8e6)',
                            boxShadow: '0 4px 14px rgba(123, 216, 230, 0.5), 0 0 20px rgba(179, 235, 242, 0.3)'
                        }}
                    >
                        <a href="/request-demo">Request a Demo</a>
                    </Button>
                    <Button 
                        className="rounded-full bg-black/90 text-white hover:bg-black/80 text-xs sm:text-base md:text-lg px-3 py-5 sm:px-5 md:px-6 sm:py-5 md:py-6 font-regular border border-gray-400/20"
                    >
                        <a href="/careers#open-roles">Careers</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}