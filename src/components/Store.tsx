'use client';

import { snackBarAtom } from '@/lib/store';
import { useAtom } from 'jotai';

import Snackbar from './common/Snackbar';

export default function Store() {
  const [snackBar] = useAtom(snackBarAtom);

  return <>{snackBar && <Snackbar />}</>;
}
