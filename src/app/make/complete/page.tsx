import { Suspense } from 'react';
import ClientOnly from '@/components/ClientOnly';
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
