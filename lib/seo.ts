import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

const BASE = siteConfig.siteUrl.replace(/\/$/, "");

/** Homepage share copy. Keep under ~60 / ~155 chars. Fair Housing: no school or safety proxies. */
export const homeShare = {
  title: "Las Vegas & Henderson Homes for Sale | California Forever Broker",
  description:
    "Dr. Jan Duffy helps California buyers purchase homes in Las Vegas and Henderson. Search listings, compare neighborhoods, plan a move. (949) 776-3527.",
} as const;

export const ogImageAlt =
  "California Forever Broker: Las Vegas and Henderson homes for sale with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties";

export const ogImageSize = { width: 1200, height: 630 } as const;

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
  const titleText = titleAsString(metadata.title);
  const description = metadata.description;
  const twitterTitle = metadata.twitter?.title ?? titleText;
  const twitterDescription = metadata.twitter?.description ?? description;

  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      ...(titleText ? { title: titleText } : {}),
      ...(description ? { description } : {}),
      ...metadata.openGraph,
      url,
    },
    twitter: {
      ...metadata.twitter,
      card: "summary_large_image",
      ...(twitterTitle ? { title: twitterTitle } : {}),
      ...(twitterDescription ? { description: twitterDescription } : {}),
    },
  };
}

function titleAsString(title: Metadata["title"]): string | undefined {
  if (typeof title === "string") return title;
  if (
    title &&
    typeof title === "object" &&
    "absolute" in title &&
    typeof title.absolute === "string"
  ) {
    return title.absolute;
  }
  return undefined;
}

export function stripTrailingSlash(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.replace(/\/+$/, "");
  }
  return pathname;
}

function isLocalHost(hostname: string): boolean {
  return (
    hostname === "localhost" ||
    hostname.endsWith(".localhost") ||
    hostname.endsWith(".vercel.app")
  );
}

/**
 * One-hop destination for host + trailing-slash cleanup.
 * Returns null when the request is already the URL Google should index
 * (avoids a self-redirect, which GSC reports as “Redirect error”).
 */
export function redirectTarget({
  protocol,
  host,
  pathname,
  search = "",
  forwardedProto,
}: {
  protocol: string;
  host: string;
  pathname: string;
  search?: string;
  forwardedProto?: string | null;
}): string | null {
  const hostname = host.split(":")[0]?.toLowerCase() ?? "";
  if (!hostname) return null;

  const local = isLocalHost(hostname);
  const stripped = stripTrailingSlash(pathname);
  const targetHost = local
    ? hostname
    : hostname === apexHost
      ? canonicalHost
      : hostname;

  const incomingProto = (forwardedProto || protocol)
    .replace(/:$/, "")
    .toLowerCase();
  const hostChanged = !local && hostname === apexHost;
  const pathChanged = stripped !== pathname;
  const needsHttps = !local && incomingProto === "http";
  if (!hostChanged && !pathChanged && !needsHttps) return null;

  const scheme = local ? incomingProto || "https" : "https";
  const pathPart = stripped === "/" ? "" : stripped;
  return `${scheme}://${targetHost}${pathPart}${search}`;
}
