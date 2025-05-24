import GradientContainer from '@/components/GradientContainer';
import Cake from '@/components/cake/Cake';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import 'server-only';

import { getCurrentUser } from '@service/user';

import { WelcomePopup } from './_components';

export async function generateMetadata(): Promise<Metadata> {
  const user = await getCurrentUser();
  try {
    if (!user) {
      return {
        title: '404 - 롤링케이크',
      };
    }

    return {
      title: 'Welcome! - 롤링케이크',
      description: '환영해요! 친구들에게 축하 받을 수 있도록 롤링케이크 이름을 지어볼까요?',
    };
  } catch (err) {
    return {
      title: '404 - 롤링케이크',
    };
  }
}

export default async function Welcome() {
  const user = await getCurrentUser();
  if (!user) {
    notFound();
  }
  return (
    <GradientContainer type="blueCircle" className="flex flex-col items-center justify-between">
      <div className="grid h-full w-full flex-1 place-items-center p-[10%]">
        <Cake className="aspect-square w-[100%]" />
      </div>
      <WelcomePopup user={user} />
    </GradientContainer>
  );
}
