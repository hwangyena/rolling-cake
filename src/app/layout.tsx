import ClientOnly from '@/components/ClientOnly';
import Store from '@/components/Store';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import '../global.css';

export const metadata: Metadata = {
  title: '롤링케이크',
  description: '내 롤링케이크.. 써줄래?',
  applicationName: 'Rolling cake',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'rollincake',
    'rolling',
    'cake',
    'paper',
    '롤링케이크',
    '롤링',
    '케이크',
    '페이퍼',
    '롤리페이퍼',
    '크리스마스',
    '선물',
  ],
  creator: 'Hwang yena',
  publisher: 'Hwang yena',
  appleWebApp: {
    title: '롤링케이크',
  },
  openGraph: {
    title: '롤링케이크',
    description: '내 롤링케이크...써줄래?',
    url: `https://${process.env.AWS_S3_URL}/thumbnail.png`,
    siteName: '롤링케이크',
    images: `https://${process.env.AWS_S3_URL}/thumbnail.png`,
    type: 'website',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body className="relative mx-auto my-0 max-w-[480px]">
        {children}

        <SpeedInsights />
        <ClientOnly>
          <Store />
        </ClientOnly>
      </body>

      <GoogleAnalytics gaId="G-ERYF8E3XGX" />
      <Analytics />
    </html>
  );
}
