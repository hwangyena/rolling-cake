'use client';

import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';
import CircleButton from '../common/CircleButton';
import Header from '../common/Header';
import GradientContainer from '../GradientContainer';

type Props = {
  order?: number;
  orderLength: number;
  title: string;
  nextStep: string;
};

const Wrapper = ({ order, orderLength, title, children, nextStep }: PropsWithChildren<Props>) => {
  const router = useRouter();

  return (
    <GradientContainer type="green-circle">
      <main className="relative w-full h-full flex flex-col">
        <header className="flex flex-col items-center justify-center pt-[40px] gap-8">
          <mark
            className={`gray-gradient px-[16px] py-[2px] border rounded-[20px] font-neo text-t2 ${
              order ? '' : 'invisible'
            }`}>
            {order}/{orderLength}
          </mark>
          <Header>{title}</Header>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="p-3 mb-5 w-full flex justify-between">
          <CircleButton type="<" onClick={() => router.back()} />
          <CircleButton type=">" onClick={() => router.push(`/make?step=${nextStep}`)} />
        </footer>
      </main>
    </GradientContainer>
  );
};

export default Wrapper;