import { CUSTOM_STEP } from '@/lib/constant';
import { isObject } from '@/lib/utils';
import { notFound, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { startTransition, useCallback, useLayoutEffect, useMemo } from 'react';

import { useStepStore } from '@app/(pages)/make/_lib';

import { usePopup } from '@lib/provider/PopupProvider';

export const useStep = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { step: store, dispatch, reset } = useStepStore();

  const step = useMemo(
    () => (searchParams ? (searchParams.get('step') as keyof CustomCake) : null),
    [searchParams],
  ); // 현재 step
  const stepData = useMemo(() => (step ? CUSTOM_STEP[step] : null), [step]); // 현재 step data
  const order = useMemo(() => Object.keys(CUSTOM_STEP).findIndex((key) => key === step), [step]);

  // make 페이지에서 step을 찾을 수 없을때
  useLayoutEffect(() => {
    const params = searchParams?.get('step');

    if (!pathname?.includes('/make') || pathname === '/make/complete') {
      return;
    }

    const steps = Object.keys(CUSTOM_STEP);

    if (!params || !steps.includes(params)) {
      notFound();
    }
  }, [pathname, router, searchParams]);

  const onResetCake = useCallback(() => {
    reset();
  }, [reset]);

  const onStoreUpdate = useCallback(
    (value: Record<string, unknown> | string) => {
      if (!store || !step) {
        return;
      }

      const prevValue = store[step as keyof typeof store];
      let newItem = isObject(prevValue) && isObject(value) ? { ...prevValue, ...value } : value;

      if ((step as CakeKey) === 'more') {
        const prev = (store as CustomCake).more.item;
        const cur = (value as { item: CakeItem }).item;

        newItem = { item: prev.includes(cur) ? prev.filter((v) => v !== cur) : [...prev, cur] };
      }

      startTransition(() => dispatch((prev) => ({ ...prev, [step]: newItem })));
    },
    [dispatch, step, store],
  );

  return {
    step,
    stepData,
    order,
    store,
    onResetCake,
    onStoreUpdate,
  };
};

export const useBlock = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const popup = usePopup();
  const step = useStepStore();

  const isFirst = useMemo(() => searchParams?.get('step') === 'sheet', [searchParams]);

  const onBackClicked = useCallback(() => {
    if (isFirst) {
      popup.show({
        title: '케이크 만들기를 그만하시겠어요?',
        content: '페이지에서 나가면 그동안의 작업은 저장되지 않아요.\n정말 그만하시겠어요?',
        onConfirm() {
          router.back();
          step.reset();
        },
      });
      return;
    }

    router.back();
  }, [isFirst, popup, router, step]);

  return { onBackClicked };
};
