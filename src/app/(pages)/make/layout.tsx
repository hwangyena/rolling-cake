import { Metadata } from 'next';

import GradientContainer from '@components/GradientContainer';

import { StepProvider, StepValidationProvider } from './_lib';

export const metadata: Metadata = {
  title: '롤링케이크 만들기',
  description: '친구에게 롤링케이크를 선물해주세요',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StepProvider>
      <StepValidationProvider>
        <GradientContainer type="greenCircle">
          <main className="relative flex h-full w-full flex-col">{children}</main>
        </GradientContainer>
      </StepValidationProvider>
    </StepProvider>
  );
}
