/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  transpilePackages: ['three-globe', 'three'],
};

export default nextConfig;
