/**
 * Site config: NAP and branding for californiaforeverbroker.com
 * Must match Google Business Profile exactly (visible text + JSON-LD).
 *
 * Hours: Irvine BHHS California Properties office listing (Mon–Fri 8:30–5:00).
 * Geo: The Launch / 18600 MacArthur Blvd, Irvine (Irvine Company coordinates).
 * Verified Aug 2026. Do not invent GBP hours or review counts into schema.
 */
export const siteConfig = {
  name: "California Forever Broker",
  tagline: "California Homebuyers Moving to Las Vegas",
  description:
    "Dr. Jan Duffy helps California homebuyers purchase homes in Las Vegas and Henderson. Search listings, compare neighborhoods, and plan a California-to-Nevada move.",
  agent: {
    name: "Dr. Jan Duffy",
    license: "S.0197614.LLC",
    brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
    email: "drduffy@bhhsnv.com",
    jobTitle: "REALTOR®",
  },
  nap: {
    name: "Dr. Jan Duffy",
    streetAddress: "18600 MacArthur Blvd., Suite 150, Irvine, CA 92612",
    street: "18600 MacArthur Blvd., Suite 150",
    addressLocality: "Irvine",
    addressRegion: "CA",
    postalCode: "92612",
    addressCountry: "US",
    phone: "+19497763527",
    phoneDisplay: "(949) 776-3527",
  },
  geo: {
    latitude: 33.67706,
    longitude: -117.85982,
  },
  serviceAreaGeo: {
    latitude: 36.1699,
    longitude: -115.1398,
    radiusMeters: "50000",
  },
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
      opens: "08:30",
      closes: "17:00",
    },
  ],
  hoursDisplay: "Monday–Friday 8:30 a.m.–5:00 p.m. PT",
  hoursNote: "Irvine office hours. Book a 15-minute call for evenings.",
  /** Canonical host. Must match Vercel primary domain and GBP (www). */
  siteUrl: "https://www.californiaforeverbroker.com",
  /**
   * Google Search Console HTML-tag token. Same value as the apex DNS TXT
   * google-site-verification record (public). Used so the www host can
   * verify as a URL-prefix property without a new DNS row.
   */
  googleSiteVerification: "KVbX629PHY0wc9UPDUMpX4c_eiJL2HcMhclQmeQ-KRs",
  /**
   * Maps/review links use the NAP query until a Place ID/CID is verified.
   * Do not reuse another brand’s g.page slug (e.g. heyberkshire).
   */
  gbpMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=18600%20MacArthur%20Blvd.%2C%20Suite%20150%2C%20Irvine%2C%20CA%2092612",
  gbpReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Dr%20Jan%20Duffy%2018600%20MacArthur%20Blvd%20Irvine",
  realscoutUrl: "https://drjanduffy.realscout.com/",
  calendlyUrl: "https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation",
  bhhsProfileUrl:
    "https://www.bhhs.com/arizona-properties-california-properties-and-nevada-properties-nv301/las-vegas/dr-jan-duffy/cid-3042332",
  bhhsNvAgentUrl: "https://www.bhhsnv.com/real-estate-agent/4986/dr-jan-duffy",
  zillowProfileUrl: "https://www.zillow.com/profile/DrJanDuffy",
  mapQuery: "18600 MacArthur Blvd, Suite 150, Irvine, CA 92612",
  areaServed: [
    "Las Vegas",
    "Henderson",
    "Summerlin",
    "North Las Vegas",
    "Green Valley",
  ],
  services: [
    "Buyer representation in Las Vegas and Henderson",
    "California-to-Las-Vegas relocation",
    "New-construction and builder-incentive comparison",
    "Home seller representation",
    "Luxury and 55+ community search",
  ],
} as const;

export const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&output=embed`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.mapQuery)}`;
export const callUrl = `tel:${siteConfig.nap.phone}`;
