'use client'

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { useState } from "react";

interface CardData {
    title: string;
    category: string;
    description: string;
    caseStudies: string[];
    gradientFrom: string;
    gradientTo: string;
    accentColor: string;
    iconName: string;
}

export function PastAdopters() {
    // State to control the width of the cards section - matches other sections
    const [cardsWidth, setCardsWidth] = useState("110%"); // Slightly reduced for better mobile experience
    
    const cards = [
        {
            title: "Enterprise",
            category: "Private Sector",
            description: "We partner with leading enterprises to build custom AI solutions that drive business value and competitive advantage. Our intelligent AI agents transform your data into your most powerful asset:",
            caseStudies: [
                "Technology",
                "Finance", 
                "Healthcare"
            ],
            gradientFrom: "blue-500/40",
            gradientTo: "indigo-800/60",
            accentColor: "#4CCDFF",
            iconName: "building-skyscraper"
        },
        {
            title: "Government",
            category: "Public Sector",
            description: "Our secure, compliant AI solutions help government agencies modernize operations and better serve citizens.",
            caseStudies: [
                "Federal",
                "International",
                "Defense"
            ],
            gradientFrom: "purple-500/40",
            gradientTo: "violet-800/60",
            accentColor: "#C89BFF",
            iconName: "building-columns"
        }
    ];

    const Card = ({ data }: { data: CardData }) => (
        <div className="rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 flex flex-col bg-black/80 h-full group backdrop-blur-sm">
            {/* Image section */}
            <div className={`aspect-[16/7] relative overflow-hidden bg-gradient-to-br from-${data.gradientFrom} to-${data.gradientTo} flex items-center justify-center`}>
                {/* Accent colored overlay element */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -right-20 -top-20 w-[500px] h-[500px]">
                            <path fill={data.accentColor} d="M45.9,-50.2C58.4,-35.1,66.6,-17.6,67.5,1.4C68.4,20.4,62.1,40.7,48.3,52.6C34.4,64.5,13,68,-5.9,65.3C-24.8,62.6,-41.1,53.7,-52.6,39.9C-64.1,26.1,-70.8,7.4,-68.5,-10.1C-66.2,-27.7,-54.8,-44.1,-40.5,-59.2C-26.2,-74.3,-8.8,-88,4.5,-92.2C17.8,-96.4,35.7,-91.1,45.9,-76.2Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                
                {/* Icon */}
                <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center" style={{backgroundColor: data.accentColor}}>
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {data.iconName === "building-skyscraper" ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                            )}
                        </svg>
                    </div>
                </div>
                
                {/* Title overlay with larger size */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full z-10">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-2 sm:mb-3 drop-shadow-lg">
                        {data.title}
                    </h3>
                    <div className="text-xs sm:text-sm uppercase tracking-wider font-medium px-3 py-1 sm:px-4 sm:py-1 rounded-full inline-block" style={{backgroundColor: data.accentColor, color: "#000000"}}>
                        {data.category}
                    </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute w-full h-full">
                    {/* Animated gradient circles */}
                    <div className="absolute top-[15%] left-[20%] w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full opacity-40 blur-2xl animate-pulse" style={{backgroundColor: data.accentColor}}></div>
                    <div className="absolute bottom-[25%] right-[10%] w-28 sm:w-36 md:w-48 h-28 sm:h-36 md:h-48 rounded-full opacity-30 blur-3xl animate-pulse" style={{backgroundColor: data.accentColor, animationDelay: "1.5s"}}></div>
                    <div className="absolute top-[60%] left-[60%] w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full opacity-20 blur-xl animate-pulse" style={{backgroundColor: data.accentColor, animationDelay: "0.7s"}}></div>
                </div>
            </div>
            
            {/* Text section */}
            <div className="flex-1 flex flex-col p-5 sm:p-6 md:p-8 bg-[#000000] relative">
                <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
                    {data.description}
                </p>
                
                {/* Key sectors list */}
                <div className="space-y-2 sm:space-y-3 mb-12 sm:mb-16">
                    <h4 className="text-base sm:text-lg font-medium text-white mb-2 sm:mb-4">Key Sectors:</h4>
                    {data.caseStudies.map((study, index) => (
                        <div key={index} className="flex items-start">
                            <div style={{color: data.accentColor}} className="mr-2 sm:mr-3 mt-1">•</div>
                            <p className="text-gray-400 text-sm sm:text-base flex-1">{study}</p>
                        </div>
                    ))}
                </div>
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
                    White glove experience for our partners across sectors
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
                                {cards.map((card, index) => (
                                    <FadeInSection key={index} delay={400 + index * 200}>
                                        <Card data={card} />
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