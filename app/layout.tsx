import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalendlyBadge } from "@/components/CalendlyBadge";
import { JsonLd } from "@/components/JsonLd";
import { siteEntityGraph } from "@/lib/schema";
import { canonicalUrl, homeShare } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const googleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  siteConfig.googleSiteVerification;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: homeShare.title,
    template: "%s | California Forever Broker",
  },
  description: homeShare.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.agent.name, url: `${siteConfig.siteUrl}/about` }],
  creator: siteConfig.agent.name,
  publisher: siteConfig.agent.brokerage,
  keywords: [
    "homes for sale Las Vegas",
    "homes for sale Henderson",
    "buy a home Las Vegas",
    "California to Las Vegas real estate",
    "Las Vegas REALTOR since 1987",
    "relocation real estate Nevada",
  ],
  alternates: {
    canonical: canonicalUrl("/"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
  openGraph: {
    title: homeShare.title,
    description: homeShare.description,
    url: canonicalUrl("/"),
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: homeShare.title,
    description: homeShare.description,
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Irvine",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <JsonLd nodes={siteEntityGraph()} />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <Script
          src="https://em.realscout.com/embed.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-pearl text-espresso antialiased">
        <Header />
        <main className="flex-1 bg-cream">{children}</main>
        <Footer />
        <CalendlyBadge />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
