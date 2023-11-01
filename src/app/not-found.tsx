'use client';

import CircleButton from '@/components/common/CircleButton';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="green-line flex h-full w-full flex-col gap-14 px-5 py-10">
      <section>
        <CircleButton type="<" onClick={() => router.back()} />
      </section>
      <section>
        <h1 className="text-h1 font-bold text-gray-800">
          앗, 페이지를
          <br />
          찾을 수 없어요🥲
        </h1>
        <p className="mt-7 text-b1 text-gray-800">
          찾는 페이지의 주소가 잘못 되었거나
          <br />
          주소가 삭제 되었을 수 있어요.
          <br />
          페이지의 주소를 다시 한 번 확인해주세요.
        </p>
      </section>
      <section className="relative h-full w-full">
        <div className="absolute bottom-1 right-[-1.25rem] aspect-[2/1] w-[95%] bg-404 bg-contain bg-no-repeat" />
      </section>
    </div>
  );
}
