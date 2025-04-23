'use client'

import { FadeInSection } from "@/components/animations/FadeInSection";
import { PageLayout } from "@/components/layout/page-layout";
import { SpaceBackground } from "@/components/animations/SpaceBackground";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  const leadershipTeam = [
    {
      name: "Ameer Haj Ali",
      title: "CEO & Founder",
      image: "/ameer_30u30.jpeg",
      bio: "Ameer Haj Ali is a Forbes 30 Under 30 honoree and accomplished AI researcher with a PhD from UC Berkeley, which he notably completed in a record two years – the fastest in the program's history. His groundbreaking work in machine learning and compiler optimization has been recognized in top-tier conferences and journals. As the founder of UniversalAGI, Ameer is dedicated to building enterprise-grade AI solutions that bridge the gap between cutting-edge research and practical business applications."
    }
  ];

  const principles = [
    {
      title: "Human-Centered AI",
      description: "We design our systems to augment human capabilities, not replace them. Our AI solutions are tools that enhance human decision-making and creativity."
    },
    {
      title: "Security by Design",
      description: "Data security and privacy are foundational to our approach. We implement rigorous security measures at every stage of development."
    },
    {
      title: "Continuous Improvement",
      description: "AI is an evolving field, and we are committed to staying at the forefront. We continuously refine our solutions based on new research and feedback."
    }
  ];

  return (
    <PageLayout>
      {/* Space background for the entire page */}
      <div className="fixed inset-0 w-full h-screen">
        <SpaceBackground starCount={300} speed={0.5} />
      </div>
      
      {/* Header Section */}
      <section className="w-full py-16 relative z-10">
        <div className="container relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-normal mb-6 text-white">
            About Us
          </h1>
          
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Building the future of enterprise AI solutions
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-10 relative z-10">
        <div className="container max-w-5xl mx-auto">
          <FadeInSection>
            <Card className="group rounded-2xl border border-gray-800 hover:border-gray-700 backdrop-blur-sm bg-black/40 transition-all duration-500 p-8 md:p-12 mx-auto overflow-hidden">
              <h2 className="text-4xl font-medium mb-8 text-white text-left">
                Our Mission
              </h2>
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                At UniversalAGI, our mission is to democratize advanced AI capabilities for enterprises and government organizations. We're committed to developing secure, scalable, and customizable AI solutions that solve real-world problems.
              </p>
              <p className="text-xl text-gray-200 leading-relaxed">
                We believe that artificial intelligence should be accessible, understandable, and beneficial to all organizations regardless of their size or technical expertise. Our goal is to bridge the gap between cutting-edge AI research and practical business applications, ensuring that our clients can harness the full potential of this transformative technology.
              </p>
            </Card>
          </FadeInSection>
        </div>
      </section>

      {/* Leadership and Backing Section */}
      <section className="py-20 relative z-10 bg-black/30">
        <div className="container max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-medium mb-10 text-center text-white">
              Our Investors 
            </h2>
            
            <div className="mt-8 text-center">
              <div className="flex flex-wrap justify-center items-center gap-10 mt-8">
                <div className="w-40 h-16 bg-gray-800/50 rounded-md flex items-center justify-center hover:bg-gray-700/60 transition-colors duration-300">
                  <span className="text-white text-lg font-medium">Elad Gil</span>
                </div>
                <div className="w-40 h-16 bg-gray-800/50 rounded-md flex items-center justify-center hover:bg-gray-700/60 transition-colors duration-300">
                  <span className="text-white text-lg font-medium">Jared Kushner</span>
                </div>
                <div className="w-40 h-16 bg-gray-800/50 rounded-md flex items-center justify-center hover:bg-gray-700/60 transition-colors duration-300">
                  <span className="text-white text-lg font-medium">David Patterson</span>
                </div>
                <div className="w-40 h-16 bg-gray-800/50 rounded-md flex items-center justify-center hover:bg-gray-700/60 transition-colors duration-300">
                  <span className="text-white text-lg font-medium">Eric Schmidt</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
                <div className="w-40 h-16 bg-gray-800/50 rounded-md flex items-center justify-center hover:bg-gray-700/60 transition-colors duration-300">
                  <span className="text-white text-lg font-medium">Ion Stoica</span>
                </div>
                <div className="w-40 h-16 bg-gray-800/50 rounded-md flex items-center justify-center hover:bg-gray-700/60 transition-colors duration-300">
                  <span className="text-white text-lg font-medium">Ivanka Trump</span>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 relative z-10">
        <div className="container max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-medium mb-10 text-center text-white">
              Our Principles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <Card className="group h-full rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:translate-y-[-4px] backdrop-blur-sm bg-black/40 overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-4 text-white group-hover:text-[#B3EBF2] transition-colors duration-300">
                        {principle.title}
                      </h3>
                      <p className="text-gray-300 text-base group-hover:text-gray-200 transition-colors duration-300">
                        {principle.description}
                      </p>
                    </div>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>
    </PageLayout>
  );
} 