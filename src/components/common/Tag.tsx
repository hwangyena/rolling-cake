import { PropsWithChildren, memo } from 'react';
import styles from '@/styles/component.module.css';

const Tag = ({ children }: PropsWithChildren) => {
  return <div className={styles.tag}>{children}</div>;
};

export default memo(Tag);
