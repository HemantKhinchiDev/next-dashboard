import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.radiustheme.com",
      },
    ],
  },
};

export default nextConfig;
