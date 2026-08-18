import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { canonicalHost, canonicalUrl, redirectTarget, stripTrailingSlash } from "@/lib/seo";

/**
 * Collapse apex + trailing-slash variants into one absolute www URL.
 * Vercel’s default slash 308 uses a relative Location, and a catch-all
 * host redirect can 308 www to itself — both show up in GSC as
 * “Redirect error” (loop, chain, or empty/bad Location).
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const target = redirectTarget({
    protocol: request.nextUrl.protocol,
    host,
    pathname: request.nextUrl.pathname,
    search: request.nextUrl.search,
  });

  if (target) {
    return NextResponse.redirect(target, 308);
  }

  const response = NextResponse.next();
  const hostname = host.split(":")[0]?.toLowerCase() ?? "";
  if (hostname === canonicalHost) {
    response.headers.append(
      "Link",
      `<${canonicalUrl(stripTrailingSlash(request.nextUrl.pathname))}>; rel="canonical"`,
    );
  }
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
