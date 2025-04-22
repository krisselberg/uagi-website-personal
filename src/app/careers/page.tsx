'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { SpaceBackground } from "@/components/animations/SpaceBackground";
import { PageLayout } from "@/components/layout/page-layout";

export default function CareersPage() {
  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-6">
          <path d="M12 6V12L16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4L19 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 2.5L21 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Competitive compensation",
      description: "We reward top talent with compelling salaries and meaningful equity, giving you a real stake in our shared success."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-6">
          <path d="M19 14C19 16.7614 15.866 19 12 19C8.13401 19 5 16.7614 5 14V10C5 7.23858 8.13401 5 12 5C15.866 5 19 7.23858 19 10V14Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 10C3 13.866 7 16 12 16C17 16 21 13.866 21 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 5C15.866 5 19 7.23858 19 10C19 12.7614 15.866 15 12 15C8.13401 15 5 12.7614 5 10C5 7.23858 8.13401 5 12 5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Health and wellness",
      description: "Stay healthy and secure with our comprehensive medical, dental, and vision insurance package."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-6">
          <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C17.7699 3.58317 19.0078 5.17594 19.0078 7.005C19.0078 8.83406 17.7699 10.4268 16 10.88" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Team Building",
      description: "We enjoy connecting through fun activities outside of work, strengthening our bonds inside and outside the office walls."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-6">
          <path d="M8 7V3M16 7V3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 11L21 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="3" y="5" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 15H10M14 15H16M8 19H10M14 19H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Unlimited PTO",
      description: "We believe in giving you the autonomy to manage your own time off, ensuring you can take breaks when needed to stay refreshed and productive."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-6">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 12H9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 12H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 3L12 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15L12 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.63599 5.63604L9.87867 9.87872" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.1213 14.1213L18.364 18.364" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "No Silos, Just Growth",
      description: "Our lean AI startup environment fosters constant learning, growth, and invaluable experience across the AI landscape as everyone contributes where needed."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-6">
          <path d="M12 8V13L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22H15C15 20.3431 13.6569 19 12 19C10.3431 19 9 20.3431 9 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 3L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 3L22 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 6H3C3 12.6274 7.37258 18 14 18C20.6274 18 21 12.6274 21 6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "401(k) plan",
      description: "Build your long-term financial security with our valuable 401(k) retirement savings plan."
    }
  ];

  return (
    <PageLayout>
      <main className="flex min-h-screen flex-col bg-transparent relative">
        {/* Space background for the entire page */}
        <div className="absolute inset-0 w-full h-full">
          <SpaceBackground starCount={300} speed={0.5} />
        </div>
        
        {/* Header Section */}
        <section className="w-full py-32 relative z-10">
          <div className="container relative max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-normal mb-8 text-white">
              Join Our Team
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              We're looking for exceptional talent to help build the future of AI
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-20 relative z-10">
          <div className="container max-w-6xl mx-auto">
            <FadeInSection>
              <h2 className="text-5xl font-medium mb-16 text-center text-white">
                Benefits & Perks
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {benefits.map((benefit, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <div className="group h-full rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:translate-y-[-4px] backdrop-blur-sm bg-black/40 overflow-hidden">
                    <div className="p-6">
                      {benefit.icon}
                      <h3 className="text-xl font-medium mb-3 text-white group-hover:text-[#B3EBF2] transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={600}>
              <div className="mt-20 text-center">
                <Link href="/careers/apply">
                  <Button 
                    className="rounded-full text-black/90 text-lg px-8 py-6 font-semibold border-0 transition-all duration-300 hover:shadow-glow"
                    style={{ 
                      background: 'linear-gradient(to right, #B3EBF2, #7dd8e6)',
                      boxShadow: '0 4px 14px rgba(123, 216, 230, 0.5), 0 0 20px rgba(179, 235, 242, 0.3)'
                    }}
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
    </PageLayout>
  );
} 