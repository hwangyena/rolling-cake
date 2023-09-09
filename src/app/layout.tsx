'use client';

import { focusInputStore, popupStore } from '@/lib/store';
import { useAtom } from 'jotai';

import FocusInput from '@/components/common/FocusInput';
import Popup from '@/components/common/Popup';
import { PropsWithChildren } from 'react';
import '../styles/global.css';
import ClientOnly from '@/components/ClientOnly';
import { SWRConfig } from 'swr';
import { fetcher } from '@/lib/fetcher';

export default function RootLayout({ children }: PropsWithChildren) {
  const [popup] = useAtom(popupStore);
  const [focusInput] = useAtom(focusInputStore);

  return (
    <html lang="en">
      <body className="max-w-[480px] h-full my-0 mx-auto relative">
        <SWRConfig value={{ fetcher }}>
          {children}

          <ClientOnly>
            {popup && <Popup />}
            {focusInput && <FocusInput />}
          </ClientOnly>
        </SWRConfig>
      </body>
    </html>
  );
}
