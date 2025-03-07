import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["192.168.0.31"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.0.31",
        port: "8000",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
