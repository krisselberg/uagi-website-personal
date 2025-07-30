import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from 'next/script';

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

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "UniversalAGI",
  description: "UniversalAGI is the AI platform built to meet the standards of the world's leading enterprises.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logos/uagi-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logos/uagi-icon.svg",
  },
  metadataBase: new URL('https://universalagi.com'),
  openGraph: {
    title: "UniversalAGI",
    description: "UniversalAGI is the AI platform built to meet the standards of the world's leading enterprises.",
    url: 'https://universalagi.com',
    siteName: "UniversalAGI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "UniversalAGI",
    description: "UniversalAGI is the AI platform built to meet the standards of the world's leading enterprises.",
    creator: "@UniversalAGI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        {/* Favicon tags for better compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logos/uagi-icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logos/uagi-icon.svg" />
        {/* WhatsApp/Facebook-specific meta tags */}
        <meta property="og:site_name" content="UniversalAGI" />
        <meta property="og:title" content="UniversalAGI" />
        <meta property="og:description" content="Latest AI Breakthroughs on top of your secure data" />
        <meta property="og:url" content="https://universalagi.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="UniversalAGI" />
        <meta name="twitter:description" content="Latest AI Breakthroughs on top of your secure data" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
