'use client';

import { useEffect, useRef, useState } from "react";

interface SpaceBackgroundProps {
  starCount?: number;
  speed?: number;
  depthFactor?: number;
}

export function SpaceBackground({ 
  starCount = 200, 
  speed = 0.5,
  depthFactor = 500 
}: SpaceBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const starsRef = useRef<any[]>([]);
  const animationIdRef = useRef<number>(0);
  const handleResizeRef = useRef<(() => void) | null>(null);

  // Initialize canvas and start animation
  useEffect(() => {
    if (typeof window === 'undefined') return; // Guard against SSR
    
    // Delay initialization slightly to avoid hydration issues
    const initTimer = setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

      // Star properties
      type Star = {
        x: number;
        y: number;
        z: number;
        size: number;
        color: string;
        speedModifier: number;
      };

      // Create a new star with full distribution range
      function createStar(zPos?: number) {
        const z = zPos !== undefined ? zPos : Math.random() * 1000 + 100;
        // Make sure canvas is defined for these calculations
        if (!canvas) return {
          x: 0, y: 0, z, size: 0, color: '', speedModifier: 1
        };
        
        return {
          x: (Math.random() - 0.5) * canvas.width * 2,
          y: (Math.random() - 0.5) * canvas.height * 2,
          z: z,
          size: Math.random() * 0.7 + 0.3,
          color: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`,
          speedModifier: Math.random() * 0.5 + 0.8 // Random speed variation per star
        };
      }

      // Initialize stars with varied depth
      function initStars() {
        const newStars: Star[] = [];
        // Initial evenly distributed stars across all z depths
        for (let i = 0; i < starCount; i++) {
          const zPosition = 100 + (1000 / starCount) * i; // Spread stars evenly across z-depth
          newStars.push(createStar(zPosition));
        }
        starsRef.current = newStars;
      }

      // Set canvas size to match parent container
      const resizeCanvas = () => {
        if (!canvas || !ctx) return;
        
        const devicePixelRatio = window.devicePixelRatio || 1;
        
        // Get display size of the canvas
        const rect = canvas.getBoundingClientRect();
        
        // Set canvas dimensions with pixel ratio for sharper rendering
        canvas.width = rect.width * devicePixelRatio;
        canvas.height = rect.height * devicePixelRatio;
        
        // Scale the context to ensure correct drawing operations
        ctx.scale(devicePixelRatio, devicePixelRatio);
        
        // Set display size (css pixels)
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        
        // Only reinitialize stars if we haven't done so yet or if array is empty
        if (!isInitialized || starsRef.current.length === 0) {
          initStars();
          setIsInitialized(true);
        }
      };

      // Debounce the resize handler to prevent performance issues
      let resizeTimeout: ReturnType<typeof setTimeout>;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeCanvas, 100);
      };
      
      // Store the resize handler for cleanup
      handleResizeRef.current = handleResize;

      // Listen for resize events
      window.addEventListener('resize', handleResize);
      resizeCanvas();

      // Animation loop
      let lastTime = 0;
      
      function animate(time: number) {
        if (!canvas || !ctx) return;
        
        // Calculate delta time for frame-rate independent animation
        const deltaTime = time - lastTime;
        lastTime = time;
        const baseSpeedFactor = speed * (deltaTime / 16.67); // Normalize to 60fps
        
        // Get current dimensions for calculations
        const width = canvas.width / (window.devicePixelRatio || 1);
        const height = canvas.height / (window.devicePixelRatio || 1);
        
        // Add a semi-transparent layer for subtle trails
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; 
        ctx.fillRect(0, 0, width, height);
        
        const centerX = width / 2;
        const centerY = height / 2;
        
        // Get local reference to stars array for this animation frame
        const stars = starsRef.current;

        // Count how many stars we need to replace
        let starsToReplace = 0;

        // Draw and update stars
        stars.forEach((star, i) => {
          // Apply individual speed modifier to each star
          const speedFactor = baseSpeedFactor * star.speedModifier;
          
          // Move star closer (decrease z) with frame-rate independent speed
          star.z -= speedFactor;
          
          // Reset star if it's too close
          if (star.z <= 0) {
            starsToReplace++;
            // Instead of full reset, keep good velocity by placing star far away
            // But keep the X,Y position similar to current trajectory for continuity
            const angle = Math.atan2(star.y, star.x);
            const dist = Math.sqrt(star.x * star.x + star.y * star.y);
            // Adjust the angle slightly for variation
            const newAngle = angle + (Math.random() - 0.5) * 0.2;
            // Place at consistent z-depth
            stars[i] = {
              x: Math.cos(newAngle) * dist * 1.2,
              y: Math.sin(newAngle) * dist * 1.2,
              z: 1100, // Place slightly farther to avoid bunching
              size: Math.random() * 0.7 + 0.3,
              color: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`,
              speedModifier: Math.random() * 0.5 + 0.8 // Refresh speed modifier
            };
            return;
          }
          
          // Project 3D position to 2D screen
          const projectedX = (star.x / star.z) * depthFactor + centerX;
          const projectedY = (star.y / star.z) * depthFactor + centerY;
          
          // Calculate size based on distance (closer = bigger)
          const projectedSize = star.size * (depthFactor / star.z) * 1.5;
          
          // Skip drawing if outside canvas
          if (
            projectedX < 0 ||
            projectedX > width ||
            projectedY < 0 ||
            projectedY > height
          ) {
            return;
          }
          
          // Draw star with a slight glow
          ctx.beginPath();
          ctx.fillStyle = star.color;
          ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Add a subtle glow for brighter stars
          if (projectedSize > 0.7) {
            ctx.beginPath();
            ctx.fillStyle = star.color.replace(')', ', 0.3)').replace('rgba', 'rgba');
            ctx.arc(projectedX, projectedY, projectedSize * 2.2, 0, Math.PI * 2);
            ctx.fill();
          }
        });
        
        // Add a few new stars randomly to maintain density
        // This helps maintain the animation's initial feel
        if (Math.random() < 0.05) { // 5% chance each frame
          const randomIndex = Math.floor(Math.random() * stars.length);
          stars[randomIndex] = createStar(1100); // Place new star at far distance
        }
        
        animationIdRef.current = requestAnimationFrame(animate);
      }
      
      animationIdRef.current = requestAnimationFrame(animate);
      
    }, 50); // Short delay to avoid hydration issues
    
    return () => {
      // Clean up resources
      clearTimeout(initTimer);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      const handleResize = handleResizeRef.current;
      if (handleResize) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [starCount, speed, depthFactor, isInitialized]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0"
      aria-hidden="true"
    />
  );
} 