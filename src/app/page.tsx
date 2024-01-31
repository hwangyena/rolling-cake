import ClientOnly from '@/components/ClientOnly';
import { getCurrentUser } from '@/service/server/user';

import HomeClient from './HomeClient';
import MakeNameClient from './MakeNameClient';

export default async function Home() {
  const user = await getCurrentUser();

  if (user && !user.rollingCakeName) {
    return (
      <ClientOnly>
        <MakeNameClient user={user} />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <HomeClient user={user} />
    </ClientOnly>
  );
}
