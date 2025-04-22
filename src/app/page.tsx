import { PageLayout } from "@/components/layout/page-layout";
import { HeroSection } from "@/components/sections/hero/hero";
import { BuiltByLeaders } from "@/components/sections/clients/clients";
import { Capabilities } from "@/components/sections/capabilities/capabilities"
import { PastAdopters } from "@/components/sections/past-adopters/past-adopters";
import { JoinTeam } from "@/components/sections/join-team/join-team";

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
