'use client';

import ClientOnly from '@/components/ClientOnly';
import Step from '@/components/common/Step';
import StepCommon from '@/components/make/StepCommon';
import StepComplete from '@/components/make/StepComplete';
import StepLetter from '@/components/make/StepLetter';
import StepShape from '@/components/make/StepShape';
import Wrapper from '@/components/make/Wrapper';
import { useEntireStep, useStep } from '@/hooks/make';
import { CAKE_SHAPE, CAKE_THEME, SELECT_ITEM } from '@/lib/constant';
import { getLocalStorage } from '@/lib/store';
import { useMemo } from 'react';

export default function Page() {
  const { current, onEntireStepChanged, step } = useEntireStep();
  const { store, onUpdate } = useStep();

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
            initialSlide={store.get('shape') === 'theme' ? 1 : 0}
            options={CAKE_SHAPE}
            onShapeChanged={(value) => onEntireStepChanged(value as 'CUSTOM' | 'THEME')}
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
            initialSlide={CAKE_THEME.findIndex((v) => v.value === store.get('theme'))}
            options={CAKE_THEME}
            onShapeChanged={(value) => onUpdate(value)}
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
