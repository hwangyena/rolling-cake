'use client';

import { useRouter } from 'next/navigation';
import { PropsWithChildren, useCallback } from 'react';
import CircleButton from '../common/CircleButton';
import Header from '../common/Header';
import GradientContainer from '../GradientContainer';
import { useEvent } from '@/hooks/common';

type Props = {
  order?: number;
  orderLength: number;
  title: string;
  nextStep: string | null;
};

const Wrapper = ({ order, orderLength, title, children, nextStep }: PropsWithChildren<Props>) => {
  const router = useRouter();

  const { trigger } = useEvent('make:next-step');

  const onNextClicked = useCallback(() => {
    router.push(`/make?step=${nextStep}`);
    trigger();
  }, [nextStep, router, trigger]);

  if (!nextStep) {
    return <>{children}</>;
  }

  return (
    <GradientContainer type="green-circle">
      <main className="relative w-full h-full flex flex-col">
        <header className="flex flex-col items-center justify-center pt-[40px] gap-8">
          <mark
            className={`gray-gradient px-[16px] py-[2px] border rounded-[20px] font-neo text-t2 no-underline ${
              order ? '' : 'invisible'
            }`}>
            {order}/{orderLength}
          </mark>
          <Header>{title}</Header>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="p-3 mb-5 w-full flex justify-between">
          <CircleButton type="<" onClick={() => router.back()} />
          <CircleButton type=">" onClick={onNextClicked} />
        </footer>
      </main>
    </GradientContainer>
  );
};

export default Wrapper;
