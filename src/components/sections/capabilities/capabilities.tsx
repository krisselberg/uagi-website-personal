'use client';

import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { useState } from "react";

export function Capabilities(){
    // State to control the width of the cards section - matches Join Team section
    const [cardsWidth, setCardsWidth] = useState("120%");
    
    const benefits = [
        {
            icon: (
                <Image 
                    src="/speed.svg"
                    alt="Speed Icon"
                    width={40}
                    height={40}
                    className="transition-transform duration-500 group-hover:scale-110"
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
                    className="transition-transform duration-500 group-hover:scale-110"
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
                    className="transition-transform duration-500 group-hover:scale-110"
                />
            ),
            title: "Security",
            description: "Enterprise-grade security.",
            gradientFrom: "from-purple-500/10",
            gradientTo: "to-indigo-900/30"
        }
    ];

    return (
        <section className="w-full py-32 relative z-10">
            <div className="container relative z-10">
                <FadeInSection>
                    <h2 className="text-6xl font-medium text-center mb-16">
                    Accelerate Secure AI Adoption
                    </h2>
                </FadeInSection>

                <div className="relative w-full mx-auto mb-16 overflow-visible">
                    <div className="flex justify-center relative">
                        <div style={{ 
                            width: cardsWidth, 
                            maxWidth: "130%",
                            position: "relative",
                            left: "50%",
                            transform: "translateX(-50%)"
                        }} className="overflow-visible">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {benefits.map((benefit, index) => (
                                    <FadeInSection key={index} delay={index * 200}>
                                        <div className="group h-full rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:translate-y-[-4px] backdrop-blur-sm bg-black/40 overflow-hidden">
                                            <div className={`h-24 flex items-center justify-center bg-gradient-to-br ${benefit.gradientFrom} ${benefit.gradientTo}`}>
                                                <div className="relative">
                                                    {benefit.icon}
                                                    <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-2xl font-medium mb-4 text-white group-hover:text-[#B3EBF2] transition-colors duration-300">
                                                    {benefit.title}
                                                </h3>
                                                <p className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
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