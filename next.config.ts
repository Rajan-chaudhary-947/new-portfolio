import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/work", destination: "/" },
      { source: "/skills", destination: "/" },
      { source: "/credentials", destination: "/" },
      { source: "/about", destination: "/" },
      { source: "/contact", destination: "/" },
    ];
  },
};

export default nextConfig;
