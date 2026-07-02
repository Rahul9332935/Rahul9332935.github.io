import type { Metadata } from "next";

import { BackgroundEffects } from "@/components/background-effects";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Rahul Kumar",
    "Java Backend Engineer",
    "Spring Boot",
    "Microservices",
    "System Design",
    "Distributed Systems",
    "Portfolio"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/assets/profile.png", width: 600, height: 600, alt: siteConfig.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: ["/assets/profile.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        <ThemeProvider>
          <BackgroundEffects />
          <div className="relative">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
