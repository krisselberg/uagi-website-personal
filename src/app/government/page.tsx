'use client'
import { PageLayout } from "@/components/layout/page-layout";
import { PageNavigationArrow } from "@/components/ui/page-navigation-arrow";
import { FadeInSection } from "@/components/animations/FadeInSection";

import Image from "next/image";
import Link from "next/link";

const otherCaseStudies = [
  {
    title: "How a Fortune 100 Tech Company Turned Business Ideas into Apps—Securely",
    description:
      "Empowered business teams to turn their ideas into secure, production-ready applications deployed in under 60 minutes—no coding required, with real-time UI previews, live data models, and seamless Salesforce, Slack, and API integrations.",
    link: "/enterprise",
    chip: {
      text: "Private Sector",
      bg: "bg-[#e3f4fd]",
      textColor: "text-[#2563eb]",
    },
    date: "Jul 2, 2025",
    author: "Product Team at UniversalAGI",
  },
];

export default function GovernmentPage() {
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
                How a Large Government Supercharged Organizational Efficiency with AI Agents Built Securely on National Data
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
                UniversalAGI collaborated with a central government entity to deliver a fully air-gapped AI analytics platform on national datasets. Senior officials—previously dependent on analysts for SQL queries and visualizations—can now self-serve insights in under one minute, all within a secure, on-premise environment.
              </div>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <h2 className="text-2xl md:text-3xl font-normal text-white mb-4 mt-10 font-sans">Opportunity: Equipping Non-Technical Officials with Secure, Real-Time Insights</h2>
              <div className="text-gray-300 mb-4 font-sans font-normal">
                As the size and strategic importance of national datasets grew, senior government officials lacked direct access—non-technical users were unable to extract insights without data teams, and traditional analytics tools could not operate within fully air-gapped, on-premise infrastructure. The government needed a compliant, user-friendly platform that could translate plain-English questions into trusted analytics without any data egress.
              </div>
            </FadeInSection>
            
            <FadeInSection delay={300}>
              <h2 className="text-2xl md:text-3xl font-normal text-white mb-4 mt-10 font-sans">Solution: Deploying a Fully Air-Gapped AI Analytics System</h2>
              <div className="text-gray-300 mb-4 font-sans font-normal">
                UniversalAGI delivered an end-to-end, on-premise AI platform with:
              </div>
              <ul className="list-disc list-outside pl-3 text-gray-400 mb-6 space-y-2 font-sans font-normal">
                <li style={{textIndent: '-0.9em', paddingLeft: '13px'}}><span className="font-normal text-white">Natural-Language→SQL & Chart Synthesis:</span> LLM-powered translation of questions ("What are the top 5 performing organizations?") into multiple candidate SQL queries, validated in parallel, with the best executed securely.</li>
                <li style={{textIndent: '-0.9em', paddingLeft: '13px'}}><span className="font-normal text-white">Clean-Room Compliance:</span> Zero external network access; containerized Kubernetes deployment behind government firewalls with no persistent credentials.</li>
                <li style={{textIndent: '-0.9em', paddingLeft: '13px'}}><span className="font-normal text-white">On-Premise Databricks Integration:</span> Direct connectivity to the national data lake via an air-gapped Databricks cluster for schema-aware querying.</li>
                <li style={{textIndent: '-0.9em', paddingLeft: '13px'}}><span className="font-normal text-white">Benchmarking Engine:</span> Continuous performance tracking of SQL accuracy against hand-labeled examples, driving iterative improvements.</li>
              </ul>
              <div className="text-gray-300 mb-4 font-sans font-normal">
                UniversalAGI engineers worked onsite in secure facilities alongside government SMEs to ensure compliance, full auditability, and operational autonomy.
              </div>
            </FadeInSection>
            
            <FadeInSection delay={400}>
              <h2 className="text-2xl md:text-3xl font-normal text-white mb-4 mt-10 font-sans">Results: Secure, Self-Service Analytics in Under One Minute</h2>
              <div className="text-gray-300 mb-6 font-sans font-normal">
                The deployment transformed data access across the agency:
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
                      <td className="text-gray-300 py-1 align-top">Manual SQL required for every query</td>
                      <td className="text-gray-300 py-1 align-top">Plain-English natural language input</td>
                    </tr>
                    <tr>
                      <td className="text-gray-300 py-1 align-top">15–45 minutes per query + visualization creation</td>
                      <td className="text-gray-300 py-1 align-top">Under 1 minute end-to-end</td>
                    </tr>
                    <tr>
                      <td className="text-gray-300 py-1 align-top">Analysts mediated all data access</td>
                      <td className="text-gray-300 py-1 align-top">Senior officials self-serve insights</td>
                    </tr>
                    <tr>
                      <td className="text-gray-300 py-1 align-top">Risk of misinterpretation or errors</td>
                      <td className="text-gray-300 py-1 align-top">Versioned logic + explainable results</td>
                    </tr>
                    <tr>
                      <td className="text-gray-300 py-1 align-top">Limited scalability across departments</td>
                      <td className="text-gray-300 py-1 align-top">Foundation for cross-agency analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 font-sans font-normal text-base">
                <h3 className="text-white text-2xl md:text-3xl font-normal mb-2">The bottom line:</h3>
                <ul className="list-disc list-outside pl-3 text-white space-y-1">
                  <li style={{textIndent: '-0.9em', paddingLeft: '13px'}}><span className="font-normal">&lt; 1 Minute to Insight:</span> Reduced query-to-visualization time from 15–45 minutes to under 60 seconds.</li>
                  <li style={{textIndent: '-0.9em', paddingLeft: '13px'}}><span className="font-normal">Full Compliance & Security:</span> 100% air-gapped, audited deployments with zero data egress.</li>
                  <li style={{textIndent: '-0.9em', paddingLeft: '13px'}}><span className="font-normal">Rapid Time-to-Production:</span> Solution live in under 4 weeks, powering hundreds of queries per day with explainable, auditable results.</li>
                </ul>
              </div>
              <div className="text-gray-300 mt-8 font-sans font-normal">
                With this platform, the government now treats AI agents as a foundational capability—empowering non-technical leaders, accelerating decision-making, and establishing a secure, scalable model for future data-driven initiatives.
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
      
      <section className="bg-black">
        <PageNavigationArrow />
      </section>
    </PageLayout>
  );
} 