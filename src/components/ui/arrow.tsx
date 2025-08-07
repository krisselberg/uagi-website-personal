"use client";

import { ChevronDown } from "lucide-react";

export const Arrow = () => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
      <ChevronDown className="animate-bounce" />
    </div>
  );
};
