'use client';

import { focusInputStore, popupStore } from '@/lib/store';
import { useAtom } from 'jotai';

import FocusInput from '@/components/common/FocusInput';
import Popup from '@/components/common/Popup';
import { PropsWithChildren } from 'react';
import '../styles/global.css';

export default function RootLayout({ children }: PropsWithChildren) {
  const [popup] = useAtom(popupStore);
  const [focusInput] = useAtom(focusInputStore);

  return (
    <html lang="en">
      <body className="max-w-[480px] h-full my-0 mx-auto relative">
        {children}

        {popup && <Popup />}
        {focusInput && <FocusInput />}
      </body>
    </html>
  );
}
