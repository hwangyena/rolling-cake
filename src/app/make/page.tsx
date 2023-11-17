'use client';

import ClientOnly from '@/components/ClientOnly';
import Step from '@/components/common/Step';
import StepCommon from '@/components/make/StepCommon';
import StepLetter from '@/components/make/StepLetter';
import StepLettering from '@/components/make/StepLettering';
import StepShape from '@/components/make/StepShape';
import StepTheme from '@/components/make/StepTheme';
import Wrapper from '@/components/make/Wrapper';
import { useEntireStep } from '@/hooks/make';
import { getLocalStorage } from '@/lib/store';
import { useMemo } from 'react';

export default function Page() {
  const { info, step, entireStepLength } = useEntireStep();

  const targetUserId = useMemo(() => getLocalStorage<string>('rolling-cake:userId'), []);

  if (!info || !targetUserId) {
    // TODO: error page
    return null;
  }

  return (
    <ClientOnly>
      <Wrapper
        title={info.title}
        next={info.next}
        order={info.order}
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
        <Step show={step === 'lettering'}>
          <StepLettering itemSelect={info.select} />
        </Step>

        {/* Custom Cake */}
        <Step show={['sheet', 'cream_top', 'cream_side', 'more'].includes(step)}>
          <StepCommon itemSelect={info.select} />
        </Step>
      </Wrapper>
    </ClientOnly>
  );
}
