import { popupAtom } from '@/lib/store';
import { useSetAtom } from 'jotai';
import { useCallback, useEffect } from 'react';

type EventType = 'make:next-step';

const target = new EventTarget();

export const useEvent = (key: EventType, callback?: () => void) => {
  useEffect(() => {
    target.addEventListener(key, callback ?? null);
    return () => target.removeEventListener(key, callback ?? null);
  }, [callback, key]);

  const trigger = useCallback(() => {
    target.dispatchEvent(new Event(key));
  }, [key]);

  return { trigger };
};

export const useErrorPopup = (callback?: () => void) => {
  const popupDispatch = useSetAtom(popupAtom);

  const showError = () => {
    popupDispatch({
      title: '앗, 오류가 생겼어요.',
      content: '일시적인 오류일 수 있어요. 잠시 후 다시 시도해주세요.',
      onConfirm: () => {
        callback && callback();
        // router.replace('/make?step=shape');
        popupDispatch(null);
      },
    });
  };

  return { showError };
};
