'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { useState } from "react";

export function JoinTeam() {
    // State to control the width of the "We Invest in People" card - adjust this value to change width
    const [investCardWidth, setInvestCardWidth] = useState("110%"); // Slightly reduced for better mobile experience
    
    const benefits = [
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-4 sm:mb-5 md:mb-6">
              <path d="M12 1V23" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: "Competitive compensation and equity"
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-4 sm:mb-5 md:mb-6">
              <path d="M9 12H15" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 9V15" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: "Health, Dental, and Vision Insurance"
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-4 sm:mb-5 md:mb-6">
              <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 3.13C17.7699 3.58317 19.0078 5.17594 19.0078 7.005C19.0078 8.83406 17.7699 10.4268 16 10.88" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: "Team Building & Fun Activities"
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-4 sm:mb-5 md:mb-6">
              <path d="M8 7V3M16 7V3" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 11L21 11" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="3" y="5" width="18" height="18" rx="2" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 15H10M14 15H16M8 19H10M14 19H16" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: "Unlimited PTO"
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-4 sm:mb-5 md:mb-6">
              <path d="M21 5H3C1.89543 5 1 5.89543 1 7V19C1 20.1046 1.89543 21 3 21H21C22.1046 21 23 20.1046 23 19V7C23 5.89543 22.1046 5 21 5Z" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 5V3C5 1.89543 5.89543 1 7 1H17C18.1046 1 19 1.89543 19 3V5" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 12H14" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 10V14" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: "401(k) plan"
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-4 sm:mb-5 md:mb-6">
              <path d="M11 3H3V11H11V3Z" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 3H13V11H21V3Z" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 13H13V21H21V13Z" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 13H3V21H11V13Z" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: "Great scope, ownership and impact"
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-4 sm:mb-5 md:mb-6">
              <path d="M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 21H16" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17V21" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 10H17" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 7H15" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 13H17" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: "AI Tools Stipend"
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-4 sm:mb-5 md:mb-6">
              <path d="M20 4L18 12H16L14 4" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 12V20" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 4V20" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 4C7 4 4 5 4 8C4 11 7 12 7 12" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: "Lunch & Dinner in office"
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-4 sm:mb-5 md:mb-6">
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12H21" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 3C14.25 5.25 15.4167 8.58333 15.5 12C15.5833 15.4167 14.25 18.75 12 21" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 3C9.75 5.25 8.58333 8.58333 8.5 12C8.41667 15.4167 9.75 18.75 12 21" stroke="#7dd8e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: "Immigration Support"
        }
      ];
      
    return (
        <section id="join-team" className="w-full py-16 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden z-10">
            {/* Content */}
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <FadeInSection>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 sm:mb-6 md:mb-8 text-white">
                            Join Our Team
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
                            We're building something transformative in San Francisco and seeking exceptional AI engineering talent to join us in-office.
                        </p>
                    </FadeInSection>
                </div>

                {/* Mission Statement Section with Quotes integrated - Moved to be before benefits cards */}
                <FadeInSection delay={100}>
                    <div className="relative w-full mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24 overflow-visible">
                        <div className="flex justify-center relative">
                            <div style={{ 
                                width: investCardWidth, 
                                maxWidth: "130%",
                                position: "relative",
                                left: "50%",
                                transform: "translateX(-50%)"
                            }} className="overflow-visible">
                                <div className="group h-full rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:translate-y-[-4px] backdrop-blur-sm bg-black/40 overflow-hidden">
                                    <div className="p-6 sm:p-8 md:p-10 text-center">
                                        <div className="mb-5 sm:mb-6 md:mb-8 inline-block">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#7dd8e6]/20 flex items-center justify-center mx-auto">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#B3EBF2] w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                                                    <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M16 3.13C17.7699 3.58317 19.0078 5.17594 19.0078 7.005C19.0078 8.83406 17.7699 10.4268 16 10.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white group-hover:text-[#7dd8e6] transition-colors duration-300 mb-3 sm:mb-4 md:mb-6">
                                            We Invest in People
                                        </h3>
                                        <p className="text-base sm:text-lg md:text-xl text-gray-300 w-full leading-relaxed mb-8 md:mb-10">
                                            We create an environment where individuals thrive, developing the skills to become exceptional founders and leaders. Here, you'll have the freedom to explore multiple roles, expanding your expertise across disciplines while accelerating your professional growth.
                                        </p>

                                        {/* Quotes Section integrated inside the card */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-xl bg-black/20 overflow-hidden">
                                            <div className="flex flex-col px-5 py-5 h-full relative">
                                                <div>
                                                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#7dd8e6] mb-3 opacity-80" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.722 7.612c-5.173 2.583-8.722 7.055-8.722 12.388 0 3.895 2.729 7 6.667 7 3.601 0 6.333-2.799 6.333-6.5 0-3.562-2.665-6.5-6-6.5-0.314 0-0.722 0.052-1 0.111 0.667-3.034 4.056-6.396 7-7.611v-2.389c-1.463 0-3.381 0.653-4.278 1.500zM24.722 7.612c-5.173 2.583-8.722 7.055-8.722 12.388 0 3.895 2.729 7 6.667 7 3.601 0 6.333-2.799 6.333-6.5 0-3.562-2.665-6.5-6-6.5-0.314 0-0.722 0.052-1 0.111 0.667-3.034 4.056-6.396 7-7.611v-2.389c-1.463 0-3.381 0.653-4.278 1.500z"></path>
                                                    </svg>
                                                    <p className="text-sm sm:text-base text-gray-300">
                                                        "I've learned more in a week at UniversalAGI than I did in years at previous jobs."
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-col px-5 py-5 h-full relative">
                                                <div>
                                                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#7dd8e6] mb-3 opacity-80" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.722 7.612c-5.173 2.583-8.722 7.055-8.722 12.388 0 3.895 2.729 7 6.667 7 3.601 0 6.333-2.799 6.333-6.5 0-3.562-2.665-6.5-6-6.5-0.314 0-0.722 0.052-1 0.111 0.667-3.034 4.056-6.396 7-7.611v-2.389c-1.463 0-3.381 0.653-4.278 1.500zM24.722 7.612c-5.173 2.583-8.722 7.055-8.722 12.388 0 3.895 2.729 7 6.667 7 3.601 0 6.333-2.799 6.333-6.5 0-3.562-2.665-6.5-6-6.5-0.314 0-0.722 0.052-1 0.111 0.667-3.034 4.056-6.396 7-7.611v-2.389c-1.463 0-3.381 0.653-4.278 1.500z"></path>
                                                    </svg>
                                                    <p className="text-sm sm:text-base text-gray-300">
                                                        "I was hired based on my potential beyond my existing technical skills. The team actively invests in developing that potential."
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-col px-5 py-5 h-full relative">
                                                <div>
                                                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#7dd8e6] mb-3 opacity-80" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.722 7.612c-5.173 2.583-8.722 7.055-8.722 12.388 0 3.895 2.729 7 6.667 7 3.601 0 6.333-2.799 6.333-6.5 0-3.562-2.665-6.5-6-6.5-0.314 0-0.722 0.052-1 0.111 0.667-3.034 4.056-6.396 7-7.611v-2.389c-1.463 0-3.381 0.653-4.278 1.500zM24.722 7.612c-5.173 2.583-8.722 7.055-8.722 12.388 0 3.895 2.729 7 6.667 7 3.601 0 6.333-2.799 6.333-6.5 0-3.562-2.665-6.5-6-6.5-0.314 0-0.722 0.052-1 0.111 0.667-3.034 4.056-6.396 7-7.611v-2.389c-1.463 0-3.381 0.653-4.278 1.500z"></path>
                                                    </svg>
                                                    <p className="text-sm sm:text-base text-gray-300">
                                                        "At UniversalAGI, I've developed my skills beyond the purely technical, moving towards leadership roles."
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
                
                {/* Button moved here, after the People section */}
                <FadeInSection delay={125}>
                    <div className="flex justify-center mb-12 sm:mb-16 md:mb-20">
                        <Link href="https://jobs.ashbyhq.com/universalagi">
                            <Button 
                                className="rounded-full text-black/90 text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 font-semibold border-0 transition-all duration-300 hover:shadow-glow"
                                style={{ 
                                    background: 'linear-gradient(to right, #B3EBF2, #7dd8e6)',
                                    boxShadow: '0 4px 14px rgba(123, 216, 230, 0.5), 0 0 20px rgba(179, 235, 242, 0.3)'
                                }}
                            >
                                Open Roles
                            </Button>
                        </Link>
                    </div>
                </FadeInSection>

                {/* Benefits Cards Section */}
                <FadeInSection delay={150}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                        {benefits.map((benefit, index) => (
                            <FadeInSection key={index} delay={index * 50}>
                                <div className="group h-full rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:translate-y-[-4px] backdrop-blur-sm bg-black/40 overflow-hidden">
                                    <div className="p-4 sm:p-5 md:p-6">
                                        {benefit.icon}
                                        <h3 className="text-base sm:text-lg md:text-xl font-medium text-white group-hover:text-[#B3EBF2] transition-colors duration-300">
                                            {benefit.title}
                                        </h3>
                                    </div>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </FadeInSection>
                
            </div>
        </section>
    );
} 