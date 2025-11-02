'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { BigButton } from '@components/common/Button';

export const metadata: Metadata = {
  title: '앗, 페이지를 찾을 수 없어요',
  description:
    '찾는 페이지의 주소가 잘못 되었거나 주소가 삭제 되었을 수 있어요. 페이지의 주소를 다시 한 번 확인해주세요.',
};

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="deep-pink-gradient relative flex h-full w-full flex-col items-center px-5">
      <div className="absolute left-1/2 top-[20%] -translate-x-1/2">
        <Image src="/images/404.png" alt="404" width={160} height={105} />
      </div>

      <section className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-5 text-center">
        <h1 className="text-h1 font-bold text-gray-800">앗, 페이지에 오류가 생겼어요</h1>
        <p className="mt-7 text-b1 text-gray-800">
          찾는 페이지의 주소가 잘못 되었거나
          <br />
          주소가 삭제 되었을 수 있어요.
          <br />
          페이지를 다시 한 번 확인해주세요.
        </p>
      </section>

      <section className="absolute bottom-[50px] left-1/2 flex w-full -translate-x-1/2 flex-row gap-4 px-5">
        <BigButton
          color="white"
          className="flex-1"
          onClick={() => router.push('mailto:rollingcake@gmail.com')}>
          이메일 문의하기
        </BigButton>
        <BigButton color="blue" className="flex-1" onClick={() => router.push('/')}>
          홈으로 가기
        </BigButton>
      </section>
    </div>
  );
}
