'use client';

import LoginButton from '@/components/LoginButton';
import Button from '@/components/common/Button';
import CustomPopup from '@/components/common/CustomPopup';
import styles from '@/styles/page.module.css';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

const HomeClient = ({ login }: { login: boolean }) => {
  const router = useRouter();

  const [show, setShow] = useState(() => (login ? false : true));

  const onLinkClicked = useCallback(() => {
    router.push('/cake');
  }, [router]);

  const onClosePopup = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <main className={styles.main}>
      <div className="w-full h-[20%] relative">
        <Image src="/images/logo.png" fill alt="" className="absolute" />
      </div>
      <div className="w-[90%] h-[50%] bg-slate-300" />
      <footer className="w-full text-center">
        {login ? (
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
      {show && (
        <CustomPopup
          title={'Alert'}
          content={`계속 진행하면 롤링케이스 <mark id='terms'>서비스 이용약관 및 개인정보 처리방침</mark>에 동의한 것으로 간주됩니다.`}
          right={20}
          bottom={30}
          width={'80%'}
          hasIcon
          onConfirm={onClosePopup}
        />
      )}
    </main>
  );
};

export default HomeClient;
