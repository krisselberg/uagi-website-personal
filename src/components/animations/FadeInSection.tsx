'use client';

import { useEffect, useState, useRef, ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export function FadeInSection({ 
  children, 
  delay = 0, 
  duration = 1000, 
  className = '', 
  threshold = 0.1 
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section comes into view, set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's been seen, no need to keep observing
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold // percentage of the element that needs to be visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div 
      ref={sectionRef}
      className={`transition-all transform ${className}`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
} 