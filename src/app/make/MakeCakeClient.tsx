'use client';

import { useAtom } from 'jotai';
import { notFound } from 'next/navigation';

import Step from '@components/common/Step';
import StepCommon from '@components/make/StepCommon';
import StepLetter from '@components/make/StepLetter';

import { useStep } from '@lib/hooks/make';
import { userIdAtom } from '@lib/store';

export default function MakeCakeClient() {
  const { step } = useStep();
  const [userId] = useAtom(userIdAtom);

  if (!userId || !step) {
    return notFound();
  }

  return (
    <>
      <Step show={step === 'letter'}>
        <StepLetter />
      </Step>

      {/* Custom Cake */}
      <Step show={['sheet', 'cream_top', 'cream_side', 'more', 'lettering'].includes(step)}>
        <StepCommon />
      </Step>
    </>
  );
}
