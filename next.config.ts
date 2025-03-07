import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["api.magical-deserts.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.magical-deserts.com",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
