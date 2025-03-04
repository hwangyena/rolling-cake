'use client';

import { focusInputStore, snackBarAtom } from '@/lib/store';
import { useAtom } from 'jotai';

import FocusInput from './common/FocusInput';
import Snackbar from './common/Snackbar';

export default function Store() {
  const [focusInput] = useAtom(focusInputStore);
  const [snackBar] = useAtom(snackBarAtom);

  return (
    <>
      {focusInput && <FocusInput />}
      {snackBar && <Snackbar />}
    </>
  );
}
