'use client';

import { focusInputStore, popupStore, snackBarAtom } from '@/lib/store';
import { useAtom } from 'jotai';
import Popup from './common/Popup';
import FocusInput from './common/FocusInput';
import Snackbar from './common/Snackbar';

export default function Store() {
  const [popup] = useAtom(popupStore);
  const [focusInput] = useAtom(focusInputStore);
  const [snackBar] = useAtom(snackBarAtom);

  return (
    <>
      {popup && <Popup />}
      {focusInput && <FocusInput />}
      {snackBar && <Snackbar />}
    </>
  );
}