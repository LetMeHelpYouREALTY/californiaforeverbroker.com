/**
 * Parallel tool registry for Maps ranking research.
 * Search/extract/enrich run via parallel-cli; GBP reads via Zapier when connected.
 */
export const mapsRankTools = [
  {
    id: "parallel-search",
    name: "Parallel web search",
    command:
      'parallel-cli search "Google Maps ranking factors" -q "relevance distance prominence"',
  },
  {
    id: "parallel-extract",
    name: "Parallel extract",
    command:
      "parallel-cli extract https://support.google.com/business/answer/7091?hl=en",
  },
  {
    id: "parallel-enrich",
    name: "Parallel GBP enrichment",
    command:
      "parallel-cli enrich run --intent \"Google Maps URL, review URL, CID for the NAP\" --no-wait",
  },
  {
    id: "site-audit",
    name: "On-site Maps audit",
    command: "GET /api/maps-rank/audit",
  },
] as const;

export type MapsRankToolId = (typeof mapsRankTools)[number]["id"];
