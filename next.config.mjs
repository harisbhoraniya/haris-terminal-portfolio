/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
