'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

import { useSnackbar } from '@lib/provider/SnackbarProvider';

const Snackbar = () => {
  const snackbar = useSnackbar();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setHide(true);
    }, 2000);
    const timer = setTimeout(() => {
      snackbar.show(null);
      setHide(false);
    }, 3000);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(timer);
    };
  }, [snackbar]);

  if (!snackbar.value) {
    return null;
  }

  return (
    <div
      className={cn(
        'absolute bottom-5 left-0 grid w-full place-items-center',
        { 'animate-slide-up': !hide },
        { 'animate-slide-down': hide },
      )}>
      <div className="w-[80%] rounded-xl bg-[#323232] p-3 text-center text-b3 text-white opacity-80">
        {snackbar.value}
      </div>
    </div>
  );
};

export default Snackbar;
