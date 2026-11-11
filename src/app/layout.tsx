import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chuks Okafor — Full-Stack & AI Engineer",
    template: "%s · Chuks Okafor",
  },
  description:
    "Chukwuemeka “Chuks” Okafor — 10 years shipping production systems, now building with AI: OpenAI-certified, studying AI engineering, and teaching cohorts to ship real websites with AI.",
  keywords: [
    "Chuks Okafor",
    "devchuksemeka",
    "AI engineer",
    "full-stack engineer",
    "build websites with AI",
    "OpenAI",
    "Nigeria",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="bg-grid" aria-hidden />
        <div className="bg-scanlines" aria-hidden />
        <div className="bg-glow" aria-hidden />
        <SiteHeader />
        <main className="relative z-[2]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
