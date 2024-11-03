import { popupAtom } from '@/lib/store';
import { useSetAtom } from 'jotai';
import { useCallback, useEffect, useRef, useState } from 'react';

type EventType = '';

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

export const useDebounce = <T>(value: T, delay = 1000) => {
  const [debounced, setDebounced] = useState(value);

  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      setDebounced((p) => {
        if (p === value) {
          return p;
        }

        return value;
      });
      timer.current = undefined;
    }, delay);
  }, [delay, value]);

  return debounced;
};
