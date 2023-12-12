import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import ClientOnly from '@/components/ClientOnly';
import Store from '@/components/Store';
import '../styles/global.css';

export const metadata: Metadata = {
  title: '롤링케이크',
  description: '내 롤링케이크.. 써줄래?',
  generator: 'Next.js',
  applicationName: 'Next.js',
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
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  creator: 'Hwang yena',
  publisher: 'Hwang yena',
  appleWebApp: {
    title: '롤링케이크',
  },
  openGraph: {
    title: '롤링케이크',
    description: '내 롤링케이크...써줄래?',
    url: `${process.env.AWS_S3_URL}/thumbnail.png`,
    siteName: '롤링케이크',
    images: [
      {
        url: `${process.env.AWS_S3_URL}/thumbnail.png`,
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="relative mx-auto my-0 h-full max-w-[480px]">
        {children}

        <ClientOnly>
          <Store />
        </ClientOnly>
      </body>
    </html>
  );
}
