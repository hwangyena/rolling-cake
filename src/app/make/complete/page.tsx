import ClientOnly from '@/components/ClientOnly';
import { Suspense } from 'react';

import CompleteClient from './completeClient';

export default function Page() {
  return (
    <ClientOnly>
      <Suspense>
        <CompleteClient />
      </Suspense>
    </ClientOnly>
  );
}
