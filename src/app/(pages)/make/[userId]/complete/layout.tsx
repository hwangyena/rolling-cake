import React from 'react';

import GradientContainer from '@components/GradientContainer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GradientContainer
      type="pinkBlue"
      className="flex w-full flex-col items-center justify-center overflow-hidden">
      {children}
    </GradientContainer>
  );
}
