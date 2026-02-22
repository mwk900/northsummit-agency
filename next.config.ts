import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/contact",
        has: [{ type: "query", key: "intent", value: "audit" }],
        destination: "/audit",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
