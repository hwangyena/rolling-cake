import 'server-only';

import ClientOnly from '@components/ClientOnly';
import { LayoutFooter, LayoutHeader } from '@components/make/Layout';

import MakeCakeClient from './MakeCakeClient';

export default function Page({ params: { userId } }: { params: { userId: string } }) {
  return (
    <ClientOnly>
      <LayoutHeader />

      <MakeCakeClient userId={userId} />

      <LayoutFooter />
    </ClientOnly>
  );
}
