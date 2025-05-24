'use client';

import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

import Popup from '@components/common/Popup';

export type Popup = {
  title: string;
  content?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  hideCancel?: boolean;
  bottomNode?: ReactNode;
};

const PopupContext = createContext<{
  popup: Popup | null;
  show: (value: Popup | null) => void;
  hide: () => void;
} | null>(null);

export function PopupProvider({ children }: { children: ReactNode }) {
  const [popup, setPopup] = useState<Popup | null>(null);
  const show = useCallback((value: Popup | null) => {
    setPopup(value);
  }, []);
  const hide = useCallback(() => {
    setPopup(null);
  }, []);

  return (
    <PopupContext.Provider value={{ popup, show, hide }}>
      {children}
      <Popup />
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
}
