'use client'

import { FadeInSection } from "@/components/animations/FadeInSection";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface ClientData {
    title: string;
    icon: ReactNode;
    description: string;
    industries: string[];
}

export function PastAdopters() {
    // State to control the width of the cards section
    const [cardsWidth, setCardsWidth] = useState("110%");
    
    const clients: ClientData[] = [
        {
            title: "ENTERPRISE",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 7H16" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 17H12" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            description: "We partner with leading enterprises to build custom AI solutions that drive business value and competitive advantage.",
            industries: ["Technology", "Finance", "Healthcare"]
        },
        {
            title: "GOVERNMENT",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                    <path d="M3 21H21" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 7H21" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 7L12 3L20 7" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 7V21" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 7V21" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7V21" stroke="#B3EBF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            description: "Our secure, compliant AI solutions help government agencies modernize operations and better serve citizens.",
            industries: ["Federal", "International", "Defense"]
        }
    ];
    
    const ClientCard = ({ data }: { data: ClientData }) => (
        <div className="group h-full rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:translate-y-[-4px] backdrop-blur-sm bg-black/40 overflow-hidden p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-5 group-hover:text-[#B3EBF2] transition-colors duration-300">
                {data.title}
            </h3>
            
            <div className="flex justify-start items-start">
                {data.icon}
            </div>
            
            <p className="text-gray-300 text-sm sm:text-base mb-8 leading-relaxed">
                {data.description}
            </p>
            
            <div>
                <h4 className="text-sm sm:text-base font-medium text-white mb-3">Key Sectors:</h4>
                <ul className="space-y-2">
                    {data.industries.map((industry: string, i: number) => (
                        <li key={i} className="flex items-center">
                            <span className="text-[#B3EBF2] mr-2">•</span>
                            <span className="text-gray-300 text-sm sm:text-base">{industry}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
    
    return (
        <section className="w-full py-16 sm:py-24 md:py-32 relative z-10">
            <div className="container px-4 sm:px-6 md:px-8 relative z-10">
                <FadeInSection>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 sm:mb-6 text-center">
                        Our Clients
                    </h2>
                </FadeInSection>
                
                <FadeInSection delay={200}>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto text-center mb-10 sm:mb-16">
                    White glove experience for our partners across sectors.
                    </p>
                </FadeInSection>
                
                {/* Grid layout for cards */}
                <div className="relative w-full mx-auto mb-10 sm:mb-16 overflow-visible">
                    <div className="flex justify-center relative">
                        <div style={{ 
                            width: cardsWidth, 
                            maxWidth: "130%",
                            position: "relative",
                            left: "50%",
                            transform: "translateX(-50%)"
                        }} className="overflow-visible">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                                {clients.map((client, index) => (
                                    <FadeInSection key={index} delay={400 + index * 200}>
                                        <ClientCard data={client} />
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