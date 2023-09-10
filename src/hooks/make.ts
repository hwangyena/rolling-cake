import { CUSTOM_STEP, STEP, THEME_STEP } from '@/lib/constant';
import { stepAtom } from '@/lib/store';
import { md } from '@/lib/utils';
import { useAtom } from 'jotai';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const useEntireStep = () => {
  const searchParams = useSearchParams();
  const [, dispatch] = useAtom(stepAtom);

  const [step, setStep] = useState(CUSTOM_STEP);

  useEffect(() => {
    const stepData = new Map();
    stepData.set('shape', 'custom');

    dispatch(stepData);
  }, [dispatch]);

  const current = useMemo(() => {
    const params = searchParams?.get('step') as keyof typeof STEP;

    if (!STEP[params]) {
      return null;
    }

    if (params === 'shape') {
      return {
        ...STEP[params],
        value: 'shape',
        order: 0,
        nextPath: step.includes('sheet') ? 'sheet' : 'theme',
      };
    }

    return {
      ...STEP[params],
      value: params,
      order: step.findIndex((v) => v === params) + 1,
    };
  }, [searchParams, step]);

  const onEntireStepChanged = useCallback(
    (index: number) => {
      setStep(index === 0 ? CUSTOM_STEP : THEME_STEP);
      dispatch(md([['shape', index === 0 ? 'custom' : 'theme']]));
    },
    [dispatch]
  );

  return { step, current, onEntireStepChanged };
};
