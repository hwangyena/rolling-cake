/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {
        source: '/oauth/:path*',
        destination: `${process.env.KAKAO_URL}/oauth/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
