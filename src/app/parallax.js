'use client';

// Function to apply a very subtle parallax effect to the background
export function initParallax() {
  if (typeof window === 'undefined') return; // Check if we're on the client-side

  // Increased parallax factor from -0.05 to -0.12 for a stronger effect
  // -0.12 means the background will move at 12% of the scroll speed
  const parallaxFactor = -0.12;
  
  // Initial update
  updateParallaxPosition();
  
  // Add scroll event listener
  window.addEventListener('scroll', updateParallaxPosition);
  
  // Update function 
  function updateParallaxPosition() {
    // Get current scroll position
    const scrollY = window.scrollY;
    
    // Apply transform to body with a custom property that will be used by body::before
    // Negative value moves the image up as you scroll
    document.body.style.setProperty('--parallax-offset', `${scrollY * parallaxFactor}px`);
  }
  
  // Clean up function for when the component unmounts
  return () => {
    window.removeEventListener('scroll', updateParallaxPosition);
  };
} 