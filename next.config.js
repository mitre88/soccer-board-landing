/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // app/global-not-found.tsx: one branded 404 for both route groups (each has its own root layout).
  experimental: { globalNotFound: true },
  images: {
    formats: ["image/avif", "image/webp"],
    // 2048: the iPhone Duo desk capture renders 860 CSS px wide, 1720 px on 2x screens.
    deviceSizes: [360, 480, 640, 768, 1080, 1280, 1600, 2048],
    imageSizes: [32, 64, 96, 128, 192, 256],
    qualities: [75, 85],
    // Capture URLs carry a content hash (content/screens.ts), so optimized copies can live 31 days.
    minimumCacheTTL: 2678400,
    localPatterns: [{ pathname: "/screens/**" }, { pathname: "/brand/**" }],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Short privacy paths (the old listing used /privacy) land on the policy in the same language.
  async redirects() {
    return [
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/es/privacy", destination: "/es/privacy-policy", permanent: true },
    ];
  },
};

module.exports = nextConfig;
