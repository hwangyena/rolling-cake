'use client';

import LoginButton from '@/components/LoginButton';
import Button from '@/components/common/Button';
import CustomPopup from '@/components/common/CustomPopup';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import type { User } from '@prisma/client';
import GradientContainer from '@/components/GradientContainer';

const HomeClient = ({ user }: { user?: User | null }) => {
  const router = useRouter();

  const [show, setShow] = useState(() => (user ? false : true));

  const onLinkClicked = useCallback(() => {
    router.push(`/cake/${user?.id}`);
  }, [router, user]);

  const onClosePopup = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <GradientContainer type="green-pink" className="flex flex-col items-center justify-evenly px-5">
      <div className="relative h-[20%] w-full">
        <Image src="/images/logo.png" fill alt="" className="absolute" />
      </div>
      <div className="h-[50%] w-[90%] bg-slate-300" />
      <footer className="w-full text-center">
        {user ? (
          <Button type="BIG" onClick={onLinkClicked}>
            내 롤링케이크 보러가기
          </Button>
        ) : (
          <LoginButton />
        )}
        <p className="mt-3 font-neo text-b3 text-gray-700">
          Copyright 2023. Team Planet. all rights reserved.
        </p>
      </footer>
      {show && (
        <CustomPopup
          title={'Alert'}
          content={`계속 진행하면 롤링케이스 <mark id='terms'>서비스 이용약관 및 개인정보 처리방침</mark>에 동의한 것으로 간주됩니다.`}
          hasIcon
          onConfirm={onClosePopup}
        />
      )}
    </GradientContainer>
  );
};

export default HomeClient;
