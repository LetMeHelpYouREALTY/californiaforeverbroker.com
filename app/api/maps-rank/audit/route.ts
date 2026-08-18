import { NextResponse } from "next/server";
import { runMapsRankAudit } from "@/lib/maps-ranking";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(runMapsRankAudit(), {
    headers: {
      "Cache-Control": "public, max-age=300",
      "X-Robots-Tag": "noindex",
    },
  });
}
