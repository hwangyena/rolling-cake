import GradientContainer from '@/components/GradientContainer';
import Cake from '@/components/cake/Cake';

import WelcomeClient from './WelcomeClient';

import { getCurrentUser } from '@service/server/user';

import ClientOnly from '@components/ClientOnly';

export default async function Welcome() {
  const user = await getCurrentUser();

  return (
    <GradientContainer type="greenCircle" className="flex flex-col items-center justify-between">
      <div className="grid h-full w-full flex-1 place-items-center p-[10%]">
        <Cake className="aspect-square w-[100%]" />
      </div>

      <ClientOnly>
        <WelcomeClient user={user} />
      </ClientOnly>
    </GradientContainer>
  );
}
