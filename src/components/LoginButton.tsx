'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

const LoginButton = () => {
  return (
    <button
      className="w-full h-[55px] rounded-lg relative bg-slate-300"
      onClick={() =>
        signIn('kakao', {
          callbackUrl: '/',
        })
      }>
      <Image src={'/images/kakao_login_large_wide.png'} alt="kakao_login" fill />
    </button>
  );
};

export default LoginButton;
