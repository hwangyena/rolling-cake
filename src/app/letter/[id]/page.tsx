import ClientOnly from '@/components/ClientOnly';
import LetterClient from './LetterClient';
import { notFound } from 'next/navigation';
import { getCake } from '@/service/server/cake';
import { getCurrentUser, getUser } from '@/service/server/user';

export default async function CakeDetail({ params }: { params: { id: string } }) {
  const [cake, currentUser] = await Promise.all([getCake(params.id), getCurrentUser()]);
  const user = await getUser(cake ? cake.userId : '');

  if (!cake || !user) {
    return notFound();
  }

  return (
    <ClientOnly>
      <LetterClient {...cake} user={user} currentUser={currentUser} />
    </ClientOnly>
  );
}
