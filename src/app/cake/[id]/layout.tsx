import GradientContainer from '@/components/GradientContainer';
import Loading from '@/components/common/Loading';
import { PropsWithChildren, Suspense } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <GradientContainer type="gridWithGradient">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </GradientContainer>
  );
}
