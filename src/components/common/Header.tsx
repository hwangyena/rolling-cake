import { PropsWithChildren, memo } from 'react';
import styles from '@/styles/component.module.css';

const Header = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={`relative ${className}`}>
      <span className={styles.shadow} data-content={children}>
        {children}
      </span>
      <h1 className={styles.header} data-content={children}>
        {children}
      </h1>
    </div>
  );
};

export default memo(Header);