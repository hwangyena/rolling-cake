import { CUSTOM_STEP, CUSTOM_STEP_STORE, THEME_STEP, THEME_STEP_STORE } from '@/lib/constant';
import { makeAtom, popupAtom } from '@/lib/store';
import { isObject } from '@/lib/utils';
import { useAtom, useSetAtom } from 'jotai';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { startTransition, useCallback, useEffect, useMemo } from 'react';

export const useEntireStep = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [store, dispatch] = useAtom(makeAtom);

  useEffect(() => {
    const params = searchParams?.get('step');

    if (pathname === '/make/complete') {
      return;
    }

    if (!params) {
      router.replace('/make?step=shape');
    }
  }, [pathname, router, searchParams]);

  const step = useMemo(() => searchParams?.get('step') as CakeStepKey, [searchParams]);
  const isTheme = useMemo(() => (store ? Object.hasOwn(store, 'theme') : false), [store]);
  const entireStepLength = useMemo(() => (store ? Object.keys(store).length - 1 : 0), [store]);

  const wrapperInfo = useMemo((): (StepDisplay & { order: number }) | null => {
    const stepForScreen = isTheme ? THEME_STEP : CUSTOM_STEP;
    const order = Object.keys(store).findIndex((v) => v === step);

    return { ...stepForScreen[step as keyof typeof store], order };
  }, [isTheme, step, store]);

  const onEntireStepChanged = useCallback(
    (value: 'CUSTOM' | 'THEME') => {
      const isCustom = value === 'CUSTOM';

      dispatch(isCustom ? CUSTOM_STEP_STORE : THEME_STEP_STORE);
    },
    [dispatch],
  );

  return { wrapperInfo, step, isTheme, entireStepLength, onEntireStepChanged };
};

export const useStepStore = <T extends CakeStep>() => {
  const { step } = useEntireStep();

  const [store, dispatch] = useAtom(makeAtom);

  const onResetMakeAtom = useCallback(() => {
    dispatch(CUSTOM_STEP_STORE);
  }, [dispatch]);

  const onStoreUpdate = useCallback(
    (value: Record<string, unknown> | string) => {
      if (!store) {
        return;
      }

      const prevValue = store[step as keyof typeof store];
      let newItem = isObject(prevValue) && isObject(value) ? { ...prevValue, ...value } : value;

      if ((step as CakeStepKey) === 'more') {
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

  const isShape = useMemo(() => searchParams?.get('step') === 'shape', [searchParams]);

  const onBackClicked = useCallback(() => {
    if (isShape) {
      dispatch({
        title: '케이크 만들기를 그만하시겠어요?',
        content: '페이지에서 나가면 그동안의 작업은 저장되지 않아요. 정말 그만하시겠어요?',
        onConfirm() {
          router.back();
          dispatchMakeAtom(CUSTOM_STEP_STORE);
          dispatch(null);
        },
      });
      return;
    }

    router.back();
  }, [dispatch, dispatchMakeAtom, isShape, router]);

  return { onBackClicked };
};
