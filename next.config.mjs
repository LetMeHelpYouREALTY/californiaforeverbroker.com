/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "californiaforeverbroker.com" }],
        destination: "https://www.californiaforeverbroker.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://va.vercel-scripts.com",
              "connect-src 'self' https://em.realscout.com https://www.realscout.com https://*.realscout.com https://calendly.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
              "img-src 'self' data: https: blob:",
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
              "frame-src 'self' https://www.google.com https://maps.google.com https://calendly.com",
            ].join("; "),
          },
          {
            key: "Link",
            value: '</llms.txt>; rel="describedby"; type="text/markdown"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
