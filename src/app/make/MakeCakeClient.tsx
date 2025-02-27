'use client';

import { useAtom } from 'jotai';
import { notFound } from 'next/navigation';

import Step from '@components/common/Step';
import StepCommon from '@components/make/StepCommon';
import StepLetter from '@components/make/StepLetter';

import { useStep } from '@lib/hooks/make';
import { userIdStore } from '@lib/store';

export default function MakeCakeClient() {
  const { step } = useStep();
  const [userId] = useAtom(userIdStore);

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
