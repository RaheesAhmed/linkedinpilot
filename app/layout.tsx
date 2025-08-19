import type { Metadata } from "next";
import { Inter, Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LinkedinPilot 🚁 - AI-Powered LinkedIn Automation",
  description: "Transform your LinkedIn presence from boring to high-converting with AI-powered automation. Generate content, engage strategically, and grow your network autonomously.",
  keywords: ["LinkedIn automation", "AI content generation", "LinkedIn growth", "social media automation", "LinkedIn bot"],
  authors: [{ name: "Rahees Ahmed" }],
  creator: "Rahees Ahmed",
  openGraph: {
    title: "LinkedinPilot 🚁 - AI-Powered LinkedIn Automation",
    description: "Transform your LinkedIn presence from boring to high-converting with AI-powered automation.",
    url: "https://github.com/RaheesAhmed/linkedinpilot",
    siteName: "LinkedinPilot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedinPilot 🚁 - AI-Powered LinkedIn Automation",
    description: "Transform your LinkedIn presence from boring to high-converting with AI-powered automation.",
    creator: "@linkedinpilot",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
