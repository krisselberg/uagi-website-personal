import type { Metadata } from "next";
import { Outfit } from 'next/font/google';
import "./globals.css";
import ClientBody from "./ClientBody";

// New Carrois Gothic font
// const carrois = Carrois_Gothic({
//   variable: "--font-carrois-gothic",
//   subsets: ["latin"],
//   weight: ["400"], // Carrois Gothic also typically has regular weight
//   display: "swap",
// });

// System UI font similar to Harvey's custom font
// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   display: "swap",
// });

// Serif font for headings (similar to Harvey's design)
// const playfair = Playfair_Display({
//   variable: "--font-playfair",
//   subsets: ["latin"],
//   display: "swap",
// });

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "UniversalAGI",
  description: "UniversalAGI is the AI platform built to meet the standards of the world's leading enterprises.",
  icons: {
    icon: "/logos/uagi-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.className} suppressHydrationWarning>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
