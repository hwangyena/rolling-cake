'use client';

import Navigation from '@/components/common/Navigation';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="bg-grid-pattern w-full h-full bg-contain">
      <Navigation />
      {children}
    </main>
  );
}
