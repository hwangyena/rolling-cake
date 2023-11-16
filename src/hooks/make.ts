import { CUSTOM_STEP, CUSTOM_STEP_STORE, THEME_STEP, THEME_STEP_STORE } from '@/lib/constant';
import { makeAtom, popupAtom } from '@/lib/store';
import { isObject } from '@/lib/utils';
import { useAtom, useSetAtom } from 'jotai';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo } from 'react';

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

  const isTheme = useMemo(() => Object.hasOwn(store, 'theme'), [store]);
  const entireStepLength = useMemo((): number => Object.keys(store).length - 1, [store]);

  const step = useMemo(() => {
    const params = searchParams ? searchParams.get('step') : null;

    return params as CakeStepKey;
  }, [searchParams]);

  const info = useMemo((): (StepDisplay & { order: number }) | null => {
    if (!step) {
      return null;
    }

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

  return { info, step, isTheme, entireStepLength, onEntireStepChanged };
};

export const useStepStore = <T extends CakeStep>() => {
  const { step } = useEntireStep();

  const [store, dispatch] = useAtom(makeAtom);

  const onStoreUpdate = useCallback(
    (value: Record<string, unknown> | string) => {
      const prevValue = store[step as keyof typeof store];
      let newItem = isObject(prevValue) && isObject(value) ? { ...prevValue, ...value } : value;

      if ((step as CakeStepKey) === 'more') {
        const prev = (store as CustomCake).more.item;
        const cur = (value as { item: CakeItem }).item;

        newItem = { item: prev.includes(cur) ? prev.filter((v) => v !== cur) : [...prev, cur] };
      }

      dispatch((prev) => ({ ...prev, [step]: newItem }));
    },
    [dispatch, step, store],
  );

  return { store: store as T, step: step as keyof T, onStoreUpdate };
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
