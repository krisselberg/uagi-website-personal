'use client'

interface SectionNavigationArrowProps {
  targetSectionId: string;
  sectionTitle: string;
  theme?: 'light' | 'dark';
}

export function SectionNavigationArrow({ 
  targetSectionId, 
  sectionTitle, 
  theme = 'dark' 
}: SectionNavigationArrowProps) {
  
  const scrollToSection = () => {
    const targetElement = document.getElementById(targetSectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const isDark = theme === 'dark';
  const iconColor = isDark ? 'text-white/70 group-hover:text-[#B3EBF2]' : 'text-black/70 group-hover:text-[#B3EBF2]';

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <button 
        onClick={scrollToSection}
        className="group relative flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-110"
      >
        {/* Arrow container with glow effect */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-[#B3EBF2]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Arrow icon only */}
          <svg 
            className={`w-8 h-8 ${iconColor} transition-all duration-300 transform group-hover:translate-y-1 group-hover:scale-110`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}