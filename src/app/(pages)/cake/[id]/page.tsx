import Navigation from '@/components/common/Navigation';
import { getCurrentUser, getUser } from '@/service/server/user';
import { notFound } from 'next/navigation';
import { match } from 'ts-pattern';

import 'server-only';

import { EmptyCake, HaveCake } from './_components';
import { getCakes } from './_lib';

export default async function CakePage({ params }: { params: { id: string } }) {
  const [cakes, user, loginUser] = await Promise.all([
    getCakes(params.id),
    getUser(params.id),
    getCurrentUser(),
  ]);
  const isOwn = loginUser?.id === params.id;

  if (!user) {
    return notFound();
  }

  return (
    <>
      <Navigation
        show={loginUser?.id === params.id ? ['home', 'upload'] : ['home']}
        className="justify-end"
      />
      {match(cakes.length === 0)
        .with(true, () => <EmptyCake user={user} isOwn={isOwn} />)
        .otherwise(() => (
          <HaveCake cakes={cakes} isOwn={isOwn} user={user} />
        ))}
    </>
  );
}
