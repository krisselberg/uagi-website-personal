import { PageLayout } from "@/components/layout/page-layout";
import { HeroSection } from "@/components/sections/hero/hero";
import { BuiltByLeaders } from "@/components/sections/clients/clients";
import { Capabilities } from "@/components/sections/capabilities/capabilities"
import { FeaturesSection } from "@/components/sections/features/features";
import { PastAdopters } from "@/components/sections/past-adopters/past-adopters";
import { JoinTeam } from "@/components/sections/join-team/join-team";
import { CTA } from "@/components/sections/cta/cta";
import { Careers } from "@/components/sections/careers/careers";
import { BackgroundWrapper } from "@/components/sections/background-wrapper";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <BuiltByLeaders />
      <PastAdopters />

      <Capabilities />
      <JoinTeam />
      <Footer />

    </PageLayout>
  );
}
