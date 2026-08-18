import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

const BASE = siteConfig.siteUrl.replace(/\/$/, "");

/** Host Google should index. Matches Vercel primary domain. */
export const canonicalHost = new URL(siteConfig.siteUrl).host;

/** Apex host that must 308 to www. */
export const apexHost = canonicalHost.replace(/^www\./, "");

/**
 * Absolute www canonical. Relative tags plus a missing metadataBase
 * left production with no user-selected canonical (GSC, May 2026).
 */
export function canonicalUrl(path = "/"): string {
  if (!path || path === "/") return BASE;
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageSeo(path: string, metadata: Metadata = {}): Metadata {
  const url = canonicalUrl(path);
  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: url,
    },
    openGraph: {
      ...metadata.openGraph,
      url,
    },
  };
}
