'use client';

import { useLogin } from '@/apis/auth';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function KakaoPage() {
  const { trigger, data } = useLogin();

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get('code');

    if (!searchParams || !code) {
      return;
    }

    trigger(code);
  }, [searchParams, trigger]);

  useEffect(() => {
    if (data) {
      router.replace('/');
    }
  }, [data, router]);

  return (
    <div>
      {/* //TODO: add spinner  */}
      <h1>카카오 로그인 중...</h1>
    </div>
  );
}
