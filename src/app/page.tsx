import ClientOnly from '@/components/ClientOnly';
import GradientContainer from '@/components/GradientContainer';
import { getCurrentUser } from '@/service/server/user';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import HomeClient from './HomeClient';

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
        <Image src="/images/logo.png" fill alt="logo" priority />
      </div>
      <div className="relative h-[50%] w-[95%]">
        <Image src="/images/main-cake.png" fill alt="cake" priority />
      </div>
      <footer className="absolute bottom-0 w-full p-5 text-center">
        <ClientOnly>
          <HomeClient user={user} />
        </ClientOnly>

        <p className="mt-3 font-neo text-b3 text-gray-700">
          Copyright 2024. Team Planet. all rights reserved.
        </p>
      </footer>
    </GradientContainer>
  );
}
