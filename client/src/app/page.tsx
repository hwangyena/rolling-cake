'use client';

import styles from '@/styles/page.module.css';

import LoginButton from '@/components/LoginButton';
import Button from '@/components/common/Button';
import { customPopupAtom, userAtom } from '@/lib/store';
import { useAtom, useSetAtom } from 'jotai';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  const [user] = useAtom(userAtom);
  const dispatchCustomPopup = useSetAtom(customPopupAtom);

  const onLinkClicked = useCallback(() => {
    router.push('/cake');
  }, [router]);

  useEffect(() => {
    if (!user) {
      dispatchCustomPopup({
        title: 'Alert',
        content: `계속 진행하면 롤링케이스 <mark id='terms'>서비스 이용약관 및 개인정보 처리방침</mark>에 동의한 것으로 간주됩니다.`,
        right: 20,
        bottom: 30,
        width: '80%',
        hasIcon: true,
      });
    }
  }, [dispatchCustomPopup, user]);

  return (
    <main className={styles.main}>
      <div className="w-full h-[20%] relative">
        <Image src="/images/logo.png" fill alt="" className="absolute" />
      </div>
      <div className="w-[90%] h-[50%] bg-slate-300" />
      <footer className="w-full text-center">
        {user ? (
          <Button type="BIG" onClick={onLinkClicked}>
            내 롤링케이크 보러가기
          </Button>
        ) : (
          <LoginButton />
        )}
        <p className="font-neo text-gray-700 text-b3 mt-3">
          Copyright 2023. Team Planet. all rights reserved.
        </p>
      </footer>
    </main>
  );
}
