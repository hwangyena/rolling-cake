import ClientOnly from '@/components/ClientOnly';
import Navigation from '@/components/common/Navigation';
import { getCurrentUser, getUser } from '@/service/server/user';
import { notFound } from 'next/navigation';

import EmptyCakeClient from './EmptyCakeClient';
import HaveCakeClient from './HaveCakeClient';

export default async function CakePage({ params }: { params: { id: string } }) {
  const cakes = await fetch(`${process.env.NEXTAUTH_URL}/api/cake/${params.id}`, {
    method: 'GET',
    cache: 'no-store',
  }).then((res) => res.json());

  const user = await getUser(params.id);
  const loginUser = await getCurrentUser();

  if (!user) {
    return notFound();
  }

  if (cakes?.length === 0) {
    return (
      <ClientOnly>
        <Navigation
          show={loginUser?.id === params.id ? ['home', 'upload'] : ['home']}
          className="justify-end"
        />
        <EmptyCakeClient user={user} isOwn={loginUser?.id === params.id} />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Navigation
        show={loginUser?.id === params.id ? ['home', 'upload'] : ['home']}
        className="justify-end"
      />
      <HaveCakeClient user={user} cakes={cakes} isOwn={loginUser?.id === params.id} />
    </ClientOnly>
  );
}
