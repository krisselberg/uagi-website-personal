'use client';

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { useState } from "react";
import { ReactNode } from "react";

interface CapabilityData {
    icon: ReactNode;
    title: string;
    description: string;
}

export function Capabilities(){
    // State to control the width of the cards section
    const [cardsWidth, setCardsWidth] = useState("110%");
    
    const capabilities: CapabilityData[] = [
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Speed",
            description: "Production-ready AI in weeks."
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                    <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C17.7699 3.58317 19.0078 5.17594 19.0078 7.005C19.0078 8.83406 17.7699 10.4268 16 10.88" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Talent",
            description: "World-class AI experts."
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V12" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8H12.01" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Security",
            description: "Enterprise-grade security."
        }
    ];

    return (
        <section className="w-full py-16 sm:py-24 md:py-32 relative z-10">
            <div className="container px-4 sm:px-6 md:px-8 relative z-10">
                <FadeInSection>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-8 sm:mb-12 md:mb-16">
                    Accelerate Secure AI Adoption
                    </h2>
                </FadeInSection>

                <div className="relative w-full mx-auto mb-10 sm:mb-16 overflow-visible">
                    <div className="flex justify-center relative">
                        <div style={{ 
                            width: cardsWidth, 
                            maxWidth: "130%",
                            position: "relative",
                            left: "50%",
                            transform: "translateX(-50%)"
                        }} className="overflow-visible">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                                {capabilities.map((capability, index) => (
                                    <FadeInSection key={index} delay={index * 200}>
                                        <div className="group h-full rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:translate-y-[-4px] backdrop-blur-sm bg-black/40 overflow-hidden p-6 sm:p-8">
                                            <h3 className="text-xl sm:text-2xl font-medium text-white mb-5 group-hover:text-[#B3EBF2] transition-colors duration-300">
                                                {capability.title}
                                            </h3>
                                            
                                            <div className="flex justify-start items-start">
                                                {capability.icon}
                                            </div>
                                            
                                            <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                                                {capability.description}
                                            </p>
                                        </div>
                                    </FadeInSection>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}