// 'use client'

// import { useEffect, useState, useRef } from 'react';

// export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
//   const [scrollY, setScrollY] = useState(0);
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const [wrapperTop, setWrapperTop] = useState(0);
//   const [wrapperHeight, setWrapperHeight] = useState(0);

//   useEffect(() => {
//     // Get initial position of the wrapper relative to the viewport
//     if (wrapperRef.current) {
//       const rect = wrapperRef.current.getBoundingClientRect();
//       setWrapperTop(rect.top + window.scrollY);
//       setWrapperHeight(rect.height);
//     }

//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Calculate parallax offset based on wrapper position
//   const getParallaxOffset = () => {
//     if (scrollY < wrapperTop - window.innerHeight) return 0;
//     if (scrollY > wrapperTop + wrapperHeight) return wrapperHeight * 0.2;
    
//     // Calculate how far the wrapper is scrolled into view
//     const scrollIntoWrapper = scrollY - (wrapperTop - window.innerHeight);
//     // Convert to percentage of total scroll distance
//     const scrollPercentage = scrollIntoWrapper / (wrapperHeight + window.innerHeight);
//     // Calculate parallax offset (30% of wrapper height)
//     return wrapperHeight * 0.3 * scrollPercentage;
//   };

//   return (
//     <div ref={wrapperRef} className="relative overflow-hidden bg-black">
//       {/* Shared background with parallax */}
//       <div 
//         className="absolute top-0 left-0 w-full h-[150%] opacity-30"
//         style={{ 
//           backgroundImage: 'url(/duality-galaxy.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           transform: `translateY(-${getParallaxOffset()}px)`,
//         }}
//       />
//       <div className="relative z-10">
//         {children}
//       </div>
//     </div>
//   );
// } 