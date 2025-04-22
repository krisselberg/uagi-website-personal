'use client'

import Image from "next/image";
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
    const [cardsWidth, setCardsWidth] = useState("120%");
    
    const cards = [
        {
            title: "Enterprise",
            category: "Private Sector",
            description: "We partner with leading enterprises to build custom AI solutions that drive business value and competitive advantage.",
            caseStudies: [
                "Fortune 500 tech companies use our AI solutions to optimize operations",
                "Financial services firms leverage our models for risk assessment",
                "Healthcare providers implement our solutions for improved patient outcomes",
                "Media companies utilize our technology for content generation and moderation"
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
                "Federal agencies implement our AI for document processing automation",
                "State governments use our solutions for citizen service optimization",
                "Defense departments leverage our technology for data analysis",
                "Public health agencies deploy our AI for research acceleration"
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
                <div className="absolute top-8 right-8">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{backgroundColor: data.accentColor}}>
                        <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                    <h3 className="text-5xl font-medium text-white mb-3 drop-shadow-lg">
                        {data.title}
                    </h3>
                    <div className="text-sm uppercase tracking-wider font-medium px-4 py-1 rounded-full inline-block" style={{backgroundColor: data.accentColor, color: "#000000"}}>
                        {data.category}
                    </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute w-full h-full">
                    {/* Animated gradient circles */}
                    <div className="absolute top-[15%] left-[20%] w-32 h-32 rounded-full opacity-40 blur-2xl animate-pulse" style={{backgroundColor: data.accentColor}}></div>
                    <div className="absolute bottom-[25%] right-[10%] w-48 h-48 rounded-full opacity-30 blur-3xl animate-pulse" style={{backgroundColor: data.accentColor, animationDelay: "1.5s"}}></div>
                    <div className="absolute top-[60%] left-[60%] w-24 h-24 rounded-full opacity-20 blur-xl animate-pulse" style={{backgroundColor: data.accentColor, animationDelay: "0.7s"}}></div>
                </div>
            </div>
            
            {/* Text section */}
            <div className="flex-1 flex flex-col p-8 bg-[#000000] relative">
                <p className="text-gray-300 text-lg mb-6">
                    {data.description}
                </p>
                
                {/* Case studies list */}
                <div className="space-y-3 mb-16">
                    <h4 className="text-lg font-medium text-white mb-4">Case Studies:</h4>
                    {data.caseStudies.map((study, index) => (
                        <div key={index} className="flex items-start">
                            <div style={{color: data.accentColor}} className="mr-3 mt-1">•</div>
                            <p className="text-gray-400 flex-1">{study}</p>
                        </div>
                    ))}
                </div>
                
                {/* Button at the bottom - positioned absolutely */}
                <div className="absolute bottom-8 right-8">
                    <button className="flex items-center text-sm hover:text-white transition-colors duration-300 group-hover:underline" style={{color: data.accentColor}}>
                        View all case studies
                        <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
    
    return (
        <section className="w-full py-32 relative z-10">
            <div className="container relative z-10">
                <FadeInSection>
                    <h2 className="text-6xl font-medium mb-6 text-center">
                        Our Clients
                    </h2>
                </FadeInSection>
                
                <FadeInSection delay={200}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-16">
                        Delivering enterprise-grade AI solutions across sectors
                    </p>
                </FadeInSection>
                
                {/* Grid layout for cards */}
                <div className="relative w-full mx-auto mb-16 overflow-visible">
                    <div className="flex justify-center relative">
                        <div style={{ 
                            width: cardsWidth, 
                            maxWidth: "130%",
                            position: "relative",
                            left: "50%",
                            transform: "translateX(-50%)"
                        }} className="overflow-visible">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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