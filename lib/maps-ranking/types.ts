export type MapsRankFactor = "relevance" | "distance" | "prominence";

export type MapsRankSurface = "site" | "gbp-dashboard" | "citations";

export type MapsRankTechnique = {
  id: string;
  factor: MapsRankFactor;
  surface: MapsRankSurface;
  title: string;
  why: string;
  implemented: boolean;
  href?: string;
};

export type AuditStatus = "pass" | "warn" | "fail";

export type AuditCheck = {
  id: string;
  status: AuditStatus;
  detail: string;
};
