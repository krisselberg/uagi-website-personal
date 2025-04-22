'use client';

import { SpaceBackground } from "./SpaceBackground";

export function GlobalSpaceBackground() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none" id="global-space-background">
      <SpaceBackground starCount={300} speed={0.5} />
    </div>
  );
} 