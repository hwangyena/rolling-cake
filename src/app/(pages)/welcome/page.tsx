import GradientContainer from '@/components/GradientContainer';
import Cake from '@/components/cake/Cake';
import { Metadata } from 'next';

import 'server-only';

import { getCurrentUser } from '@service/user';

import { WelcomePopup } from './_components';

export const metadata: Metadata = {
  title: 'Welcome!',
  description: '환영해요! 친구들에게 축하 받을 수 있도록 롤링케이크 이름을 지어볼까요?',
};

export default async function Welcome() {
  const user = await getCurrentUser();

  return (
    <GradientContainer type="greenCircle" className="flex flex-col items-center justify-between">
      <div className="grid h-full w-full flex-1 place-items-center p-[10%]">
        <Cake className="aspect-square w-[100%]" />
      </div>

      <WelcomePopup user={user!} />
    </GradientContainer>
  );
}
