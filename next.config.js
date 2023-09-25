/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/profile',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['ipfs.watorflow.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.watorflow.com',
        port: '',
        pathname: '/ipfs/**',
      },
    ],
  },
};

module.exports = nextConfig;
