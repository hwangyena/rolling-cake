'use client';

import { useBlock, useStep } from '@/lib/hooks/make';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

import { useStepValidation } from '@app/(pages)/make/[userId]/_provider';

import { CUSTOM_STEP } from '@lib/constant';

import CircleButton from '../common/CircleButton';
import Header from '../common/Header';

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
  const params = useParams<{ userId: string }>();
  const validation = useStepValidation();
  const { onBackClicked } = useBlock();
  const { step, stepData } = useStep();

  const isNextDisabled = useMemo(
    () => !validation.isValid && step === 'letter',
    [step, validation.isValid],
  );
  const onNextClicked = useCallback(() => {
    if (stepData?.next === 'complete') {
      router.push(`/make/${params?.userId}/complete`);
      return;
    }

    router.push(`/make/${params?.userId}?step=${stepData?.next}`);
  }, [stepData?.next, router, params]);

  return (
    <footer className="mb-5 flex w-full justify-between p-3">
      <CircleButton type="<" onClick={onBackClicked} />
      <CircleButton type=">" onClick={onNextClicked} disabled={isNextDisabled} />
    </footer>
  );
};
