import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://fixed-pull-c53.notion.site/Calculus-House-Demo-Day-1-3-223feb150a9d80809649d538a712a45d",
        permanent: true, // Set to true for a 308 redirect, false for a 307 redirect
      },
      {
        source: "/blog-2",
        destination: "https://fixed-pull-c53.notion.site/calculus-house-demo-2-3-AI-Scientist-virtual-cells-demo-24afeb150a9d8026a0f3fa6814554e47",
        permanent: true, // Set to true for a 308 redirect, false for a 307 redirect
      },
    ];
  },
};

export default nextConfig;