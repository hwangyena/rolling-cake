'use client';

import LoginButton from '@/components/LoginButton';
import Button from '@/components/common/Button';
import CustomPopup from '@/components/common/CustomPopup';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import type { User } from '@prisma/client';
import GradientContainer from '@/components/GradientContainer';
import WaveTitle from '@/components/style/WaveTitle';

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
    <GradientContainer
      type="green-pink"
      className="full-screen flex flex-col items-center gap-7 px-5">
      <div className="relative mt-[7vh] h-[23%] w-full">
        <Image src="/images/logo.png" fill alt="logo" priority />
      </div>
      <div className="relative h-[50%] w-[95%]">
        <Image src="/images/main-cake.png" fill alt="cake" priority />
      </div>
      <footer className="absolute bottom-0 w-full p-5 text-center">
        <div className="mb-10 flex justify-center">
          <WaveTitle />
        </div>
        {user ? (
          <Button.BigButton onClick={onLinkClicked}>내 롤링케이크 보러가기</Button.BigButton>
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
