/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tools.applemediaservices.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
