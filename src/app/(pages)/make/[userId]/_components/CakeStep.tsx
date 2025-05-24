'use client';

import { notFound } from 'next/navigation';
import { match } from 'ts-pattern';

import StepCommon from '@components/make/StepCommon';
import StepLetter from '@components/make/StepLetter';

import { useStep } from '@lib/hooks/make';

export default function CakeStep({ userId }: { userId: string }) {
  const { step } = useStep();

  if (!userId || !step) {
    return notFound();
  }

  return (
    <>
      {match(step)
        .with('letter', () => <StepLetter />)
        .otherwise(() => (
          <StepCommon />
        ))}
    </>
  );
}
