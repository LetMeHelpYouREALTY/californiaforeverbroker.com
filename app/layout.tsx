import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalendlyBadge } from "@/components/CalendlyBadge";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Homes for Sale Las Vegas & Henderson | California Forever Broker",
    template: "%s | California Forever Broker",
  },
  description:
    "Find homes for sale in Las Vegas and Henderson. California homebuyers: search listings, relocation guide, neighborhoods & market reports. Dr. Jan Duffy, Berkshire Hathaway HomeServices.",
  keywords: [
    "homes for sale Las Vegas",
    "homes for sale Henderson",
    "buy a home Las Vegas",
    "California to Las Vegas real estate",
    "first-time homebuyer Las Vegas",
    "relocation real estate Nevada",
  ],
  alternates: {
    canonical: "/",
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
    title: "Homes for Sale Las Vegas & Henderson | California Forever Broker",
    description:
      "Search homes for sale in Las Vegas and Henderson. Your trusted partner for buying, relocating from California, and neighborhood guides.",
    url: siteConfig.siteUrl,
    type: "website",
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessJsonLd />
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
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CalendlyBadge />
      </body>
    </html>
  );
}
