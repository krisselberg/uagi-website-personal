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
      <section id="hero" className="h-screen bg-black flex items-center justify-center relative -mt-20 overflow-hidden">
        <HeroSection />
        <SectionNavigationArrow targetSectionId="clients" sectionTitle="AI Leaders" theme="dark" />
      </section>
      <section id="clients" className="min-h-screen bg-white flex items-center justify-center relative">
        <BuiltByLeaders />
        <SectionNavigationArrow targetSectionId="capabilities" sectionTitle="Secure AI Platform" theme="light" />
      </section>
      <section id="capabilities" className="min-h-screen relative text-white flex items-center justify-center overflow-hidden">
        <Capabilities />
        <SectionNavigationArrow targetSectionId="case-studies" sectionTitle="Case Studies" theme="dark" />
      </section>
      <section id="case-studies" className="min-h-screen bg-black text-white flex items-center justify-center">
        <PastAdopters />
        <SectionNavigationArrow targetSectionId="references" sectionTitle="References" theme="dark" />
      </section>
      <section id="references" className="min-h-screen bg-white flex items-center justify-center relative">
        <References />
        <SectionNavigationArrow targetSectionId="join-team" sectionTitle="Join Our Team" theme="light" />
      </section>
      <section id="join-team" className="min-h-screen bg-black text-white flex items-center justify-center">
        <JoinTeam />
      </section>
    </PageLayout>
  );
}
