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
    images: [
      {
        url: "/message_thumbnail.png",
        width: 1200,
        height: 630,
        alt: "UniversalAGI",
      }
    ],
    siteName: "UniversalAGI",
    locale: "en_US",
    type: "website",
  }
};

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <Capabilities />
      <BuiltByLeaders />
      <PastAdopters />
      <References />
      <JoinTeam />
    </PageLayout>
  );
}
