import getCakes from '@/actions/getCakes';
import getCurrentUser from '@/actions/getCurrentUser';
import ClientOnly from '@/components/ClientOnly';
import EmptyCakeClient from './EmptyCakeClient';
import HaveCakeClient from './HaveCakeClient';

export default async function CakePage({ params }: { params: { id: string } }) {
  const cakes = await getCakes(params.id);
  const user = await getCurrentUser();

  // TODO: show error | error page
  if (!cakes || !user) {
    return <>error</>;
  }

  if (cakes.length === 0) {
    return (
      <ClientOnly>
        <EmptyCakeClient user={user} isOwn={user.id === params.id} />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <HaveCakeClient user={user} cakes={cakes} />
    </ClientOnly>
  );
}
