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
        className={`header-shadow absolute left-[0.18rem] top-[0.17rem] whitespace-nowrap font-neo text-[1.38rem] text-effect_t`}
        style={{ '--shadow': shadowColor || '#000' } as CSSProperties}
        data-content={children}>
        {children}
      </span>
      <h1
        className={`header whitespace-nowrap font-neo text-effect_t font-normal`}
        data-content={children}>
        {children}
      </h1>
    </div>
  );
};

export default memo(Header);
