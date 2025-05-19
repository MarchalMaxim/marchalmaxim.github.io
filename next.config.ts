import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['avars.githubusercontent.com'],
  },
  devIndicators: false,
};

export default nextConfig;
