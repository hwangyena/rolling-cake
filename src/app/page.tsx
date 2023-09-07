import getCurrentUser from '@/actions/getCurrentUser';
import ClientOnly from '@/components/ClientOnly';
import MakeNameClient from './MakeNameClient';
import HomeClient from './HomeClient';

export default async function Home() {
  const user = await getCurrentUser();

  if (user && !user.rollingCakeName) {
    return (
      <ClientOnly>
        <MakeNameClient />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <HomeClient login={!!user} />
    </ClientOnly>
  );
}
