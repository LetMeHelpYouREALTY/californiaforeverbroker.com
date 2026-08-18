import { ImageResponse } from "next/og";
import { ogImageAlt, ogImageSize } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  const { name, nap, agent } = siteConfig;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#670038",
          color: "#F5F1F2",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 3,
              color: "#C299AF",
            }}
          >
            {name.toUpperCase()}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 54,
              fontWeight: 700,
              marginTop: 24,
              lineHeight: 1.15,
              maxWidth: 1040,
            }}
          >
            Homes for sale in Las Vegas and Henderson
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              width: 120,
              height: 4,
              background: "#C299AF",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 28,
              marginTop: 20,
              color: "#EAE3D4",
              maxWidth: 980,
            }}
          >
            Las Vegas native. Selling homes here since 1987.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 24,
            color: "#EAE3D4",
          }}
        >
          <div style={{ display: "flex" }}>
            {agent.name} · {agent.brokerage}
          </div>
          <div style={{ display: "flex", marginTop: 8 }}>
            {nap.phoneDisplay} · {nap.streetAddress}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
