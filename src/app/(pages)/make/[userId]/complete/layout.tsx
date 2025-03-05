import React from 'react';

import GradientContainer from '@components/GradientContainer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GradientContainer type="pinkGreen" className="items-center justify-center overflow-hidden">
      {children}
    </GradientContainer>
  );
}
