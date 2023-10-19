import Navigation from '@/components/common/Navigation';
import { PropsWithChildren, Suspense } from 'react';
import GradientContainer from '@/components/GradientContainer';
import Loading from '@/components/common/Loading';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <GradientContainer type="grid-with-gradient">
      <Navigation show={['<', 'home', 'upload']} />

      <Suspense fallback={<Loading />}>{children}</Suspense>
    </GradientContainer>
  );
}
