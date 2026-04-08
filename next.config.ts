import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static export for Cloudflare Pages.
  // The build output lands in `out/`, which Pages serves as static files.
  output: "export",

  // Cloudflare Pages does not run the Next.js image optimization server,
  // so images must be served as-is. Our logo is already sized appropriately.
  images: {
    unoptimized: true,
  },

  // Trailing slashes play nicer with static hosts that map URLs to directories.
  trailingSlash: true,
};

export default nextConfig;
