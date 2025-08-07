'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { useState } from "react";
import { Car, Dumbbell, Utensils } from "lucide-react";

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
            <Utensils className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-4 sm:mb-5 md:mb-6 text-[#7dd8e6]" />
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
        },
        {
          icon: (
            <Car className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-4 sm:mb-5 md:mb-6 text-[#7dd8e6]" />
          ),
          title: "Monthly Commute Stipend"
        },
        {
          icon: (
            <Dumbbell className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-4 sm:mb-5 md:mb-6 text-[#7dd8e6]" />
          ),
          title: "Monthly Wellness/Fitness Stipend"
        }
      ];
      
    return (
        <div id="join-team" className="w-full relative z-10 py-20 bg-black">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
            We're building something transformative in San Francisco and seeking
            exceptional AI engineering talent to join us in-office.
          </p>
        </FadeInSection>

                <FadeInSection delay={200}>
          <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 mb-16">
            <div className="text-center mb-10">
              <div className="inline-block bg-blue-500/10 p-4 rounded-full mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-400 w-8 h-8"
                >
                  <path
                    d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13C17.7699 3.58317 19.0078 5.17594 19.0078 7.005C19.0078 8.83406 17.7699 10.4268 16 10.88"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                We Invest in People
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We create an environment where individuals thrive, developing the
                skills to become exceptional founders and leaders.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-300">
                  "I've learned more in a week at UniversalAGI than I did in years
                  at previous jobs."
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-300">
                  "I was hired based on my potential beyond my existing technical
                  skills. The team actively invests in developing that
                  potential."
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
                
                {/* Button moved here, after the People section */}
                <FadeInSection delay={300}>
          <div className="text-center">
            <Link href="https://jobs.ashbyhq.com/universalagi">
              <Button
                className="
                  rounded-full 
                  text-black/90 text-lg sm:text-xl 
                  px-8 py-6 sm:px-10 sm:py-7 
                  font-bold 
                  border-0 
                  transition-all duration-300 
                  hover:shadow-glow-lg
                  transform hover:scale-105
                "
                style={{
                  background:
                    "linear-gradient(to right, #63b3ed, #4299e1)",
                  boxShadow:
                    "0 6px 20px rgba(66, 153, 225, 0.4)",
                }}
              >
                View Open Roles
              </Button>
            </Link>
          </div>
        </FadeInSection>

        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Benefits
          </h3>
          <p className="text-lg text-gray-300">
            We offer a comprehensive benefits package to support our team.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <div className="bg-gray-900 p-6 rounded-xl h-full flex flex-col items-center text-center">
                <div className="text-blue-400 mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-semibold text-white">
                  {benefit.title}
                </h4>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={300}>
          <div className="text-center">
            <Link href="https://jobs.ashbyhq.com/universalagi">
              <Button
                className="
                  rounded-full 
                  text-black/90 text-lg sm:text-xl 
                  px-8 py-6 sm:px-10 sm:py-7 
                  font-bold 
                  border-0 
                  transition-all duration-300 
                  hover:shadow-glow-lg
                  transform hover:scale-105
                "
                style={{
                  background:
                    "linear-gradient(to right, #63b3ed, #4299e1)",
                  boxShadow:
                    "0 6px 20px rgba(66, 153, 225, 0.4)",
                }}
              >
                View Open Roles
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
} 