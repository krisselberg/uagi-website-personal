'use client';

import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mercury } from "@/components/sections/mercury";

export function Capabilities(){
    // State to control the width of the cards section - matches Join Team section
    const [cardsWidth, setCardsWidth] = useState("110%"); // Slightly reduced for better mobile experience
    
    const benefits = [
        {
            icon: (
                <Image 
                    src="/planet_1.png" 
                    alt="Rapid Deployment" 
                    width={32} 
                    height={32} 
                    className="w-8 h-8 rounded-full"
                />
            ),
            title: "Rapid Deployment",
            description: "Go from concept to production in weeks, not months. Our platform is built for fast, scalable, and reliable AI deployments."
        },
        {
            icon: (
                <Image 
                    src="/planet_2.png" 
                    alt="Expert-Driven" 
                    width={32} 
                    height={32} 
                    className="w-8 h-8 rounded-full"
                />
            ),
            title: "Expert-Driven",
            description: "Our team is augmented by world-class AI experts dedicated to your success, from integration to ongoing optimization."
        },
        {
            icon: (
                <Image 
                    src="/planet_3.png" 
                    alt="Secure by Design" 
                    width={32} 
                    height={32} 
                    className="w-8 h-8 rounded-full"
                />
            ),
            title: "Secure by Design",
            description: "Built for the most demanding security and compliance requirements, ensuring your data remains protected."
        }
    ];

    return (
        <>
            {/* Mercury Background */}
            <div className="absolute inset-0 z-0">
                <Mercury />
            </div>
            
            {/* Content */}
            <div className="container px-4 sm:px-6 md:px-8 relative z-10">
                <FadeInSection>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-center mb-4 sm:mb-6"
                        style={{
                            textShadow: "0 1px 1px rgba(0, 0, 0, 0.9), 0 4px 8px rgba(0, 0, 0, 0.7), 0 8px 16px rgba(0, 0, 0, 0.5)"
                        }}>
                        A Unified Platform for Secure AI
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mx-auto text-center mb-10 sm:mb-16"
                        style={{
                            textShadow: "0 1px 2px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.7), 0 4px 12px rgba(0, 0, 0, 0.5)"
                        }}>
                        Our integrated platform provides the infrastructure, talent, and security to deploy production-grade AI applications on your most sensitive data
                    </p>
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
                                        <div className="group h-full rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:translate-y-[-4px] backdrop-blur-sm bg-black/30 p-6 flex flex-col">
                                            <div className="mb-4">
                                                <h3 className="text-2xl font-normal mb-1 text-white flex items-center">
                                                    <span className="mr-3 flex items-center">
                                                        {benefit.icon}
                                                    </span>
                                                    {benefit.title}
                                                </h3>
                                                <p className="text-base text-gray-400 mt-4">
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
                <FadeInSection>
                    <div className="text-center">
                        <Button
                            className="rounded-full text-black/90 text-xs sm:text-base md:text-lg px-3 py-5 sm:px-5 md:px-6 sm:py-5 md:py-6 font-semibold border-0 transition-all duration-300 hover:shadow-glow"
                            style={{
                                background: "linear-gradient(to right, #B3EBF2, #7dd8e6)",
                                boxShadow:
                                "0 4px 14px rgba(123, 216, 230, 0.5), 0 0 20px rgba(179, 235, 242, 0.3)",
                            }}
                        >
                            <a href="/request-demo">Learn More</a>
                        </Button>
                    </div>
                </FadeInSection>
            </div>
        </>
    );
}