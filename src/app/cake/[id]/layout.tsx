import Navigation from '@/components/common/Navigation';
import { PropsWithChildren } from 'react';
import GradientContainer from '@/components/GradientContainer';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <GradientContainer type="grid-with-gradient">
      <Navigation show={['<', 'home', 'upload']} />
      {children}
    </GradientContainer>
  );
}
