'use client';

import { snackBarAtom } from '@/lib/store';
import { cn } from '@/lib/utils';
import { useAtom } from 'jotai';
import { memo, useEffect, useState } from 'react';

const Snackbar = () => {
  const [value, dispatch] = useAtom(snackBarAtom);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setHide(true);
    }, 2000);

    const timer = setTimeout(() => {
      dispatch(null);
    }, 3000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(timer);
    };
  }, [dispatch]);

  if (!value) {
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
        {value.text}
      </div>
    </div>
  );
};

export default memo(Snackbar);
