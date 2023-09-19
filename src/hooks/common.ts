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
