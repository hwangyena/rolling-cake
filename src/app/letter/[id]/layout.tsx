import GradientContainer from '@/components/GradientContainer';
import Navigation from '@/components/common/Navigation';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <GradientContainer type="grid" className="flex flex-col">
      <Navigation show={['<']} />
      {children}
    </GradientContainer>
  );
}
