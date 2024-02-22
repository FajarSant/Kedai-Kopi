/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
    return [
      {
        source: '/api/product/:id',
        destination: '/api/product/:id',
      },
    ];
  },
};

export default nextConfig;
