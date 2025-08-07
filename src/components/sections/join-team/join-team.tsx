'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { useState } from "react";

export function JoinTeam() {
    const benefits = [
        {
          category: "Compensation & Growth",
          items: [
            "Competitive salary and significant equity",
            "401(k) retirement plan",
            "Great scope, ownership and real impact",
            "AI Tools & Learning Stipend"
          ]
        },
        {
          category: "Health & Wellness", 
          items: [
            "Comprehensive health, dental, and vision insurance",
            "Monthly wellness and fitness stipend",
            "Unlimited PTO policy",
            "Immigration and visa support"
          ]
        },
        {
          category: "Work Environment",
          items: [
            "Catered lunch and dinner in office",
            "Monthly commute stipend",
            "Team building activities and events",
            "Collaborative San Francisco office space"
          ]
        }
      ];

    const teamValues = [
      {
        title: "World-Class Team",
        description: "Work alongside PhDs from UC Berkeley with papers published in MLSys, NeurIPS, OSDI, IEEE, and other top-tier conferences"
      },
      {
        title: "Proven Track Record", 
        description: "Founded billion-dollar companies and currently partner with Fortune 100 enterprises to deliver transformative technology solutions"
      },
      {
        title: "Exceptional Backing",
        description: "Supported by legendary investors including Eric Schmidt (former Google CEO), Ion Stoica (Databricks Founder, UC Berkeley Professor), and Elad Gil (early investor in Airbnb, Stripe, Notion)"
        }
      ];
      
    return (
        <div id="join-team" className="w-full relative py-16 sm:py-20 md:py-24 overflow-hidden bg-black">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <span className="text-sm font-medium text-white/80">Join Our Mission</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-tight">
                  Join Our Team
                </h2>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Join a world-class team of researchers, engineers, and entrepreneurs—
                  <span className="text-[#B3EBF2]"> building transformative enterprise technology </span>
                  in San Francisco.
                </p>
              </FadeInSection>
            </div>

            {/* Team Values Section */}
            <FadeInSection delay={400}>
              <div className="mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {teamValues.map((value, index) => (
                    <div key={index} className="relative group h-full">
                      <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 text-center transition-all duration-700 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:scale-[1.02]">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                          <svg className="w-6 h-6 text-[#B3EBF2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <h4 className="text-xl font-normal text-white mb-4 group-hover:text-[#B3EBF2] transition-colors duration-300">
                          {value.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                      {/* Background Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B3EBF2]/20 via-transparent to-[#B3EBF2]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm -z-10"></div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Benefits Section */}
            <FadeInSection delay={600}>
              <div className="mb-20">
                <h3 className="text-3xl sm:text-4xl font-normal text-center text-white mb-12">
                  Comprehensive Benefits Package
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {benefits.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="relative group h-full">
                      <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 transition-all duration-700 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                        <h4 className="text-xl font-normal text-white mb-6 border-b border-white/10 pb-4 group-hover:text-[#B3EBF2] transition-colors duration-300">
                          {category.category}
                        </h4>
                        <ul className="space-y-4">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#B3EBF2] rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-300 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Background Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B3EBF2]/20 via-transparent to-[#B3EBF2]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm -z-10"></div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Call to Action */}
            <FadeInSection delay={800}>
              <div className="text-center">
                <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 max-w-2xl mx-auto transition-all duration-700 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  <h3 className="text-2xl sm:text-3xl font-normal text-white mb-4">
                    Ready to Build the Future?
                  </h3>
                  <p className="text-gray-300 mb-8 text-base sm:text-lg leading-relaxed">
                    Join our mission to transform enterprise technology and work alongside world-class researchers, successful entrepreneurs, and industry veterans.
                  </p>
                  <Link href="https://jobs.ashbyhq.com/universalagi">
                    <Button
                      className="rounded-full text-black/90 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 font-semibold border-0 transition-all duration-300 hover:shadow-glow hover:scale-105"
                      style={{
                        background: "linear-gradient(to right, #B3EBF2, #7dd8e6)",
                        boxShadow: "0 4px 14px rgba(123, 216, 230, 0.5), 0 0 20px rgba(179, 235, 242, 0.3)",
                      }}
                    >
                      View Open Roles
                      <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      );
    } 