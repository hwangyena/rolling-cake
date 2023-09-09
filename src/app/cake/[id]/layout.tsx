import Navigation from '@/components/common/Navigation';
import { PropsWithChildren } from 'react';
import styles from '@/styles/page.module.css';
import GradientContainer from '@/components/GradientContainer';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <GradientContainer type="grid">
      <Navigation />
      <div className={styles.cake}>{children}</div>
    </GradientContainer>
  );
}
