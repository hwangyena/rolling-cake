'use client';

import { focusInputStore, popupStore, snackBarAtom } from '@/lib/store';
import { useAtom } from 'jotai';

import ClientOnly from '@/components/ClientOnly';
import FocusInput from '@/components/common/FocusInput';
import Popup from '@/components/common/Popup';
import Snackbar from '@/components/common/Snackbar';
import { PropsWithChildren } from 'react';
import '../styles/global.css';

export default function RootLayout({ children }: PropsWithChildren) {
  const [popup] = useAtom(popupStore);
  const [focusInput] = useAtom(focusInputStore);
  const [snackBar] = useAtom(snackBarAtom);

  return (
    <html lang="en">
      <body className="max-w-[480px] h-full my-0 mx-auto relative">
        {children}

        <ClientOnly>
          {popup && <Popup />}
          {focusInput && <FocusInput />}
          {snackBar && <Snackbar />}
        </ClientOnly>
      </body>
    </html>
  );
}
