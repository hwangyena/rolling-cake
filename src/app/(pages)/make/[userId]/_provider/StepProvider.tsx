'use client';

import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';

import { CUSTOM_STEP_STORE } from '@lib/constant';

type Dispatch<T> = (setState: (prev: T) => T) => void;

const sessionKey = 'rolling-cake-step';

const StepContext = createContext<{
  step: CustomCake;
  dispatch: Dispatch<CustomCake>;
  reset: () => void;
} | null>(null);

export function StepProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<CustomCake>(CUSTOM_STEP_STORE);

  const dispatch: Dispatch<CustomCake> = useCallback(
    (setState) => {
      const newStep = setState(step);
      setStep(newStep);
      sessionStorage.setItem(sessionKey, JSON.stringify(newStep));
    },
    [step],
  );
  const reset = useCallback(() => {
    setStep(CUSTOM_STEP_STORE);
  }, []);

  useEffect(() => {
    const stored = sessionStorage.getItem(sessionKey);
    if (stored) {
      setStep(JSON.parse(stored));
    }
  }, []);

  return <StepContext.Provider value={{ step, dispatch, reset }}>{children}</StepContext.Provider>;
}

export function useStepStore() {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStep must be used within a StepProvider');
  }
  return context;
}
