'use client';

import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { useState } from "react";

export function Capabilities(){
    // State to control the width of the cards section - matches Join Team section
    const [cardsWidth, setCardsWidth] = useState("110%"); // Slightly reduced for better mobile experience
    
    const benefits = [
        {
            icon: (
                <Image 
                    src="/speed.svg"
                    alt="Speed Icon"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110"
                />
            ),
            title: "Speed",
            description: "Production-ready AI in weeks.",
            gradientFrom: "from-blue-500/10",
            gradientTo: "to-indigo-900/30"
        },
        {
            icon: (
                <Image 
                    src="/talent.svg"
                    alt="Talent Icon"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110"
                />
            ),
            title: "Talent",
            description: "World-class AI experts.",
            gradientFrom: "from-blue-400/20",
            gradientTo: "to-cyan-900/30"
        },
        {
            icon: (
                <Image 
                    src="/privacy.svg"
                    alt="Privacy Icon"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110"
                />
            ),
            title: "Security",
            description: "Enterprise-grade security.",
            gradientFrom: "from-purple-500/10",
            gradientTo: "to-indigo-900/30"
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
                                {benefits.map((benefit, index) => (
                                    <FadeInSection key={index} delay={index * 200}>
                                        <div className="group h-full rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:translate-y-[-4px] backdrop-blur-sm bg-black/40 overflow-hidden">
                                            <div className={`h-16 sm:h-20 md:h-24 flex items-center justify-center bg-gradient-to-br ${benefit.gradientFrom} ${benefit.gradientTo}`}>
                                                <div className="relative">
                                                    {benefit.icon}
                                                    <div className="absolute -inset-3 sm:-inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                                </div>
                                            </div>
                                            <div className="p-4 sm:p-5 md:p-6 flex flex-col items-center sm:items-start">
                                                <h3 className="text-xl sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 md:mb-4 text-white group-hover:text-[#B3EBF2] transition-colors duration-300 text-center sm:text-left">
                                                    {benefit.title}
                                                </h3>
                                                <p className="text-base sm:text-base md:text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-center sm:text-left">
                                                    {benefit.description}
                                                </p>
                                            </div>
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