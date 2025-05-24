import { notFound } from 'next/navigation';

import 'server-only';

import { getCurrentUser, getUser } from '@service/user';

import Header from '@components/common/Header';

import CakeCard from './_components/CakeCard';
import CoachMark from './_components/CoachMark';
import { getCake } from './_service';

export default async function CakeDetail({ params }: { params: { id: string } }) {
  const [cake, currentUser] = await Promise.all([getCake(params.id), getCurrentUser()]);
  const user = await getUser(cake ? cake.userId : '');

  if (!cake || !user) {
    return notFound();
  }

  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-col items-center">
        <Header>{`${cake.name}표 롤링케이크와`}</Header>
        <Header>편지를 확인해보r!</Header>
      </section>
      <CakeCard {...cake} user={user} currentUser={currentUser} />
      <CoachMark />
    </main>
  );
}
