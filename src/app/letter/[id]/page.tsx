import ClientOnly from '@/components/ClientOnly';
import LetterClient from './LetterClient';
import getCake from '@/actions/getCake';
import getUser from '@/actions/getUser';
import getCurrentUser from '@/actions/getCurrentUser';

export default async function CakeDetail({ params }: { params: { id: string } }) {
  const cake = await getCake(params.id);
  const user = await getUser(cake ? cake.userId : '');
  const currentUser = await getCurrentUser();

  // TODO: error console
  if (!cake || !user) {
    return <>error!</>;
  }

  return (
    <ClientOnly>
      <LetterClient {...cake} user={user} currentUser={currentUser} />
    </ClientOnly>
  );
}
