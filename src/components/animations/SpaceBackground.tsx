'use client';

import { useEffect, useRef } from "react";

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

  useEffect(() => {
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

    // Pre-initialize stars array
    let stars: Star[] = [];

    // Create a new star with full distribution range
    function createStar(zPos?: number) {
      const z = zPos !== undefined ? zPos : Math.random() * 1000 + 100;
      return {
        x: (Math.random() - 0.5) * canvas!.width * 2,
        y: (Math.random() - 0.5) * canvas!.height * 2,
        z: z,
        size: Math.random() * 0.5 + 0.2,
        color: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`,
        speedModifier: Math.random() * 0.5 + 0.8 // Random speed variation per star
      };
    }

    // Initialize stars with varied depth
    function initStars() {
      stars = [];
      // Initial evenly distributed stars across all z depths
      for (let i = 0; i < starCount; i++) {
        const zPosition = 100 + (1000 / starCount) * i; // Spread stars evenly across z-depth
        stars.push(createStar(zPosition));
      }
    }

    // Set canvas size to match parent container
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(); // Reinitialize stars when canvas is resized
    };

    // Listen for resize events
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Animation loop
    let animationId: number;
    let lastTime = 0;
    
    function animate(time: number) {
      // Calculate delta time for frame-rate independent animation
      const deltaTime = time - lastTime;
      lastTime = time;
      const baseSpeedFactor = speed * (deltaTime / 16.67); // Normalize to 60fps
      
      // Add a semi-transparent layer for subtle trails
      // Reduced opacity for less aggressive fading
      ctx!.fillStyle = "rgba(0, 0, 0, 0.5)"; 
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      
      const centerX = canvas!.width / 2;
      const centerY = canvas!.height / 2;

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
            size: Math.random() * 0.5 + 0.2,
            color: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`,
            speedModifier: Math.random() * 0.5 + 0.8 // Refresh speed modifier
          };
          return;
        }
        
        // Project 3D position to 2D screen
        const projectedX = (star.x / star.z) * depthFactor + centerX;
        const projectedY = (star.y / star.z) * depthFactor + centerY;
        
        // Calculate size based on distance (closer = bigger)
        const projectedSize = star.size * (depthFactor / star.z) * 1.2; // Slightly larger stars
        
        // Skip drawing if outside canvas
        if (
          projectedX < 0 ||
          projectedX > canvas!.width ||
          projectedY < 0 ||
          projectedY > canvas!.height
        ) {
          return;
        }
        
        // Draw star with a slight glow
        ctx!.beginPath();
        ctx!.fillStyle = star.color;
        ctx!.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
        ctx!.fill();
        
        // Add a subtle glow for brighter stars
        if (projectedSize > 0.8) {
          ctx!.beginPath();
          ctx!.fillStyle = star.color.replace(')', ', 0.3)').replace('rgba', 'rgba');
          ctx!.arc(projectedX, projectedY, projectedSize * 2, 0, Math.PI * 2);
          ctx!.fill();
        }
      });
      
      // Add a few new stars randomly to maintain density
      // This helps maintain the animation's initial feel
      if (Math.random() < 0.05) { // 5% chance each frame
        const randomIndex = Math.floor(Math.random() * stars.length);
        stars[randomIndex] = createStar(1100); // Place new star at far distance
      }
      
      animationId = requestAnimationFrame(animate);
    }
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [starCount, speed, depthFactor]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0"
    />
  );
} 