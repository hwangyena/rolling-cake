import styles from '@/styles/page.module.css';

import LoginButton from '@/components/LoginButton';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

export default async function Home() {
  const user = await getServerSession(authOptions);

  return (
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
  );
}
