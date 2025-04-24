import { PageLayout } from "@/components/layout/page-layout";
import { HeroSection } from "@/components/sections/hero/hero";
import { BuiltByLeaders } from "@/components/sections/clients/clients";
import { Capabilities } from "@/components/sections/capabilities/capabilities"
import { PastAdopters } from "@/components/sections/past-adopters/past-adopters";
import { JoinTeam } from "@/components/sections/join-team/join-team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UniversalAGI",
  description: "UniversalAGI is the AI platform built to meet the standards of the world's leading enterprises.",
  openGraph: {
    title: "UniversalAGI",
    description: "UniversalAGI is the AI platform built to meet the standards of the world's leading enterprises.",
    url: '/',
    images: [
      {
        url: "/message_thumbnail.png",
        width: 1200,
        height: 630,
        alt: "UniversalAGI",
      }
    ],
  }
};

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <BuiltByLeaders />
      <PastAdopters />

      <Capabilities />
      <JoinTeam />
    </PageLayout>
  );
}
