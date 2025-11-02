import { useCallback, useEffect, useRef, useState } from 'react';

import { usePopup } from '@lib/provider/PopupProvider';

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
  const popup = usePopup();
  const errorCountRef = useRef(0);

  const showError = useCallback(() => {
    errorCountRef.current += 1;

    // 3회 이상 에러 발생 시 다른 팝업 표시
    if (errorCountRef.current >= 3) {
      popup.show({
        title: '계속해서 오류가 발생하고 있어요.',
        content:
          '문의사항이 있을 경우.\nrollingcake@gmail.com로 연락주세요\n빠른 검토 후 답변 드릴게요.',
        onConfirm: () => {
          window.location.href = 'mailto:rollingcake@gmail.com';
          popup.hide();
        },
        onCancel: () => {
          errorCountRef.current = 0; // 카운트 초기화
          popup.hide();
        },
      });
    } else {
      // 3회 미만일 때는 기본 에러 팝업
      popup.show({
        title: '앗, 오류가 생겼어요.',
        content: '일시적인 오류일 수 있어요. 잠시 후 다시 시도해주세요.',
        onConfirm: () => {
          callback && callback();
          popup.hide();
        },
      });
    }
  }, [callback, popup]);

  const resetErrorCount = useCallback(() => {
    errorCountRef.current = 0;
  }, []);

  return { showError, resetErrorCount };
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
