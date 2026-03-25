import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "darius-offer-doc-with-all-deliverables-production.up.railway.app",
      },
    ],
  },
};

export default nextConfig;
