/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/oauth/:path*',
        destination: `${process.env.KAKAO_URL}/oauth/:path*`,
      },
      {
        source: '/v2/:path*',
        destination: `${process.env.KAKAO_URL}/v2/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
