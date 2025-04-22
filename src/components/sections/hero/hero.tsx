'use client';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set isLoaded to true after component mounts to trigger animations
        setIsLoaded(true);
    }, []);

    return (
        <section className="w-full pt-48 pb-64 md:pt-40 md:pb-40 relative overflow-hidden">
            {/* Content */}
            <div className="container flex flex-col items-center justify-center relative z-10 pt-24">
                <h1 
                    className={`text-6xl md:text-7xl font-normal mb-10 max-w-4xl mx-auto text-center text-foreground transition-all duration-1000 transform ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    AI Agents Built for Enterprise and Government
                </h1>
                <p 
                    className={`text-3xl text-foreground mb-10 max-w-3xl mx-auto text-center transition-all duration-1000 transform ${
                        isLoaded ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: '300ms' }}
                >
                    Latest AI Breakthroughs on top of your secure data
                </p>
                <div 
                    className={`flex gap-4 mb-20 transition-all duration-1000 transform ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: '600ms' }}
                >
                    <Button 
                        className="rounded-full text-black/90 text-lg px-6 py-6 font-semibold border-0 transition-all duration-300 hover:shadow-glow"
                        style={{ 
                            background: 'linear-gradient(to right, #B3EBF2, #7dd8e6)',
                            boxShadow: '0 4px 14px rgba(123, 216, 230, 0.5), 0 0 20px rgba(179, 235, 242, 0.3)'
                        }}
                    >
                        <a href="/request-demo">Request a Demo</a>
                    </Button>
                    <Button 
                        className="rounded-full bg-black/90 text-white hover:bg-black/80 text-lg px-6 py-6 font-semibold border border-gray-400/20"
                    >
                        <a href="/careers">Careers</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}