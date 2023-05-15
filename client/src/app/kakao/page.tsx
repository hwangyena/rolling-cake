'use client';

import { useSearchParams } from 'next/navigation';

export default function KakaoPage() {
  const searchParams = useSearchParams();

  console.log('searchParams', searchParams.toString());

  return (
    <div>
      <h1>카카오 테스트 중...</h1>
    </div>
  );
}
