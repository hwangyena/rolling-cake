'use client';

import { useAtom } from 'jotai';
import { notFound } from 'next/navigation';

import Step from '@components/common/Step';
import StepCommon from '@components/make/StepCommon';
import StepLetter from '@components/make/StepLetter';
import StepShape from '@components/make/StepShape';
import StepTheme from '@components/make/StepTheme';
import Wrapper from '@components/make/Wrapper';

import { useEntireStep } from '@lib/hooks/make';
import { userIdAtom } from '@lib/store';

// TODO: layout 컴포넌트로 뺄 수 없는지?
export default function MakeClient() {
  const { wrapperInfo, step, entireStepLength } = useEntireStep();
  const [userId] = useAtom(userIdAtom);

  if (!wrapperInfo || !userId) {
    return notFound();
  }

  return (
    <Wrapper
      title={wrapperInfo.title}
      next={wrapperInfo.next}
      order={wrapperInfo.order}
      orderLength={entireStepLength}>
      <Step show={step === 'shape'}>
        <StepShape />
      </Step>
      <Step show={step === 'theme'}>
        <StepTheme />
      </Step>
      <Step show={step === 'letter'}>
        <StepLetter />
      </Step>

      {/* Custom Cake */}
      <Step show={['sheet', 'cream_top', 'cream_side', 'more', 'lettering'].includes(step)}>
        <StepCommon itemSelect={wrapperInfo.select} />
      </Step>
    </Wrapper>
  );
}
