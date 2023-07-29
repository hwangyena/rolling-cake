'use client';

import { useAtom } from 'jotai';
import { popupStore } from '@/lib/store';

import '../styles/global.css';
import Popup from '@/components/common/Popup';
import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
  const [popup] = useAtom(popupStore);

  return (
    <html lang="en">
      <body className="max-w-[480px] h-full my-0 mx-auto">
        {children}
        {popup && <Popup />}
      </body>
    </html>
  );
}
