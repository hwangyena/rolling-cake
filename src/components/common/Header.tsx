import { CSSProperties, FC, PropsWithChildren, memo } from 'react';

import { cn } from '@lib/utils';

type Props = {
  className?: string;
  shadowColor?: string;
  style?: CSSProperties;
};

const HeaderStroke: FC<PropsWithChildren<{ showStroke?: boolean }>> = ({
  children,
  showStroke,
}) => {
  return (
    <h1
      aria-hidden="true"
      className={cn(
        { 'header-stroke': showStroke },
        'absolute left-0 top-0 font-neo text-effect_t whitespace-nowrap font-neo text-effect_t',
      )}>
      {children}
    </h1>
  );
};

const Header = ({ children, className, shadowColor, style }: PropsWithChildren<Props>) => {
  return (
    <span className={`font-display-block relative ${className ?? ''}`} style={style}>
      <span
        className={`header-shadow absolute left-[0.16em] top-[0.16em] whitespace-nowrap font-neo text-effect_t`}
        style={{ '--shadow': shadowColor || '#000' } as CSSProperties}
        data-content={children}>
        {children}
      </span>
      <HeaderStroke showStroke>{children}</HeaderStroke>
      <h1 className={'whitespace-nowrap font-neo text-effect_t'} data-content={children}>
        {children}
      </h1>
      <HeaderStroke>{children}</HeaderStroke>
    </span>
  );
};

export default memo(Header);
