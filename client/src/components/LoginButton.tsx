'use client';

import Image from 'next/image';

const LoginButton = () => {
  return (
    <button
      className="w-full h-[70px] rounded-lg relative bg-slate-300"
      //TODO: login
      onClick={() => null}>
      <Image src={'/images/kakao_login_large_wide.png'} alt="kakao_login" fill />
    </button>
  );
};

export default LoginButton;
