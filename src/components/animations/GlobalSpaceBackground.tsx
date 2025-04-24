'use client';

import { SpaceBackground } from "./SpaceBackground";
import { useSpaceAnimation } from "@/context/SpaceAnimationContext";

export function GlobalSpaceBackground() {
  const { speed } = useSpaceAnimation();

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none" id="global-space-background">
      <SpaceBackground starCount={300} speed={speed} />
    </div>
  );
} 