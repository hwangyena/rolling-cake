'use client';

import { User } from '@prisma/client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import Button from './common/Button';

const LoginButton = ({ user }: { user: User | null }) => {
  const router = useRouter();

  const onLinkClicked = useCallback(() => {
    router.push('/cake');
  }, [router]);

  if (user) {
    return (
      <Button type="BIG" onClick={onLinkClicked}>
        내 롤링케이크 보러가기
      </Button>
    );
  }
  return (
    <button
      className="w-full h-[70px] rounded-lg relative bg-slate-300"
      onClick={() =>
        signIn('kakao', {
          callbackUrl: '/api/auth',
        })
      }>
      <Image src={'/images/kakao_login_large_wide.png'} alt="kakao_login" fill />
    </button>
  );
};

export default LoginButton;
