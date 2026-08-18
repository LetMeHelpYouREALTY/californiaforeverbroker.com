import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { apexHost, canonicalHost, canonicalUrl } from "@/lib/seo";

/**
 * Permanent apex → www. Vercel’s domain setting currently emits 307,
 * which Google does not treat as a user-selected canonical.
 * This 308 still runs if the platform redirect is removed or skipped.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";

  if (host === apexHost) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = canonicalHost;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();
  if (host === canonicalHost) {
    response.headers.append(
      "Link",
      `<${canonicalUrl(request.nextUrl.pathname)}>; rel="canonical"`,
    );
  }
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
