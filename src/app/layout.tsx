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
    icon: "/logos/uagi-icon.svg",
  },
  metadataBase: new URL('https://universalagi.netlify.app'),
  openGraph: {
    title: "UniversalAGI",
    description: "UniversalAGI is the AI platform built to meet the standards of the world's leading enterprises.",
    url: 'https://universalagi.netlify.app',
    images: [
      {
        url: "/message_thumbnail.png",
        width: 1200,
        height: 630,
        alt: "UniversalAGI",
      }
    ],
    siteName: "UniversalAGI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UniversalAGI",
    description: "UniversalAGI is the AI platform built to meet the standards of the world's leading enterprises.",
    images: ["/message_thumbnail.png"],
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
        {/* WhatsApp/Facebook-specific meta tags */}
        <meta property="og:site_name" content="UniversalAGI" />
        <meta property="og:title" content="UniversalAGI" />
        <meta property="og:description" content="Latest AI Breakthroughs on top of your secure data" />
        <meta property="og:image" content="https://universalagi.netlify.app/message_thumbnail.png" />
        <meta property="og:image:secure_url" content="https://universalagi.netlify.app/message_thumbnail.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="UniversalAGI" />
        <meta property="og:url" content="https://universalagi.netlify.app" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UniversalAGI" />
        <meta name="twitter:description" content="Latest AI Breakthroughs on top of your secure data" />
        <meta name="twitter:image" content="https://universalagi.netlify.app/message_thumbnail.png" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
