import GradientContainer from '@/components/GradientContainer';
import { getCurrentUser } from '@/service/server/user';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import 'server-only';

import WaveTitle from '@components/style/WaveTitle';

import { AlertPopup, BottomButton } from './_components';

export default async function Home() {
  const user = await getCurrentUser();

  if (user && !user.rollingCakeName) {
    // TODO: redirect to another page
    redirect('/welcome');
  }

  return (
    <GradientContainer
      type="greenPink"
      className="full-screen flex flex-col items-center gap-7 px-5">
      <div className="relative mt-[7vh] h-[23%] w-full">
        {/* FIXME: width, height 추가 */}
        <Image src="/images/logo.png" fill alt="logo" priority />
      </div>
      <div className="relative h-[50%] w-[95%]">
        <Image src="/images/main-cake.png" fill alt="cake" priority />
      </div>
      <footer className="absolute bottom-0 w-full p-5 text-center">
        <div className="mb-10 flex justify-center">
          <WaveTitle />
        </div>

        <BottomButton user={user} />
        <AlertPopup user={user} />

        <p className="mt-3 font-neo text-b3 text-gray-700">
          Copyright 2025. Team Planet. all rights reserved.
        </p>
      </footer>
    </GradientContainer>
  );
}
