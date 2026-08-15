import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev modda Next.js toolbar'ını kapat
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
