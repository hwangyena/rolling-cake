'use client';

import { customPopupStore, focusInputStore, popupStore } from '@/lib/store';
import { useAtom } from 'jotai';

import FocusInput from '@/components/common/FocusInput';
import Popup from '@/components/common/Popup';
import { PropsWithChildren } from 'react';
import '../styles/global.css';
import CustomPopup from '@/components/common/CustomPopup';
import ClientOnly from '@/components/ClientOnly';

export default function RootLayout({ children }: PropsWithChildren) {
  const [popup] = useAtom(popupStore);
  const [customPopup] = useAtom(customPopupStore);
  const [focusInput] = useAtom(focusInputStore);

  return (
    <html lang="en">
      <body className="max-w-[480px] h-full my-0 mx-auto relative">
        {children}

        <ClientOnly>
          {popup && <Popup />}
          {customPopup && <CustomPopup />}
          {focusInput && <FocusInput />}
        </ClientOnly>
      </body>
    </html>
  );
}
