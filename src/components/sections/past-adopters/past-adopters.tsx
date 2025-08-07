'use client'

import Link from "next/link";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { useState } from "react";

interface CardData {
    title: string;
    category: string;
    description: string;
    highlights: string[];
    iconName: string;
    link: string;
    stats: {
        metric: string;
        value: string;
    }[];
}

export function PastAdopters() {
    const cards = [
        {
            title: "Enterprise",
            category: "Fortune 100 Company",
            description: "Empowered business teams to turn their ideas into secure, production-ready applications deployed in under 60 minutes—no coding required, with real-time UI previews, live data models, and seamless integrations.",
            highlights: [
                "Zero-code application deployment",
                "Real-time UI previews",
                "Seamless API integrations",
                "Production-ready in minutes"
            ],
            iconName: "building-skyscraper",
            link: "/enterprise",
            stats: [
                { metric: "Deployment Time", value: "< 60 min" },
                { metric: "Business Impact", value: "10x faster" },
                { metric: "Integration Success", value: "100%" }
            ]
        },
        {
            title: "Government",
            category: "National Security Agency",
            description: "Enabled non-technical officials to self-serve insights from air-gapped national data in under one minute—translated plain-English queries into audited SQL and interactive visualizations within a fully compliant environment.",
            highlights: [
                "Air-gapped data security",
                "Plain-English to SQL translation",
                "Interactive visualizations",
                "Full compliance framework"
            ],
            iconName: "building-columns",
            link: "/government",
            stats: [
                { metric: "Query Response", value: "< 1 min" },
                { metric: "Compliance Level", value: "100%" },
                { metric: "Data Security", value: "Air-gapped" }
            ]
        }
    ];

    const Card = ({ data }: { data: CardData }) => (
        <div className="relative group h-full">
            {/* Main Card */}
            <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-700 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:scale-[1.02]">
                
                {/* Header Section */}
                <div className="relative p-6 sm:p-8 border-b border-white/10">
                    <div className="flex items-start justify-between mb-4">
                        {/* Icon */}
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/15 transition-all duration-300">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {data.iconName === "building-skyscraper" ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                                )}
                            </svg>
                        </div>

                        {/* Category Badge */}
                        <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                            <span className="text-xs sm:text-sm font-medium text-white/90">{data.category}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-normal text-white mb-3 group-hover:text-[#B3EBF2] transition-colors duration-300">
                        {data.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {data.description}
                    </p>
                </div>

                {/* Stats Section */}
                <div className="p-6 sm:p-8 border-b border-white/10">
                    <h4 className="text-lg font-normal text-white mb-4">Key Results</h4>
                    <div className="grid grid-cols-1 gap-4">
                        {data.stats.map((stat, index) => (
                            <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                                <span className="text-gray-300 text-sm">{stat.metric}</span>
                                <span className="text-[#B3EBF2] font-semibold text-sm">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Highlights Section */}
                <div className="p-6 sm:p-8 border-b border-white/10">
                    <h4 className="text-lg font-normal text-white mb-4">Key Features</h4>
                    <div className="space-y-3">
                        {data.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#B3EBF2] mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="p-6 sm:p-8">
                    <Link href={data.link}>
                        <button className="w-full rounded-full bg-white/10 text-white hover:bg-white/15 text-sm font-medium px-6 py-3 border border-white/20 transition-all duration-300 hover:border-[#B3EBF2]/50 hover:text-[#B3EBF2] group-hover:shadow-lg backdrop-blur-sm">
                            Read Full Case Study
                            <svg className="w-4 h-4 ml-2 inline-block transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#B3EBF2]/0 via-[#B3EBF2]/0 to-[#B3EBF2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"></div>
            </div>

            {/* Background Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B3EBF2]/20 via-transparent to-[#B3EBF2]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm -z-10"></div>
        </div>
    );
    
    return (
        <section className="w-full relative py-16 sm:py-20 md:py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.02]" 
                     style={{
                         backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                         backgroundSize: '50px 50px'
                     }}>
                </div>
                
                {/* Gradient orbs */}
                <div className="absolute top-20 left-20 w-96 h-96 bg-[#B3EBF2]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7dd8e6]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Header Section */}
                <div className="text-center mb-16 sm:mb-20 md:mb-24">
                    <FadeInSection>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                            <svg className="w-4 h-4 text-[#B3EBF2] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span className="text-sm font-medium text-white/80">Proven Results</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-tight">
                            Case Studies
                        </h2>
                    </FadeInSection>
                    
                    <FadeInSection delay={200}>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Real-world transformations from our enterprise and government partners—
                            <span className="text-[#B3EBF2]"> delivering measurable impact </span>
                            through secure AI deployment.
                        </p>
                    </FadeInSection>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {cards.map((card, index) => (
                        <FadeInSection key={index} delay={400 + index * 200}>
                            <Card data={card} />
                        </FadeInSection>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <FadeInSection delay={500}>
                    <div className="text-center mt-16 sm:mt-20 md:mt-24">
                        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 max-w-2xl mx-auto">
                            <h3 className="text-2xl sm:text-3xl font-normal text-white mb-4">
                                Ready to Transform Your Organization?
                            </h3>
                            <p className="text-gray-300 mb-6 text-base sm:text-lg">
                                Join leading enterprises and government agencies in leveraging secure AI for unprecedented results.
                            </p>
                            <Link href="/request-demo">
                                <button className="rounded-full text-black/90 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 font-semibold border-0 transition-all duration-300 hover:shadow-glow hover:scale-105"
                                        style={{
                                            background: "linear-gradient(to right, #B3EBF2, #7dd8e6)",
                                            boxShadow: "0 4px 14px rgba(123, 216, 230, 0.5), 0 0 20px rgba(179, 235, 242, 0.3)",
                                        }}>
                                    Request a Demo
                                    <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
}