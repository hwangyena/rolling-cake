'use client';

import Image from 'next/image';

const LoginButton = () => {
  return (
    <a
      href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT}&response_type=code`}>
      <button className="w-full h-[70px] rounded-lg relative bg-slate-300">
        <Image src={'/images/kakao_login_large_wide.png'} alt="kakao_login" fill />
      </button>
    </a>
  );
};

export default LoginButton;
