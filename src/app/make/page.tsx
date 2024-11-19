import { Suspense } from 'react';

import MakeClient from './MakeClient';

export default function Page() {
  return (
    <Suspense>
      <MakeClient />
    </Suspense>
  );
}
