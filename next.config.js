const path = require('path');
const dotenv = require('dotenv');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.AWS_S3_URL,
        port: '',
        pathname: '/**',
      },
    ],
  },
});

module.exports = withBundleAnalyzer(nextConfig);
// module.exports = async (phase, { defaultConfig }) => {
//   const isDevelopment = phase === 'development';

//   // 개발 모드 또는 .env.production 파일이 없는 경우 .env.development 파일을 로드
//   if (isDevelopment || !dotenv.config({ path: '.env.production' }).parsed) {
//     dotenv.config({ path: '.env.development' });
//   }

//   return { ...defaultConfig, ...nextConfig };
// };
