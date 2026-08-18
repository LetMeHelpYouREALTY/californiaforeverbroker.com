import type { MetadataRoute } from "next";
import { neighborhoods } from "@/lib/neighborhoods";
import { siteConfig } from "@/lib/site-config";

const staticRoutes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/relocation", changeFrequency: "monthly", priority: 0.9 },
  { path: "/neighborhoods", changeFrequency: "weekly", priority: 0.9 },
  { path: "/new-homes", changeFrequency: "weekly", priority: 0.8 },
  { path: "/market-report", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/locations/irvine", changeFrequency: "monthly", priority: 0.85 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services", changeFrequency: "monthly", priority: 0.7 },
  { path: "/sellers", changeFrequency: "monthly", priority: 0.7 },
  { path: "/luxury", changeFrequency: "monthly", priority: 0.7 },
  { path: "/55-plus", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const neighborhoodEntries: MetadataRoute.Sitemap = neighborhoods.map((n) => ({
    url: `${base}/neighborhoods/${n.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...neighborhoodEntries];
}
