'use client';

import { useBlock, useStep } from '@/lib/hooks/make';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

import { useStepValidation } from '@app/(pages)/make/[userId]/_provider';

import CircleButton from '@components/common/CircleButton';

const NextStep = () => {
  const router = useRouter();
  const params = useParams<{ userId: string }>();
  const validation = useStepValidation();
  const { onBackClicked: handleBackClicked } = useBlock();
  const { step, stepData } = useStep();

  const hidePrevButton = useMemo(() => step === 'sheet', [step]);
  const isNextDisabled = !validation.isValid && step === 'letter';
  const handleNextClicked = useCallback(() => {
    if (stepData?.next === 'complete') {
      router.push(`/make/${params?.userId}/complete`);
      return;
    }

    router.push(`/make/${params?.userId}?step=${stepData?.next}`);
  }, [stepData?.next, router, params]);
  return (
    <nav
      className={`pt-[38px] px-[20px] flex w-full absolute ${hidePrevButton ? 'justify-end' : 'justify-between'}`}>
      {!hidePrevButton && <CircleButton type="<" onClick={handleBackClicked} />}
      <CircleButton type=">" onClick={handleNextClicked} disabled={isNextDisabled} />
    </nav>
  );
};

export default NextStep;
