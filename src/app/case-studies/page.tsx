"use client";
import Link from "next/link";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { SpaceBackground } from "@/components/animations/SpaceBackground";

const caseStudies = [
  {
    title: "How a Fortune 100 Tech Company Turned Business Ideas into Apps—Securely",
    description:
      "Empowered business teams to turn their ideas into secure, production-ready applications deployed in under 60 minutes—no coding required, with real-time UI previews, live data models, and seamless Salesforce, Slack, and API integrations.",
    link: "/enterprise",
    chip: {
      text: "Enterprise",
      bg: "bg-[#e3f4fd]", // pastel light blue
      textColor: "text-[#2563eb]", // blue-600
    },
    date: "Jul 2, 2025",
    author: "Product Team at UniversalAGI",
  },
  {
    title: "How a Large Government Supercharged Organizational Efficiency with AI Agents Built Securely on National Data",
    description:
      "Enabled non-technical officials to self-serve insights from air-gapped national data in under one minute—translated plain-English queries into audited SQL and interactive visualizations within a fully on-premise, compliance-driven environment.",
    link: "/government",
    chip: {
      text: "Government",
      bg: "bg-[#e3fbe3]", // pastel light green
      textColor: "text-[#059669]", // green-600
    },
    date: "Jul 2, 2025",
    author: "Product Team at UniversalAGI",
  },
];

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      <div className="fixed inset-0 w-full h-screen -z-10">
        <SpaceBackground starCount={300} speed={0.5} />
      </div>
      <section className="w-full min-h-screen py-16 md:py-24 relative z-10 bg-black/80">
        <div className="container mx-auto px-4 md:px-8">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-10 text-center font-sans">
              Case Studies
            </h1>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <Link href={study.link} className="block group">
                  <div className="rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 flex flex-col items-center bg-black/80 h-full group backdrop-blur-sm cursor-pointer hover:shadow-[0_0_0_4px_rgba(255,255,255,0.7),0_0_16px_4px_rgba(255,255,255,0.8)] focus:shadow-[0_0_0_4px_rgba(255,255,255,0.7),0_0_16px_4px_rgba(255,255,255,0.8)] p-8 md:p-10">
                    <div className="flex flex-col items-center justify-center mb-6">
                      <span className={`rounded-full px-3 py-0.5 text-sm font-medium ${study.chip.bg} ${study.chip.textColor} mb-4`} style={{letterSpacing: 0.1}}>
                        {study.chip.text}
                      </span>
                      <div className="text-gray-400 text-xs mb-1 font-sans font-normal">{study.date}</div>
                      <div className="text-gray-500 text-xs font-sans font-normal">{study.author}</div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-normal text-white mb-4 text-center font-sans group-hover:text-[#B3EBF2] transition-colors duration-300">
                      {study.title}
                    </h2>
                    <p className="text-gray-300 text-base text-center mb-2 font-sans font-normal">
                      {study.description}
                    </p>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 