import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      // Screenshots of live project sites
      { protocol: "https", hostname: "**.microlink.io" },
    ],
  },
  async redirects() {
    return [{ source: "/roadmap", destination: "/", permanent: false }];
  },
};

export default nextConfig;
