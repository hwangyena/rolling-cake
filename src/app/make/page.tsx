import { Suspense } from 'react';

import MakeClient from './MakeClient';

import ClientOnly from '@components/ClientOnly';
import { LayoutFooter, LayoutHeader } from '@components/make/Layout';

export default function Page() {
  return (
    <ClientOnly>
      <LayoutHeader />
      <Suspense>
        <MakeClient />
      </Suspense>
      <LayoutFooter />
    </ClientOnly>
  );
}
