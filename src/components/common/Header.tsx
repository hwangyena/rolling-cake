import { CSSProperties, PropsWithChildren, memo } from 'react';

type Props = {
  className?: string;
  shadowColor?: string;
  style?: CSSProperties;
};

const Header = ({ children, className, shadowColor, style }: PropsWithChildren<Props>) => {
  return (
    <div className={`font-display-block relative ${className ?? ''}`} style={style}>
      <span
        className="header-shadow"
        style={{ '--shadow': shadowColor || '#000' } as CSSProperties}
        data-content={children}>
        {children}
      </span>
      <h1 className="header" data-content={children}>
        {children}
      </h1>
    </div>
  );
};

export default memo(Header);
