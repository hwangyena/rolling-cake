'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

const LoginButton = () => {
  const handleClick = () => {
    signIn('kakao', {
      callbackUrl: '/',
    });
  };

  return (
    <button
      className="color-black flex h-[55px] w-full items-center justify-center gap-2 rounded-[8px] border-2 border-black bg-yellow p-[16px] shadow-black"
      onClick={handleClick}>
      <Image src={'/images/kakao.png'} alt="kakao" width={25} height={25} />
      <span className="text-btn1 font-bold text-[#181602]">카카오 로그인</span>
    </button>
  );
};

export default LoginButton;
