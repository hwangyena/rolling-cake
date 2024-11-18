'use client';

import { useBlock, useEntireStep } from '@/lib/hooks/make';
import { stepValidAtom } from '@/lib/store';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useCallback } from 'react';

import GradientContainer from '../GradientContainer';
import CircleButton from '../common/CircleButton';
import Header from '../common/Header';

type Props = StepDisplay & {
  order?: number;
  orderLength: number;
};

const Wrapper = ({ order, orderLength, title, children, next }: PropsWithChildren<Props>) => {
  const router = useRouter();

  const [disabled] = useAtom(stepValidAtom);

  const { step } = useEntireStep();
  const { onBackClicked } = useBlock();

  const onNextClicked = useCallback(() => {
    if (next === 'complete') {
      router.push(`/make/complete`);
      return;
    }

    router.push(`/make?step=${next}`);
  }, [next, router]);

  if (!next) {
    return <>{children}</>;
  }

  return (
    <GradientContainer type="green-circle">
      <main className="relative flex h-full w-full flex-col">
        <header className="flex flex-col items-center justify-center gap-8 pt-[40px]">
          <mark
            className={`gray-gradient cursor-auto rounded-[20px] border border-black px-[16px] py-[2px] font-neo text-t2 text-pink-400 no-underline ${
              order ? '' : 'invisible'
            }`}>
            {order}/{orderLength}
          </mark>
          <Header>{title}</Header>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="mb-5 flex w-full justify-between p-3">
          <CircleButton type="<" onClick={onBackClicked} />
          <CircleButton type=">" onClick={onNextClicked} disabled={disabled && step === 'letter'} />
        </footer>
      </main>
    </GradientContainer>
  );
};

export default Wrapper;
