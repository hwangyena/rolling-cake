'use client';

import CircleButton from '@/components/common/CircleButton';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="w-full h-full green-line flex flex-col px-5 py-10 gap-14">
      <section>
        <CircleButton type="<" onClick={() => router.back()} />
      </section>
      <section>
        <h1 className="text-h1 text-gray-800 font-bold">
          앗, 페이지를
          <br />
          찾을 수 없어요🥲
        </h1>
        <p className="text-b1 text-gray-800 mt-7">
          찾는 페이지의 주소가 잘못 되었거나
          <br />
          주소가 삭제 되었을 수 있어요.
          <br />
          페이지의 주소를 다시 한 번 확인해주세요.
        </p>
      </section>
      <section className="relative w-full h-full">
        <div className="absolute bottom-1 right-[-1.25rem] bg-404 bg-contain bg-no-repeat w-[95%] aspect-[2/1]" />
      </section>
    </div>
  );
}
