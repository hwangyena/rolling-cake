'use client';

import Step from '@/components/common/Step';
import StepCommon from '@/components/make/StepCommon';
import StepComplete from '@/components/make/StepComplete';
import StepLetter from '@/components/make/StepLetter';
import StepLettering from '@/components/make/StepLettering';
import StepShape from '@/components/make/StepShape';
import Wrapper from '@/components/make/Wrapper';
import { SELECT_ITEM, STEP } from '@/lib/constant';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [step, setStep] = useState<'CUSTOM' | 'THEME'>('CUSTOM');

  const current = useMemo(() => {
    const params = searchParams.get('step') as keyof typeof STEP;

    if (!STEP[params]) {
      return null;
    }

    return {
      value: params,
      ...STEP[params],
    };
  }, [searchParams]);

  // TODO: in SSR
  useEffect(() => {
    if (!searchParams.get('step')) {
      router.replace('/make?step=shape');
    }
  }, [router, searchParams]);

  const onShapeChanged = useCallback((index: number) => {
    setStep(index === 0 ? 'CUSTOM' : 'THEME');
  }, []);

  if (!current) {
    return null;
  }

  if (current.value === 'shape') {
    return (
      <Wrapper title={current.title} nextStep={step === 'CUSTOM' ? 'sheet' : 'theme'}>
        <StepShape
          options={['직접 만들기', '테마를 선택해 만들기']}
          onShapeChanged={onShapeChanged}
        />
      </Wrapper>
    );
  }

  if (current.value === 'complete') {
    return <StepComplete />;
  }

  return (
    <Wrapper title={current.title} nextStep={current.nextPath}>
      {/* Custom Cake */}
      <Step show={['sheet', 'cream_top', 'cream_side', 'more'].includes(current.value)}>
        <StepCommon itemSelect={current.select as (keyof typeof SELECT_ITEM)[]} />
      </Step>

      {/* THEME Cake */}
      <Step show={current.value === 'theme'}>
        <StepShape
          options={['소주 케이크', '해리포터 케이크', '공주 케이크']}
          onShapeChanged={() => null}
        />
      </Step>

      {/* Common */}
      <Step show={current.value === 'lettering'}>
        <StepLettering />
      </Step>
      <Step show={current.value === 'letter'}>
        <StepLetter />
      </Step>
    </Wrapper>
  );
}
