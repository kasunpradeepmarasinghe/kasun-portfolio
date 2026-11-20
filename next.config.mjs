/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standalone mode inside Docker, or static export for Cloudflare Pages
  output: process.env.OUTPUT_STANDALONE === 'true' ? 'standalone' : 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
