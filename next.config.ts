import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Only use basePath in production
  ...(process.env.NODE_ENV === 'production' && {
    basePath: "/iamfern",
  }),
};

module.exports = nextConfig;