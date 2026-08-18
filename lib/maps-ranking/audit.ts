import { mapsRankTechniques } from "@/lib/maps-ranking/factors";
import type { AuditCheck, AuditStatus } from "@/lib/maps-ranking/types";
import { canonicalUrl, redirectTarget } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

function statusFor(ok: boolean, warn = false): AuditStatus {
  if (ok) return "pass";
  if (warn) return "warn";
  return "fail";
}

export function runMapsRankAudit(): {
  generatedAt: string;
  checks: AuditCheck[];
  techniques: typeof mapsRankTechniques;
} {
  const { nap, realscoutUrl, gbpMapsUrl, gbpReviewUrl, siteUrl } = siteConfig;
  const checks: AuditCheck[] = [
    {
      id: "canonical-www",
      status: statusFor(siteUrl === "https://www.californiaforeverbroker.com"),
      detail: `siteUrl=${siteUrl}`,
    },
    {
      id: "canonical-relocation",
      status: statusFor(
        canonicalUrl("/relocation") ===
          "https://www.californiaforeverbroker.com/relocation",
      ),
      detail: canonicalUrl("/relocation"),
    },
    {
      id: "no-www-self-redirect",
      status: statusFor(
        redirectTarget({
          protocol: "https:",
          host: "www.californiaforeverbroker.com",
          pathname: "/neighborhoods/summerlin",
        }) === null,
      ),
      detail: "www neighborhood URLs must 200, not 308 to themselves",
    },
    {
      id: "slash-to-absolute-www",
      status: statusFor(
        redirectTarget({
          protocol: "https:",
          host: "www.californiaforeverbroker.com",
          pathname: "/neighborhoods/centennial-hills/",
        }) ===
          "https://www.californiaforeverbroker.com/neighborhoods/centennial-hills",
      ),
      detail: "trailing slash 308 must be an absolute www URL",
    },
    {
      id: "nap-irvine",
      status: statusFor(
        nap.streetAddress === "18600 MacArthur Blvd., Suite 150, Irvine, CA 92612",
      ),
      detail: nap.streetAddress,
    },
    {
      id: "phone-949",
      status: statusFor(nap.phone === "+19497763527"),
      detail: nap.phoneDisplay,
    },
    {
      id: "realscout-https",
      status: statusFor(realscoutUrl.startsWith("https://")),
      detail: realscoutUrl,
    },
    {
      id: "maps-url",
      status: statusFor(gbpMapsUrl.includes("google.com/maps")),
      detail: gbpMapsUrl,
    },
    {
      id: "review-url-not-heyberkshire",
      status: statusFor(!gbpReviewUrl.includes("heyberkshire")),
      detail: gbpReviewUrl,
    },
  ];

  return {
    generatedAt: new Date().toISOString(),
    checks,
    techniques: mapsRankTechniques,
  };
}
