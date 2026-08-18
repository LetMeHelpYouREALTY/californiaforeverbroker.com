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
