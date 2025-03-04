import 'server-only';

import ClientOnly from '@components/ClientOnly';
import { LayoutFooter, LayoutHeader } from '@components/make/Layout';

import MakeCakeClient from './MakeCakeClient';

export default function Page() {
  return (
    <ClientOnly>
      <LayoutHeader />

      <MakeCakeClient />

      <LayoutFooter />
    </ClientOnly>
  );
}
