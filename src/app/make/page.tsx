import { Suspense } from 'react';

import MakeCakeClient from './MakeCakeClient';

import ClientOnly from '@components/ClientOnly';
import { LayoutFooter, LayoutHeader } from '@components/make/Layout';

export default function Page() {
  return (
    <ClientOnly>
      <LayoutHeader />

      <Suspense>
        <MakeCakeClient />
      </Suspense>

      <LayoutFooter />
    </ClientOnly>
  );
}
