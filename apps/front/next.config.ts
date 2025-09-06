import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tmpddpfoickfjtwfnbyo.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ✅ oddiy unsplash rasmlar uchun
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tfkhvbwaelfwjfjtozyw.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
