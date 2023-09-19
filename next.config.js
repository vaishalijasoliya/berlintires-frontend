/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
        "127.0.0.1",
        "localhost:1337"
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
