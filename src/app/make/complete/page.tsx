import { Suspense } from 'react';

import CompleteClient from './CompleteClient';

import ClientOnly from '@components/ClientOnly';

export default function Page() {
  return (
    <ClientOnly>
      {/* TODO: Loading 추가 */}
      <Suspense>
        <CompleteClient />
      </Suspense>
    </ClientOnly>
  );
}
