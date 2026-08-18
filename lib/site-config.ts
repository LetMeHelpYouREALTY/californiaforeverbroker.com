/**
 * Site config: NAP and branding for californiaforeverbroker.com
 * Must match Google Business Profile exactly (visible text + JSON-LD).
 */
export const siteConfig = {
  name: "California Forever Broker",
  tagline: "California Homebuyers Moving to Las Vegas",
  agent: {
    name: "Dr. Jan Duffy",
    license: "S.0197614.LLC",
    brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  },
  nap: {
    name: "Dr. Jan Duffy",
    streetAddress: "18600 MacArthur Blvd., Suite 150, Irvine, CA 92612",
    addressLocality: "Irvine",
    addressRegion: "CA",
    postalCode: "92612",
    phone: "+19497763527",
    phoneDisplay: "(949) 776-3527",
  },
  /** Canonical host. Must match Vercel primary domain and GBP (www). */
  siteUrl: "https://www.californiaforeverbroker.com",
  gbpReviewUrl: "https://g.page/r/heyberkshire/review",
  realscoutUrl: "http://drjanduffy.realscout.com/",
  calendlyUrl: "https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation",
} as const;
