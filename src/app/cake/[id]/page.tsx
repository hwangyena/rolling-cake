import getCurrentUser from '@/actions/getCurrentUser';
import getUser from '@/actions/getUser';
import ClientOnly from '@/components/ClientOnly';
import EmptyCakeClient from './EmptyCakeClient';
import HaveCakeClient from './HaveCakeClient';
import { Cake } from '@prisma/client';
// import { getBaseUrl } from '@/lib/utils';

export default async function CakePage({ params }: { params: { id: string } }) {
  // const cakes = await fetch(`${getBaseUrl()}/cake/${params.id}`, {
  //   method: 'GET',
  //   cache: 'no-store',
  // }).then((res) => res.json());

  const cakes = [] as Cake[];

  const user = await getUser(params.id);
  const loginUser = await getCurrentUser();

  if (!user) {
    return <>error</>;
  }

  if (cakes?.length === 0) {
    return (
      <ClientOnly>
        <EmptyCakeClient user={user} isOwn={loginUser?.id === params.id} />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <HaveCakeClient user={user} cakes={cakes} isOwn={loginUser?.id === params.id} />
    </ClientOnly>
  );
}
