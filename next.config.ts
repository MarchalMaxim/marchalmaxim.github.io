import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['avars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.maximmarchal.nl',
      },
    ]
  },
  devIndicators: false,
};

export default nextConfig;
