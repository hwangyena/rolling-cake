'use client';

import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

import Snackbar from '@components/common/Snackbar';

const SnackbarContext = createContext<{
  value: string | null;
  className?: string;
  show: (value: string | null) => void;
} | null>(null);

export function SnackbarProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<string | null>(null);
  const show = useCallback((value: string | null) => {
    setValue(value);
  }, []);
  return (
    <SnackbarContext.Provider value={{ value, show }}>
      {children}
      <Snackbar />
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
}
