'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SpaceAnimationContextType {
  speed: number;
  setSpeed: (speed: number) => void;
  defaultSpeed: number;
}

const SpaceAnimationContext = createContext<SpaceAnimationContextType | undefined>(undefined);

export const SpaceAnimationProvider = ({ children, initialSpeed = 0.5 }: { children: ReactNode, initialSpeed?: number }) => {
  const [speed, setSpeed] = useState<number>(initialSpeed);
  const defaultSpeed = initialSpeed;

  return (
    <SpaceAnimationContext.Provider value={{ speed, setSpeed, defaultSpeed }}>
      {children}
    </SpaceAnimationContext.Provider>
  );
};

export const useSpaceAnimation = () => {
  const context = useContext(SpaceAnimationContext);
  if (context === undefined) {
    throw new Error('useSpaceAnimation must be used within a SpaceAnimationProvider');
  }
  return context;
}; 