'use client';

import Image from 'next/image';
import { type FC, useState } from 'react';

import { SmallButton } from '@components/common/Button';

const COACHMARK_KEY = 'rolling-cake-coach';
const CoachMark: FC = () => {
  const [hide, setHide] = useState(() => !!localStorage.getItem(COACHMARK_KEY));
  const handleCloseClicked = () => {
    localStorage.setItem(COACHMARK_KEY, 'true');
    setHide(true);
  };
  if (hide) {
    return null;
  }
  return (
    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-end backdrop-blur-md pt-[100px]">
      <div className="z-[100] flex flex-col items-center w-full">
        <div className="relative">
          <Image src="/images/cake.png" alt="cake" width={350} height={370} />
          <div className="w-[110px] h-[32px] opacity-80 absolute right-[20px] top-[190px]">
            <div className="animate-slide-right-width green-pink-swap-gradient h-full rounded-r-[100px]" />
          </div>
          <div className="animate-slide-right absolute right-[70px] top-[200px]">
            <Image
              src="/images/cursor.png"
              alt="cursor"
              width={50}
              height={66}
              className="bottom-9 rotate-[-30deg]"
            />
          </div>
        </div>
        <div className="mt-[39px] text-center">
          <p className="text-white text-b1">케이크를 클릭해 회전시켜봐!</p>
          <p className="text-white text-b1">다른 각도로 볼 수 있어</p>
        </div>
        <SmallButton color="pink" className="mt-[30px]" onClick={handleCloseClicked}>
          확인 완
        </SmallButton>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-50 bg-black opacity-[0.8]" />
    </div>
  );
};

export default CoachMark;
