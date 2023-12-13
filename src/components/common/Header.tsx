import styles from '@/styles/component.module.css';
import { CSSProperties, PropsWithChildren, memo } from 'react';

type Props = {
  className?: string;
  shadowColor?: string;
  style?: CSSProperties;
};

const Header = ({ children, className, shadowColor, style }: PropsWithChildren<Props>) => {
  return (
    <div className={`relative ${className ?? ''}`} style={style}>
      <span
        className={styles.shadow}
        style={{ '--shadow': shadowColor || '#000' } as CSSProperties}
        data-content={children}>
        {children}
      </span>
      <h1 className={styles.header} data-content={children}>
        {children}
      </h1>
    </div>
  );
};

export default memo(Header);
