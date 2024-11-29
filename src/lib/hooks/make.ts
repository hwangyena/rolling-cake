import { CUSTOM_STEP, CUSTOM_STEP_STORE } from '@/lib/constant';
import { makeAtom, popupAtom } from '@/lib/store';
import { isObject } from '@/lib/utils';
import { useAtom, useSetAtom } from 'jotai';
import { notFound, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { startTransition, useCallback, useLayoutEffect, useMemo } from 'react';

export const useStep = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const step = useMemo(
    () => (searchParams ? (searchParams.get('step') as keyof CustomCake) : null),
    [searchParams],
  );
  const stepData = useMemo(() => (step ? CUSTOM_STEP[step] : null), [step]);
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

  return {
    step,
    stepData,
    order,
  };
};

// FIXME: 위 hook이랑 합치기
export const useStepStore = <T extends Cake>() => {
  const { step } = useStep();

  const [store, dispatch] = useAtom(makeAtom);

  const onResetMakeAtom = useCallback(() => {
    dispatch(CUSTOM_STEP_STORE);
  }, [dispatch]);

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

  return { store: store as T, step: step as keyof T, onResetMakeAtom, onStoreUpdate };
};

export const useBlock = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const dispatch = useSetAtom(popupAtom);
  const dispatchMakeAtom = useSetAtom(makeAtom);

  const isFirst = useMemo(() => searchParams?.get('step') === 'sheet', [searchParams]);

  const onBackClicked = useCallback(() => {
    if (isFirst) {
      dispatch({
        title: '케이크 만들기를 그만하시겠어요?',
        content: '페이지에서 나가면 그동안의 작업은 저장되지 않아요.\n정말 그만하시겠어요?',
        onConfirm() {
          router.back();
          dispatchMakeAtom(CUSTOM_STEP_STORE);
          dispatch(null);
        },
      });
      return;
    }

    router.back();
  }, [dispatch, dispatchMakeAtom, isFirst, router]);

  return { onBackClicked };
};
