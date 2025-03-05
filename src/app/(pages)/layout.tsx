import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { PopupProvider } from '@lib/provider/PopupProvider';
import { SnackbarProvider } from '@lib/provider/SnackbarProvider';

import '../../global.css';

export const metadata: Metadata = {
  title: '롤링케이크',
  description: '내 롤링케이크.. 써줄래?',
  applicationName: 'Rolling cake',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'rollingcake',
    'rolling',
    'cake',
    'paper',
    'rollingpaper',
    '롤링케이크',
    '롤링',
    '케이크',
    '페이퍼',
    '롤링페이퍼',
  ],
  creator: 'yena',
  publisher: 'yena',
  appleWebApp: {
    title: '롤링케이크',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    title: '롤링케이크',
    description: '내 롤링케이크...써줄래?',
    url: `https://${process.env.NEXTAUTH_URL}`,
    siteName: '롤링케이크',
    images: [
      {
        url: `https://${process.env.AWS_S3_URL}/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: '롤링케이크 thumbnail',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '롤링케이크',
    description: '내 롤링케이크... 써줄래?',
    images: `https://${process.env.AWS_S3_URL}/thumbnail.png`,
  },
  robots: {
    index: true,
    follow: true,
  },
  // themeColor: '#FFB6C1', // 브랜드 색상에 맞게 조정
  alternates: {
    canonical: process.env.NEXTAUTH_URL,
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body className="relative mx-auto my-0 max-w-[480px]">
        <PopupProvider>
          <SnackbarProvider>{children}</SnackbarProvider>
        </PopupProvider>
      </body>

      <GoogleAnalytics gaId="G-ERYF8E3XGX" />
    </html>
  );
}
