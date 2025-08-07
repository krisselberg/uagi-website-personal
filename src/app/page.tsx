import { PageLayout } from "@/components/layout/page-layout";
import { HeroSection } from "@/components/sections/hero/hero";
import { BuiltByLeaders } from "@/components/sections/clients/clients";
import { Capabilities } from "@/components/sections/capabilities/capabilities"
import { References } from "@/components/sections/references/references";
import { PastAdopters } from "@/components/sections/past-adopters/past-adopters";
import { JoinTeam } from "@/components/sections/join-team/join-team";
import { PageNavigationArrow } from "@/components/ui/page-navigation-arrow";
import { SectionNavigationArrow } from "@/components/ui/section-navigation-arrow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UniversalAGI - AI Agents for Enterprise and Government",
  description: "Latest AI Breakthroughs on top of your secure data",
  openGraph: {
    title: "UniversalAGI",
    description: "Latest AI Breakthroughs on top of your secure data",
    url: 'https://universalagi.com',
    siteName: "UniversalAGI",
    locale: "en_US",
    type: "website",
  }
};

export default function Home() {
  return (
    <PageLayout>
      <section id="hero" className="h-screen bg-white flex items-center justify-center relative -mt-20">
        <HeroSection />
        <SectionNavigationArrow targetSectionId="capabilities" sectionTitle="Secure AI Platform" theme="light" />
      </section>
      <section id="capabilities" className="min-h-screen relative text-white flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/uagi_video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        {/* Content */}
        <div className="relative z-20 w-full">
          <Capabilities />
        </div>
        <SectionNavigationArrow targetSectionId="clients" sectionTitle="AI Leaders" theme="dark" />
      </section>
      <section id="clients" className="min-h-screen bg-white flex items-center justify-center relative">
        <BuiltByLeaders />
        <SectionNavigationArrow targetSectionId="case-studies" sectionTitle="Case Studies" theme="light" />
      </section>
      <section id="case-studies" className="min-h-screen bg-black text-white flex items-center justify-center">
        <PastAdopters />
      </section>
      <section id="references" className="min-h-screen bg-white flex items-center justify-center relative">
        <References />
        <SectionNavigationArrow targetSectionId="join-team" sectionTitle="Join Our Team" theme="light" />
      </section>
      <section id="join-team" className="min-h-screen bg-black text-white flex items-center justify-center">
        <JoinTeam />
      </section>
      <section className="bg-black">
        <PageNavigationArrow />
      </section>
    </PageLayout>
  );
}
