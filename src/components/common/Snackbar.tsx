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
        'fixed left-0 bottom-5 grid place-items-center z-50 w-full',
        {
          'animate-slide-up': !hide,
        },
        { 'animate-slide-down': hide }
      )}>
      <div className=" bg-[#323232] opacity-80 p-3 rounded-xl w-[80%] text-white text-b3 text-center">
        {value.text}
      </div>
    </div>
  );
};

export default memo(Snackbar);
