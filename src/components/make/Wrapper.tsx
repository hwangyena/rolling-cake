'use client';

import { useEvent } from '@/hooks/common';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useCallback } from 'react';
import GradientContainer from '../GradientContainer';
import CircleButton from '../common/CircleButton';
import Header from '../common/Header';
import { useBlock } from '@/hooks/make';
import { useAtom } from 'jotai';
import { stepValidAtom } from '@/lib/store';

type Props = {
  order?: number;
  orderLength: number;
  title: string;
  nextStep: string | null;
};

const Wrapper = ({ order, orderLength, title, children, nextStep }: PropsWithChildren<Props>) => {
  const router = useRouter();

  const [disabled] = useAtom(stepValidAtom);
  const { onBackClicked } = useBlock();
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
      <main className="relative flex h-full w-full flex-col">
        <header className="flex flex-col items-center justify-center gap-8 pt-[40px]">
          <mark
            className={`gray-gradient rounded-[20px] border px-[16px] py-[2px] font-neo text-t2 no-underline ${
              order ? '' : 'invisible'
            }`}>
            {order}/{orderLength}
          </mark>
          <Header>{title}</Header>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="mb-5 flex w-full justify-between p-3">
          <CircleButton type="<" onClick={onBackClicked} />
          <CircleButton type=">" onClick={onNextClicked} disabled={disabled} />
        </footer>
      </main>
    </GradientContainer>
  );
};

export default Wrapper;
