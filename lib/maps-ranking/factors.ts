import { siteConfig } from "@/lib/site-config";
import type { MapsRankTechnique } from "@/lib/maps-ranking/types";

/**
 * Google’s published local ranking pillars: relevance, distance, prominence.
 * Source: https://support.google.com/business/answer/7091
 */
export const mapsRankTechniques: MapsRankTechnique[] = [
  {
    id: "nap-exact",
    factor: "relevance",
    surface: "site",
    title: "Exact NAP on every page",
    why: "Google matches the website to the Maps listing when name, address, and phone are identical.",
    implemented: true,
    href: "/locations/irvine",
  },
  {
    id: "primary-category",
    factor: "relevance",
    surface: "gbp-dashboard",
    title: "GBP primary category: Real Estate Agent",
    why: "Category is the strongest relevance control you set in the Business Profile.",
    implemented: false,
  },
  {
    id: "location-page",
    factor: "relevance",
    surface: "site",
    title: "Dedicated Irvine office page",
    why: "A unique location URL with hours, map pin, and services helps Google attach the site to the pin.",
    implemented: true,
    href: "/locations/irvine",
  },
  {
    id: "schema-hasmap",
    factor: "relevance",
    surface: "site",
    title: "LocalBusiness schema with hasMap + geo",
    why: "Structured NAP, hours, geo, and hasMap reinforce the Maps entity.",
    implemented: true,
  },
  {
    id: "map-embed",
    factor: "distance",
    surface: "site",
    title: "Irvine map embed and directions",
    why: "The pin must match the listed suite. Distance uses that address, not Las Vegas copy.",
    implemented: true,
    href: "/locations/irvine",
  },
  {
    id: "service-area",
    factor: "distance",
    surface: "site",
    title: "Las Vegas service area without a fake LV pin",
    why: "areaServed + GeoCircle describe where you work. Do not invent a Las Vegas storefront pin from Irvine.",
    implemented: true,
  },
  {
    id: "reviews-link",
    factor: "prominence",
    surface: "site",
    title: "View on Google Maps + reviews CTA",
    why: "Prominence includes review count and Maps engagement (calls, directions, website clicks).",
    implemented: true,
  },
  {
    id: "sameas-citations",
    factor: "prominence",
    surface: "citations",
    title: "sameAs to BHHS, Zillow, Calendly, RealScout, Maps",
    why: "Prominence includes other sites that mention the business with matching NAP.",
    implemented: true,
  },
  {
    id: "gbp-posts",
    factor: "prominence",
    surface: "gbp-dashboard",
    title: "Weekly Google Posts on the live profile",
    why: "An inactive profile looks closed. Posts are a dashboard action, not a website file.",
    implemented: false,
  },
  {
    id: "review-replies",
    factor: "prominence",
    surface: "gbp-dashboard",
    title: "Reply to every Google review",
    why: "Google lists review replies as a local-ranking tip. Do not invent AggregateRating in schema.",
    implemented: false,
  },
  {
    id: "gsc-www-property",
    factor: "prominence",
    surface: "gsc-dashboard",
    title: "Search Console URL-prefix on https://www",
    why: "Vibe-coded SEO tip (Search Central, Apr 2026): verify Search Console and use full canonical URLs. Inspect www, not HTTP or CSS assets.",
    implemented: false,
  },
  {
    id: "gsc-platform-properties",
    factor: "prominence",
    surface: "gsc-dashboard",
    title: "GSC platform properties for YouTube, Instagram, TikTok, X",
    why: "Global as of 29 Jul 2026. Track social/video posts in Search, Discover, and News. Add only accounts that exist—do not invent profile URLs in schema.",
    implemented: false,
  },
  {
    id: "gsc-gen-ai-report",
    factor: "prominence",
    surface: "gsc-dashboard",
    title: "GSC Generative AI performance report",
    why: "AI Overviews/AI Mode use the same indexed HTML as Search. No extra markdown or llms.txt requirement (developers.google.com/search/docs/appearance/ai-features).",
    implemented: false,
  },
];

export function citationNap() {
  const { nap } = siteConfig;
  return {
    name: nap.name,
    street: nap.street,
    city: nap.addressLocality,
    region: nap.addressRegion,
    postal: nap.postalCode,
    country: nap.addressCountry,
    phoneDisplay: nap.phoneDisplay,
    phoneE164: nap.phone,
    oneLine: nap.streetAddress,
  };
}
