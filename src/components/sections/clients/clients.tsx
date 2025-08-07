'use client'

import Image from "next/image";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { useRef, useEffect, useState } from "react";

// Array of logo paths
const logos = [
  { src: "/logos/Princeton.svg", alt: "Princeton Logo", width: 160, height: 80 },
  { src: "/logos/openai.svg", alt: "OpenAI Logo", width: 180, height: 90 },
  { src: "/logos/intel.svg", alt: "Intel Logo", width: 110, height: 55 },
  { src: "/logos/google.svg", alt: "Google Logo", width: 200, height: 100 },
  { src: "/logos/microsoft.svg", alt: "Microsoft Logo", width: 220, height: 200 },
  { src: "/logos/amazon.svg", alt: "Amazon Logo", width: 150, height: 75 },
  { src: "/logos/anyscale.svg", alt: "Anyscale Logo", width: 200, height: 100 },
  { src: "/logos/salesforce.svg", alt: "Salesforce Logo", width: 200, height: 140 },
  { src: "/logos/palantir.svg", alt: "Palantir Logo", width: 200, height: 100 }, 
  { src: "/logos/uc-berkeley.svg", alt: "UC Berkeley Logo", width: 170, height: 85 },
  { src: "/logos/nvidia-logo.svg", alt: "Nvidia Logo", width: 160, height: 80 },
  { src: "/logos/apple_logo.svg", alt: "Apple Logo", width: 200, height: 200 },
  { src: "/logos/snowflake.svg", alt: "Snowflake Logo", width: 200, height: 100 },
  { src: "/logos/tesla.svg", alt: "Tesla Logo", width: 200, height: 100 },
  { src: "/logos/rivian.svg", alt: "Rivian Logo", width: 200, height: 100 },
  { src: "/logos/cruise.svg", alt: "Cruise Logo", width: 200, height: 100 }
  // Add any other logos here if needed
];

export function BuiltByLeaders() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const pausedRef = useRef(false);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let animationFrameId: number;
    let lastTime = performance.now();
    const scrollSpeed = 0.05; // px per ms

    const step = (now: number) => {
      if (!pausedRef.current) {
        const delta = now - lastTime;
        container.scrollLeft += scrollSpeed * delta;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      lastTime = now;
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="w-full overflow-hidden relative z-10">
      {/* Keep the header in container */}
      <div className="container px-4 sm:px-6 md:px-8 mb-10 sm:mb-16">
        <FadeInSection>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-normal text-center text-black/90 leading-tight">
            Built by AI Leaders from Silicon Valley <br /> and Top Reseach Institutions
          </h3>
        </FadeInSection>
      </div>

      {/* Ticker now completely outside container */}
      <div className="relative w-screen overflow-hidden">
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

        <div
          ref={containerRef}
          className={
            `flex whitespace-nowrap overflow-x-auto scrollbar-hide touch-pan-x w-full ${
              dragging ? 'cursor-grabbing' : 'cursor-grab'
            }`
          }
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setDragging(false);
          }}
          onMouseDown={e => {
            setIsPaused(true);
            setDragging(true);
            dragStartX.current = e.clientX;
            scrollStartX.current = containerRef.current?.scrollLeft ?? 0;
          }}
          onMouseMove={e => {
            if (!dragging) return;
            e.preventDefault();
            const dx = e.clientX - dragStartX.current;
            if (containerRef.current) {
              containerRef.current.scrollLeft = scrollStartX.current - dx;
            }
          }}
          onMouseUp={() => {
            setDragging(false);
            setIsPaused(false);
          }}
          onTouchStart={e => {
            setIsPaused(true);
            setDragging(true);
            dragStartX.current = e.touches[0].clientX;
            scrollStartX.current = containerRef.current?.scrollLeft ?? 0;
          }}
          onTouchMove={e => {
            if (!dragging) return;
            const dx = e.touches[0].clientX - dragStartX.current;
            if (containerRef.current) {
              containerRef.current.scrollLeft = scrollStartX.current - dx;
            }
          }}
          onTouchEnd={() => {
            setDragging(false);
            setIsPaused(false);
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={`ticker-${index}`} className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-16 flex items-center justify-center h-12 sm:h-14 md:h-16">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className="object-contain max-h-full max-w-[100px] sm:max-w-[130px] md:max-w-full opacity-60 filter grayscale brightness-0"
              />
            </div>
          ))}
        </div>

        {/* Right fade mask */}
        <div className="absolute right-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
}