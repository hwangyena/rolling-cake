'use client';

import ClientOnly from '@/components/ClientOnly';
import Step from '@/components/common/Step';
import StepCommon from '@/components/make/StepCommon';
import StepComplete from '@/components/make/StepComplete';
import StepLetter from '@/components/make/StepLetter';
import StepShape from '@/components/make/StepShape';
import Wrapper from '@/components/make/Wrapper';
import { useEntireStep } from '@/hooks/make';
import { SELECT_ITEM } from '@/lib/constant';
import { getLocalStorage } from '@/lib/store';
import { useMemo } from 'react';

export default function Page() {
  const { current, onEntireStepChanged, step } = useEntireStep();
  const targetUserId = useMemo(() => getLocalStorage<string>('rolling-cake:userId'), []);

  if (!current || !targetUserId) {
    // TODO: error page
    return null;
  }

  return (
    <ClientOnly>
      <Wrapper
        title={current.title}
        nextStep={current.nextPath}
        order={current.order}
        orderLength={step.length}>
        {/* First Step */}
        <Step show={current.value === 'shape'}>
          <StepShape
            step="shape"
            options={['직접 만들기', '테마를 선택해 만들기']}
            onShapeChanged={onEntireStepChanged}
          />
        </Step>

        {/* Custom Cake */}
        <Step
          show={['sheet', 'cream_top', 'cream_side', 'more', 'lettering'].includes(current.value)}>
          <StepCommon itemSelect={current.select as (keyof typeof SELECT_ITEM)[]} />
        </Step>

        {/* THEME Cake */}
        <Step show={current.value === 'theme'}>
          <StepShape
            step="theme"
            options={['소주 케이크', '해리포터 케이크', '공주 케이크']}
            onShapeChanged={() => null}
          />
        </Step>

        {/* Common Step */}
        <Step show={current.value === 'letter'}>
          <StepLetter />
        </Step>
        <Step show={current.value === 'complete'}>
          <StepComplete />
        </Step>
      </Wrapper>
    </ClientOnly>
  );
}
