'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import type { ReactNode } from 'react';

const StepValidationContext = createContext<{
  isValid: boolean;
  validate(): void;
  invalidate(): void;
} | null>(null);

export function StepValidationProvider({ children }: { children: ReactNode }) {
  const [isValid, setIsValid] = useState(false);
  const validate = useCallback(() => setIsValid(true), []);
  const invalidate = useCallback(() => setIsValid(false), []);

  return (
    <StepValidationContext.Provider value={{ isValid, invalidate, validate }}>
      {children}
    </StepValidationContext.Provider>
  );
}

export function useStepValidation() {
  const context = useContext(StepValidationContext);
  if (!context) {
    throw new Error('useStepValidation must be used within a StepValidationProvider');
  }
  return context;
}
