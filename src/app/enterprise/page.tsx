'use client'
import { PageLayout } from "@/components/layout/page-layout";
import { FadeInSection } from "@/components/animations/FadeInSection";

import Image from "next/image";
import Link from "next/link";

const otherCaseStudies = [
  {
    title: "How a Large Government Supercharged Organizational Efficiency with AI Agents Built Securely on National Data",
    description:
      "Enabled non-technical officials to self-serve insights from air-gapped national data in under one minute—translated plain-English queries into audited SQL and interactive visualizations within a fully on-premise, compliance-driven environment.",
    link: "/government",
    chip: {
      text: "Government",
      bg: "bg-[#e3fbe3]",
      textColor: "text-[#059669]",
    },
    date: "Jul 2, 2025",
    author: "Product Team at UniversalAGI",
  },
];

export default function EnterprisePage() {
  return (
    <PageLayout>
      {/* Background for the entire page */}
      <div className="fixed inset-0 w-full h-screen -z-10 bg-black"></div>
      <section className="w-full min-h-screen py-12 md:py-20 relative z-10 bg-black/80">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 px-4 md:px-8">
          {/* Main Content */}
          <div className="flex-1 max-w-3xl mx-auto lg:mx-0">
            <FadeInSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 leading-tight font-sans">
                How a Fortune 100 Tech Company Turned Business Ideas into Apps—Securely
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <Image src="/logos/uagi-logo.svg" alt="UniversalAGI Logo" width={40} height={40} className="rounded-full bg-white/10 p-1" />
                <div>
                  <div className="text-gray-300 text-sm font-sans font-normal mb-1">Jul 2, 2025</div>
                  <div className="text-gray-400 text-xs font-sans font-normal">Product Team at UniversalAGI</div>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={100}>
              <div className="text-gray-300 text-lg mb-8 font-sans font-normal">
                UniversalAGI partnered with a Fortune 100 productivity leader to deliver an AI-driven, secure no-code platform—enabling business users to transform plain-English workflows into production-ready applications in under one hour.
              </div>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <h2 className="text-2xl md:text-3xl font-normal text-white mb-4 mt-10 font-sans">Opportunity: Democratizing Secure, End-to-End App Creation</h2>
              <div className="text-gray-300 mb-4 font-sans font-normal">
                Despite pioneering no-code development, the global productivity company struggled to make app building accessible to everyday business teams. Onboarding and configuring existing tools took weeks, required certified experts, and risked compliance gaps. The goal was to reduce weeks of setup to minutes—using natural language as the interface—while preserving enterprise-grade control, auditability, and security.
              </div>
            </FadeInSection>
            
            <FadeInSection delay={300}>
              <h2 className="text-2xl md:text-3xl font-normal text-white mb-4 mt-10 font-sans">Solution: Deploying a Natural-Language→Application Generation Platform</h2>
              <div className="text-gray-300 mb-4 font-sans font-normal">
                UniversalAGI delivered an AI-powered system that enabled both technical and non-technical teams to build fully functional applications without writing code:
              </div>
              <ul className="list-disc list-outside pl-3 text-gray-400 mb-6 space-y-2 font-sans font-normal">
                <li style={{textIndent: '-0.9em', paddingLeft: '13px'}}><span className="font-normal text-white">Chat- and Form-Based Interface:</span> Business users describe workflows ("track inventory," "schedule reorders") in natural language or via guided forms.</li>
                <li style={{textIndent: '-0.9em', paddingLeft: '13px'}}><span className="font-normal text-white">Live UI & Data-Model Generation:</span> The platform instantly renders editable wireframes and backend schemas in real time.</li>
                <li style={{textIndent: '-0.9em', paddingLeft: '13px'}}><span className="font-normal text-white">Seamless Integrations:</span> Generated apps connect on the fly with Salesforce, Slack, and any internal APIs.</li>
                <li style={{textIndent: '-0.9em', paddingLeft: '13px'}}><span className="font-normal text-white">Enterprise-Grade Security:</span> Containerized, on-premise components ensure no external data sharing; RBAC, audit logging, and cloud-native deployment uphold compliance.</li>
              </ul>
              <div className="text-gray-300 mb-4 font-sans font-normal">
                Users could further customize workflows with drag-and-drop UI controls—adding barcode scanning, alerts, or dashboards—which remained production-ready, version-controlled, and governed by strict access policies.
              </div>
            </FadeInSection>
            
            <FadeInSection delay={400}>
              <h2 className="text-2xl md:text-3xl font-normal text-white mb-4 mt-10 font-sans">Results: Business-Led App Creation in Under One Hour</h2>
              <div className="text-gray-300 mb-6 font-sans font-normal">
                <span>The deployment transformed app creation across the enterprise:</span>
              </div>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-separate border-spacing-x-8 text-base font-sans font-normal">
                  <thead>
                    <tr>
                      <th className="text-left text-gray-400 font-normal pb-2">Before UniversalAGI</th>
                      <th className="text-left text-gray-400 font-normal pb-2">After UniversalAGI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-300 py-1 align-top">Weeks of onboarding to use no-code tools</td>
                      <td className="text-gray-300 py-1 align-top">Apps deployed in under 60 minutes</td>
                    </tr>
                    <tr>
                      <td className="text-gray-300 py-1 align-top">Only certified developers could build advanced apps</td>
                      <td className="text-gray-300 py-1 align-top">Any team lead can build secure apps</td>
                    </tr>
                    <tr>
                      <td className="text-gray-300 py-1 align-top">Manual backend configuration & UI wiring</td>
                      <td className="text-gray-300 py-1 align-top">Auto-generated UIs & backend logic</td>
                    </tr>
                    <tr>
                      <td className="text-gray-300 py-1 align-top">No real-time feedback loop</td>
                      <td className="text-gray-300 py-1 align-top">Live visual previews with real-time data</td>
                    </tr>
                    <tr>
                      <td className="text-gray-300 py-1 align-top">High dependency on IT backlog</td>
                      <td className="text-gray-300 py-1 align-top">Business-led app creation with minimal lift</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 font-sans font-normal text-base">
                <h3 className="text-white text-2xl md:text-3xl font-normal mb-2">The bottom line:</h3>
                <ul className="list-disc list-outside pl-3 text-white space-y-1">
                  <li style={{textIndent: '-0.9em', paddingLeft: '13px'}}><span className="font-normal">80% reduction in onboarding time:</span> Any team can spin up a new app in under one hour.</li>
                  <li style={{textIndent: '-0.9em', paddingLeft: '13px'}}><span className="font-normal">Cornerstone of next-gen no-code strategy:</span> The platform shaped the client's product roadmap and go-to-market vision.</li>
                  <li style={{textIndent: '-0.9em', paddingLeft: '13px'}}><span className="font-normal">Real-time interactive previews:</span> Immediate app prototypes, data models, and external integrations—all within a secure, governed environment.</li>
                </ul>
              </div>
            </FadeInSection>
          </div>
          
          {/* Other Case Studies Sidebar */}
          <aside className="w-full max-w-sm mx-auto lg:mx-0 lg:w-96 flex-shrink-0">
            <div className="flex flex-col gap-8">
              {otherCaseStudies.map((study, idx) => (
                <Link href={study.link} key={idx} className="block group">
                  <div className="rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 flex flex-col items-center bg-black/80 h-full group backdrop-blur-sm cursor-pointer hover:shadow-[0_0_0_4px_rgba(255,255,255,0.7),0_0_16px_4px_rgba(255,255,255,0.8)] focus:shadow-[0_0_0_4px_rgba(255,255,255,0.7),0_0_16px_4px_rgba(255,255,255,0.8)] p-6 md:p-8">
                    <span className={`rounded-full px-3 py-0.5 text-sm font-medium ${study.chip.bg} ${study.chip.textColor} mb-4`} style={{letterSpacing: 0.1}}>
                      {study.chip.text}
                    </span>
                    <div className="text-gray-400 text-xs mb-1 font-sans font-normal">{study.date}</div>
                    <div className="text-gray-500 text-xs font-sans font-normal">{study.author}</div>
                    <h2 className="text-lg md:text-xl font-normal text-white mb-2 text-center font-sans group-hover:text-[#B3EBF2] transition-colors duration-300">
                      {study.title}
                    </h2>
                    <p className="text-gray-300 text-sm text-center mb-2 font-sans font-normal">
                      {study.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
} 