import { PageLayout } from "@/components/layout/page-layout";
import { HeroSection } from "@/components/sections/hero/hero";
import { BuiltByLeaders } from "@/components/sections/clients/clients";
import { Capabilities } from "@/components/sections/capabilities/capabilities"
import { References } from "@/components/sections/references/references";
import { PastAdopters } from "@/components/sections/past-adopters/past-adopters";
import { JoinTeam } from "@/components/sections/join-team/join-team";
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
      <section className="min-h-screen bg-white flex items-center justify-center">
        <HeroSection />
      </section>
      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        <Capabilities />
      </section>
      <section className="min-h-screen bg-white flex items-center justify-center">
        <BuiltByLeaders />
      </section>
      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        <PastAdopters />
      </section>
      <section className="min-h-screen bg-white flex items-center justify-center">
        <References />
      </section>
      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        <JoinTeam />
      </section>
    </PageLayout>
  );
}
