'use client';

import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Capabilities(){
    // State to control the width of the cards section - matches Join Team section
    const [cardsWidth, setCardsWidth] = useState("110%"); // Slightly reduced for better mobile experience
    
    const benefits = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Rapid Deployment",
            description: "Go from concept to production in weeks, not months. Our platform is built for fast, scalable, and reliable AI deployments."
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C17.7699 3.58317 19.0078 5.17594 19.0078 7.005C19.0078 8.83406 17.7699 10.4268 16 10.88" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Expert-Driven",
            description: "Our team is augmented by world-class AI experts dedicated to your success, from integration to ongoing optimization."
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Secure by Design",
            description: "Built for the most demanding security and compliance requirements, ensuring your data remains protected."
        }
    ];

    return (
        <div className="container px-4 sm:px-6 md:px-8 relative z-10">
                <FadeInSection>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-center mb-4 sm:mb-6">
                        A Unified Platform for Secure AI
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto text-center mb-10 sm:mb-16">
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
    );
}