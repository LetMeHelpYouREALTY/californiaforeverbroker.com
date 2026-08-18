import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export function GET() {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const body = `# ${siteConfig.name}
> ${siteConfig.description}

Dr. Jan Duffy, REALTOR®, Nevada license ${siteConfig.agent.license}, ${siteConfig.agent.brokerage}.
Office: ${siteConfig.nap.streetAddress}. Phone: ${siteConfig.nap.phoneDisplay}. Hours: ${siteConfig.hoursDisplay}.
Canonical host: ${base}. Service area: Las Vegas, Henderson, Summerlin, Green Valley, North Las Vegas.

## Primary pages
- [Home](${base}/): Buyer entry for California-to-Las-Vegas home search
- [Relocation guide](${base}/relocation): Taxes, cost of living, and move checklist
- [Neighborhoods](${base}/neighborhoods): Summerlin, Henderson, Green Valley, and more
- [New homes](${base}/new-homes): Builder incentives and new construction
- [Market report](${base}/market-report): Stats to verify before an offer
- [About Dr. Jan Duffy](${base}/about): License, brokerage, and process
- [Contact](${base}/contact): Call, directions, Calendly
- [Irvine office](${base}/locations/irvine): Google Maps pin, hours, NAP
- [Services](${base}/services): Buy, sell, luxury, 55+
- [Sellers](${base}/sellers): California or Nevada sale
- [Luxury homes](${base}/luxury): Higher-price Las Vegas inventory
- [55+ communities](${base}/55-plus): Age-qualified communities

## Optional
- [Live MLS search](${siteConfig.realscoutUrl}): RealScout listings
- [Google Reviews](${siteConfig.gbpReviewUrl})
- [BHHS profile](${siteConfig.bhhsProfileUrl})
- [Sitemap](${base}/sitemap.xml)
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
