import { Suspense } from 'react';

import MakeCompleteClient from './MakeCompleteClient';

import ClientOnly from '@components/ClientOnly';

export default function Page() {
  return (
    <ClientOnly>
      {/* TODO: Loading 추가 */}
      <Suspense>
        <MakeCompleteClient />
      </Suspense>
    </ClientOnly>
  );
}
