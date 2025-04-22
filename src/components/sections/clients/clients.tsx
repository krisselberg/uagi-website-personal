'use client'

import Image from "next/image";
import { FadeInSection } from "@/components/animations/FadeInSection";

// Array of logo paths
const logos = [
  { src: "/logos/Princeton.svg", alt: "Princeton Logo", width: 160, height: 80 },
  { src: "/logos/openai.svg", alt: "OpenAI Logo", width: 180, height: 90 },
  { src: "/logos/intel.svg", alt: "Intel Logo", width: 110, height: 55 },
  { src: "/logos/anyscale.svg", alt: "Anyscale Logo", width: 200, height: 100 },
  { src: "/logos/uc-berkeley.svg", alt: "UC Berkeley Logo", width: 170, height: 85 },
  { src: "/logos/nvidia-logo.svg", alt: "Nvidia Logo", width: 160, height: 80 },
  { src: "/logos/vllm_logo.svg", alt: "VLLM Logo", width: 150, height: 75 },
  // Add any other logos here if needed
];

export function BuiltByLeaders() {
  return (
    <section className="w-full py-32 overflow-hidden relative z-10">
      {/* Keep the header in container */}
      <div className="container mb-16">
        <FadeInSection>
          <h3 className="text-5xl font-medium text-center text-white/90">
            Built by AI Leaders from Silicon Valley <br /> and Top Research Institutions
          </h3>
        </FadeInSection>
      </div>

      {/* Ticker now completely outside container */}
      <div className="relative flex overflow-hidden group w-screen">
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black/80 to-transparent z-10"></div>
        
        <div className="flex animate-ticker whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <div key={`ticker-${index}`} className="flex-shrink-0 mx-8 md:mx-16 flex items-center justify-center h-16">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain max-h-full opacity-60 invert brightness-0"
              />
            </div>
          ))}
        </div>

        {/* Right fade mask */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black/80 to-transparent z-10"></div>
      </div>
    </section>
  );
}