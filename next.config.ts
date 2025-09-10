import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Only use basePath and assetPrefix in production
  ...(process.env.NODE_ENV === 'production' && {
    basePath: "/iamfern",
    assetPrefix: "/iamfern/",
  }),
};

module.exports = nextConfig;