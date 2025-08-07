'use client'

import { FadeInSection } from "@/components/animations/FadeInSection";
import { PageLayout } from "@/components/layout/page-layout";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const achievements = [
    {
      title: "Forbes 30 Under 30",
      description: "Recognition for innovation in enterprise technology"
    },
    {
      title: "PhD in Record Time",
      description: "Fastest completion in UC Berkeley's program history"
    },
    {
      title: "Top-Tier Publications",
      description: "Research published in MLSys, NeurIPS, OSDI, and IEEE"
    },
    {
      title: "Fortune 100 Partnerships",
      description: "Trusted by leading enterprise and government organizations"
    }
  ];

  const coreValues = [
    {
      title: "Security First",
      description: "Enterprise-grade security and compliance built into every solution, including air-gapped deployments for sensitive data."
    },
    {
      title: "Human-Centric Design",
      description: "AI that augments human capabilities and decision-making rather than replacing people in the workforce."
    },
    {
      title: "Research Excellence",
      description: "Cutting-edge research translated into practical business solutions with measurable impact."
    },
    {
      title: "Rapid Innovation",
      description: "From concept to deployment in minutes, not months—enabling unprecedented business agility."
    }
  ];

  const investors = [
    { name: "Eric Schmidt", title: "Former Google CEO" },
    { name: "Ion Stoica", title: "Databricks Co-Founder, UC Berkeley Professor" },
    { name: "Elad Gil", title: "Early Investor in Airbnb, Stripe, Notion" },
    { name: "David Patterson", title: "Turing Award Winner, Google Distinguished Scientist" },
    { name: "House Fund", title: "Venture Capital Fund" },
    { name: "Swift Ventures", title: "Venture Capital Fund" },
    { name: "Jared Kushner", title: "Former Senior Advisor to the President" },
    { name: "Ivanka Trump", title: "Former Advisor to the President" },
    { name: "Luis Videgaray Caso", title: "Former Secretary of Foreign Affairs, Mexico" }
  ];

  return (
    <PageLayout>
      {/* Background for the entire page */}
      <div className="fixed inset-0 w-full h-screen -z-10 bg-black"></div>
      
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span className="text-sm font-medium text-white/80">Our Story</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-tight">
                About UniversalAGI
              </h1>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Founded by world-class researchers and backed by legendary investors—
                <span className="text-[#B3EBF2]"> building the future </span>
                of enterprise and government AI.
              </p>
            </FadeInSection>
          </div>

          {/* Mission & Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-20">
            <FadeInSection delay={400}>
              <div className="relative group h-full">
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 md:p-10 transition-all duration-700 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-[#B3EBF2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-normal text-white mb-6">
                    Our Mission
                  </h2>
                  <p className="text-gray-300 text-base leading-relaxed mb-4">
                    At UniversalAGI, we democratize advanced AI capabilities for enterprises and government organizations through secure, scalable, and customizable solutions that solve real-world problems.
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    We bridge the gap between cutting-edge AI research and practical business applications, ensuring organizations can harness the full potential of transformative technology regardless of size or technical expertise.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={600}>
              <div className="relative group h-full">
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 md:p-10 transition-all duration-700 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-[#B3EBF2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-normal text-white mb-6">
                    Our Vision
                  </h2>
                  <p className="text-gray-300 text-base leading-relaxed mb-4">
                    We envision a future where AI amplifies human potential across every organization, enabling unprecedented innovation while maintaining the highest standards of security and ethical deployment.
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    From Fortune 100 companies to national security agencies, we're building AI that transforms industries while keeping humans at the center of decision-making.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Leadership Section */}
          <FadeInSection delay={800}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-8">
                Leadership
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative group">
                  <div className="relative rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 md:p-12 transition-all duration-700 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-white/20 flex-shrink-0">
                        <Image
                          src="/ameer_30u30.jpeg"
                          alt="Ameer Haj Ali"
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl sm:text-3xl font-normal text-white mb-2">
                          Ameer Haj Ali
                        </h3>
                        <p className="text-[#B3EBF2] text-lg mb-4">CEO & Founder</p>
                        <p className="text-gray-300 text-base leading-relaxed">
                          Forbes 30 Under 30 honoree and accomplished AI researcher with a PhD from UC Berkeley, completed in record time—the fastest in program history. His groundbreaking work in machine learning and compiler optimization has been recognized in top-tier conferences including MLSys, NeurIPS, OSDI, and IEEE.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Core Values Section */}
          <FadeInSection delay={500}>
            <div className="mb-20">
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-12 text-center">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coreValues.map((value, index) => (
                  <div key={index} className="relative group">
                    <div className="relative rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 transition-all duration-700 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-[#B3EBF2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-normal text-white mb-3 group-hover:text-[#B3EBF2] transition-colors duration-300">
                            {value.title}
                          </h3>
                          <p className="text-gray-300 text-base leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Investors & Advisors Section */}
          <FadeInSection delay={500}>
            <div className="mb-20">
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-12 text-center">
                Backed by Industry Leaders
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {investors.map((investor, index) => (
                  <div key={index} className="relative group">
                    <div className="relative rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-6 text-center transition-all duration-700 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:scale-[1.02]">
                      <h3 className="text-lg font-normal text-white mb-2 group-hover:text-[#B3EBF2] transition-colors duration-300">
                        {investor.name}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {investor.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Bottom CTA Section */}
          <FadeInSection delay={500}>
            <div className="text-center">
              <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 max-w-2xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-normal text-white mb-4">
                  Ready to Transform Your Organization?
                </h3>
                <p className="text-gray-300 mb-6 text-base sm:text-lg">
                  Join leading enterprises and government agencies in partnering with us to unlock the full potential of secure AI.
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
    </PageLayout>
  );
} 