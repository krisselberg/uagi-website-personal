import type { Metadata } from "next";
import { Inter } from 'next/font/google';
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
  openGraph: {
    title: "UniversalAGI",
    description: "UniversalAGI is the AI platform built to meet the standards of the world's leading enterprises.",
    images: [
      {
        url: "/message_thumbnail.png",
        width: 1200,
        height: 630,
        alt: "UniversalAGI",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UniversalAGI",
    description: "UniversalAGI is the AI platform built to meet the standards of the world's leading enterprises.",
    images: ["/message_thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
