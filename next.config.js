/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.pexels.com", "images.unsplash.com", "v0.blob.com"],
  },
}

module.exports = nextConfig
