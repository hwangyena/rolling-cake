import { CUSTOM_STEP, STEP, STEP_CUSTOM_INIT, STEP_THEME_INIT, THEME_STEP } from '@/lib/constant';
import { popupAtom, stepAtom } from '@/lib/store';
import { md } from '@/lib/utils';
import { useAtom, useSetAtom } from 'jotai';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const useEntireStep = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [, dispatch] = useAtom(stepAtom);
  const [step, setStep] = useState(CUSTOM_STEP);

  useEffect(() => {
    dispatch(new Map(Object.entries(STEP_CUSTOM_INIT)));
  }, [dispatch]);

  useEffect(() => {
    const params = searchParams?.get('step') as keyof typeof STEP;

    if (!params) {
      router.replace('/make?step=shape');
    }
  }, [router, searchParams]);

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
    (value: 'CUSTOM' | 'THEME') => {
      const entireStep = value === 'CUSTOM' ? CUSTOM_STEP : THEME_STEP;
      const step = value === 'CUSTOM' ? STEP_CUSTOM_INIT : STEP_THEME_INIT;

      setStep(entireStep);
      dispatch(
        md(new Map(Object.entries(step)), [['shape', value === 'CUSTOM' ? 'custom' : 'theme']])
      );
    },
    [dispatch]
  );

  return { step, current, onEntireStepChanged };
};

export const useStep = () => {
  const [store, dispatch] = useAtom(stepAtom);
  const searchParams = useSearchParams();

  const step = useMemo(() => searchParams?.get('step') as keyof typeof STEP, [searchParams]);

  const onUpdate = useCallback(
    (data: Record<string, string | boolean> | string) => {
      if (step === 'more') {
        const prev = (store.get('more') as Record<'item', string[]>).item;
        const cur = (data as Record<'item', string>).item;
        const newItem = prev.includes(cur) ? prev.filter((v) => v !== cur) : [...prev, cur];

        dispatch(md(store, [[step, { item: newItem }]]));
      } else {
        dispatch(md(store, [[step, data]]));
      }
    },
    [dispatch, step, store]
  );

  return { store, onUpdate, step };
};

export const useBlock = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const dispatch = useSetAtom(popupAtom);
  const isShape = useMemo(() => searchParams?.get('step') === 'shape', [searchParams]);

  const onBackClicked = useCallback(() => {
    if (isShape) {
      dispatch({
        title: '케이크 만들기를 그만하시겠어요?',
        content: '페이지에서 나가면 그동안의 작업은 저장되지 않아요. 정말 그만하시겠어요?',
        onConfirm() {
          router.back(); // FIXME: redirect to cake page
          dispatch(null);
        },
      });
      return;
    }

    router.back();
  }, [dispatch, isShape, router]);

  return { onBackClicked };
};
