'use client'

import Image from "next/image";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { useEffect, useRef, useState } from "react";
import { useEffect as useDevEffect } from "react";

// Array of logo paths
const logos = [
  { src: "/logos/cruise.svg", alt: "Cruise Logo", width: 140, height: 70, className: "pb-1" },
  { src: "/logos/anyscale.svg", alt: "Anyscale Logo", width: 200, height: 100 },
  { src: "/logos/Princeton.svg", alt: "Princeton Logo", width: 160, height: 80 },
  { src: "/logos/openai.svg", alt: "OpenAI Logo", width: 180, height: 90 },
  { src: "/logos/apple_logo.svg", alt: "Apple Logo", width: 180, height: 90, className: "pb-2" },
  { src: "/logos/tesla.svg", alt: "Tesla Logo", width: 200, height: 100, className: "pt-1" },
  { src: "/logos/nvidia-logo.svg", alt: "Nvidia Logo", width: 160, height: 80 },
  { src: "/logos/amazon.svg", alt: "Amazon Logo", width: 150, height: 75 },
  { src: "/logos/palantir.svg", alt: "Palantir Logo", width: 200, height: 100 }, 
  { src: "/logos/uc-berkeley.svg", alt: "UC Berkeley Logo", width: 170, height: 85 },
  { src: "/logos/rivian.svg", alt: "Rivian Logo", width: 200, height: 100 },
  { src: "/logos/intel.svg", alt: "Intel Logo", width: 110, height: 55 },
  // Add any other logos here if needed
];

export function BuiltByLeaders() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [logosWidth, setLogosWidth] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const posRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  // Measure the width of a single set of logos
  useEffect(() => {
    if (!tickerRef.current) return;
    // Temporarily render one set to measure
    const ticker = tickerRef.current;
    setLogosWidth(ticker.scrollWidth / 2);
  }, [logos.length]);

  useEffect(() => {
    if (!logosWidth) return;
    let running = true;
    const pxPerSec = logosWidth / 40;
    function animate(now: number) {
      if (!running) return;
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;
      posRef.current += direction * pxPerSec * dt;
      if (posRef.current >= logosWidth) posRef.current -= logosWidth;
      if (posRef.current < 0) posRef.current += logosWidth;
      if (tickerRef.current) {
        tickerRef.current.style.transform = `translateX(${-posRef.current}px)`;
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    return () => { running = false; };
  }, [logosWidth, direction]);

  function handleDirection(dir: 'left' | 'right') {
    setDirection(dir === 'left' ? 1 : -1);
  }

  return (
    <section className="w-full py-16 sm:py-24 md:py-32 overflow-hidden relative z-10">
      {/* Keep the header in container */}
      <div className="container px-4 sm:px-6 md:px-8 mb-10 sm:mb-16">
        <FadeInSection>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-medium text-center text-white/90 leading-tight">
            Built by AI Leaders from Silicon Valley <br /> and Top Reseach Institutions
          </h3>
        </FadeInSection>
      </div>

      {/* Infinite ticker logo row */}
      <div className="relative w-full">
        {/* Arrow buttons */}
        <button
          aria-label="Scroll Left"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow-md focus:outline-none focus:ring-0"
          onClick={() => handleDirection('left')}
          type="button"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button
          aria-label="Scroll Right"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow-md focus:outline-none focus:ring-0"
          onClick={() => handleDirection('right')}
          type="button"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none"></div>
        <div ref={containerRef} className="overflow-hidden px-8 py-2 relative z-0 select-none">
          <div
            ref={tickerRef}
            className="flex whitespace-nowrap gap-8 sm:gap-12 md:gap-16 will-change-transform select-none"
            style={{ transform: "translateX(0px)", transition: "none" }}
          >
            {/* Render two sets of logos for seamless looping */}
            {[0, 1].map(setIdx =>
              logos.map((logo, index) => (
                <div key={`ticker-${setIdx}-${index}`} className="flex-shrink-0 flex items-center justify-center select-none">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className={`object-contain max-h-full max-w-[100px] sm:max-w-[130px] md:max-w-full opacity-60 invert brightness-0 ${logo.className ?? ''}`}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}