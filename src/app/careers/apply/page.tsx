'use client'

import { CareersForm } from "@/components/sections/careers/careers-form";
import { SpaceBackground } from "@/components/animations/SpaceBackground";
import { PageLayout } from "@/components/layout/page-layout";

export default function CareerApplyPage() {
  return (
    <PageLayout>
      <main className="flex min-h-screen flex-col bg-transparent relative">
        {/* Space background for the entire page */}
        <div className="absolute inset-0 w-full h-full">
          <SpaceBackground starCount={300} speed={0.5} />
        </div>
        
        {/* Header Section */}
        <section className="w-full py-24 relative z-10">
          <div className="container relative max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-normal mb-6 text-white">
              Apply to Join Our Team
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>
        </section>

        {/* Application Form Section - completely transparent */}
        <section className="py-12 relative z-10">
          <div className="container max-w-3xl mx-auto">
            <CareersForm />
          </div>
        </section>
      </main>
    </PageLayout>
  );
} 