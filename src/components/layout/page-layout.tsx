"use client";

import { Header } from "./header";
import { Footer } from "./footer";
import { Arrow } from "../ui/arrow";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="relative">
          {children}
          <Arrow />
        </div>
      </main>
      <Footer />
    </div>
  );
}
