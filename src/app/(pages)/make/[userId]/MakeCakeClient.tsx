'use client';

import { notFound } from 'next/navigation';

import Step from '@components/common/Step';
import StepCommon from '@components/make/StepCommon';
import StepLetter from '@components/make/StepLetter';

import { useStep } from '@lib/hooks/make';

export default function MakeCakeClient({ userId }: { userId: string }) {
  const { step } = useStep();

  if (!userId || !step) {
    return notFound();
  }

  return (
    <>
      <Step show={step === 'letter'}>
        <StepLetter />
      </Step>

      {/* Custom Cake */}
      <Step show={step !== 'letter'}>
        <StepCommon />
      </Step>
    </>
  );
}
