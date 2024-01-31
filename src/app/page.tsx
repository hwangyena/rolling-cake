import ClientOnly from '@/components/ClientOnly';
import MakeNameClient from './MakeNameClient';
import HomeClient from './HomeClient';
import { getCurrentUser } from '@/service/server/user';

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
