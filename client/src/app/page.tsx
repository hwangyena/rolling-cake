'use client';

import styles from '@/styles/page.module.css';

import Button from '@/components/common/Button';
import Image from 'next/image';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const onLinkClicked = useCallback(() => {
    router.push('/cake');
  }, [router]);

  return (
    <main className={styles.main}>
      <div className="w-full h-[20%] relative">
        <Image src="/images/logo.png" fill alt="" className="absolute" />
      </div>
      <div className="w-[90%] h-[50%] bg-slate-300" />
      <footer className="w-full text-center">
        {/* <LoginButton /> */}
        <Button type="BIG" onClick={onLinkClicked}>
          내 롤링케이크 보러가기
        </Button>
        <p className="font-neo text-gray-700 text-b3 mt-3">
          Copyright 2023. Team Planet. all rights reserved.
        </p>
      </footer>
    </main>
  );
}
