'use client';

import { useBlock, useStep } from '@/lib/hooks/make';
import { stepValidAtom } from '@/lib/store';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import CircleButton from '../common/CircleButton';
import Header from '../common/Header';

import { CUSTOM_STEP } from '@lib/constant';

export const LayoutHeader = () => {
  const { order, stepData } = useStep();

  return (
    <header className="flex flex-col items-center justify-center gap-8 pt-[40px]">
      <mark
        className={`gray-gradient cursor-auto rounded-[20px] border border-black px-[16px] py-[2px] font-neo text-t2 text-pink-400 no-underline ${
          order ? '' : 'invisible'
        }`}>
        {order}/{Object.keys(CUSTOM_STEP).length}
      </mark>
      <Header>{stepData?.title}</Header>
    </header>
  );
};

export const LayoutFooter = () => {
  const router = useRouter();

  // FIXME: disabled 좀 더 가독성 있게
  const [disabled] = useAtom(stepValidAtom);
  const { onBackClicked } = useBlock();
  const { step, stepData } = useStep();

  const onNextClicked = useCallback(() => {
    if (stepData?.next === 'complete') {
      router.push(`/make/complete`);
      return;
    }

    router.push(`/make?step=${stepData?.next}`);
  }, [stepData, router]);

  return (
    <footer className="mb-5 flex w-full justify-between p-3">
      <CircleButton type="<" onClick={onBackClicked} />
      <CircleButton type=">" onClick={onNextClicked} disabled={disabled && step === 'letter'} />
    </footer>
  );
};
