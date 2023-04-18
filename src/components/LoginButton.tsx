'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

const LoginButton = () => {
  // const { data: session } = useSession(); //FIXME: use it next!

  return (
    <button
      className="w-full h-[70px] rounded-lg relative bg-slate-300"
      onClick={() => signIn('kakao')}>
      <Image src={'/images/kakao_login_large_wide.png'} alt="kakao_login" fill />
    </button>
  );
};

export default LoginButton;
