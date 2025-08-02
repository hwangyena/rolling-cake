import Image from 'next/image';
import { redirect } from 'next/navigation';

import 'server-only';

import { getCurrentUser } from '@service/user';

import WaveTitle from '@components/style/WaveTitle';

import { AlertPopup, BottomButton, MarqueeCake, Sparkle, Sparkle2 } from './_components';

export default async function Home() {
  const user = await getCurrentUser();

  if (user && !user.rollingCakeName) {
    // TODO: redirect to another page
    redirect('/welcome');
  }

  return (
    <div className="full-screen flex flex-col items-center gap-7 px-5 bg-primary-blue-50 h-full">
      <div className="relative mt-[5vh] max-w-[60rem]">
        <Image src="/images/creators.png" alt="팀명" priority width={155} height={46} />
      </div>
      <div className="relative aspect-[1/0.6] w-full max-w-[60rem]">
        <Image src="/images/logo.png" fill alt="로고" priority />
      </div>
      <div className="relative h-[50%] w-[100%]">
        <MarqueeCake />
      </div>
      <div>
        <Sparkle className="absolute top-[34%] left-[30%]" />
        <Sparkle className="absolute top-[5vh] left-[20%]" delay={0.3} />
        <Sparkle className="absolute top-[6vh] right-[20%]" delay={0.5} />
        <Sparkle className="absolute top-[35%] right-[13%]" delay={0.7} />
        <Sparkle2 className="absolute top-[38%] left-[20%]" />
        <Sparkle2 className="absolute top-[32%] right-[8%]" delay={0.3} />
        <Sparkle2 className="absolute top-[65%] right-[20%] z-10" delay={0.5} />
        <Sparkle2 className="absolute top-[70%] left-[15%] z-10" delay={0.7} />
      </div>
      <footer className="absolute bottom-0 w-full p-5 text-center z-10">
        <div className="mb-10 flex justify-center">
          <WaveTitle />
        </div>
        <BottomButton user={user} />
        <AlertPopup user={user} />
        <p className="mt-3 font-neo text-b3 text-white">
          Copyright 2025. Team DaSiYeah. all rights reserved.
        </p>
      </footer>
    </div>
  );
}
