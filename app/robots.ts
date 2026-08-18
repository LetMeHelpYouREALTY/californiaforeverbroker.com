import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Allow `/_next/static/` so Google can render CSS/JS.
 * Do not Disallow that path — it breaks rendering and rankings.
 * Hashed CSS URLs are noindex via X-Robots-Tag in next.config.mjs.
 */
export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.siteUrl.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/"],
        disallow: ["/api/", "/_next/data/"],
      },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
