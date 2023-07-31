'use client';

import Navigation from '@/components/common/Navigation';
import { PropsWithChildren } from 'react';
import styles from '@/styles/main.module.css';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="bg-grid-pattern w-full h-full bg-contain">
      <Navigation />
      <div className={styles.cake}>{children}</div>
    </main>
  );
}
