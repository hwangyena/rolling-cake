import styles from '@/styles/page.module.css';

import getCurrentUser from '@/actions/getCurrentUser';
import ClientOnly from '@/components/ClientOnly';
import LoginButton from '@/components/LoginButton';
import Image from 'next/image';
import MakeNameClient from './HomeClient';

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
      <main className={styles.main}>
        <div className="w-full h-[20%] relative">
          <Image src="/images/logo.png" fill alt="" className="absolute" />
        </div>
        <div className="w-[90%] h-[50%] bg-slate-300" />
        <footer className="w-full text-center">
          <LoginButton user={user} />
          <p className="font-neo text-gray-700 text-b3 mt-3">
            Copyright 2023. Team Planet. all rights reserved.
          </p>
        </footer>
      </main>
    </ClientOnly>
  );
}
