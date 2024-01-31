import { Suspense } from 'react';
import MakeClient from './makeClient';

export default function Page() {
  return (
    <Suspense>
      <MakeClient />
    </Suspense>
  );
}
