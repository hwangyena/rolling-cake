import { cn, getCakeBg } from '@/lib/utils';
import Image from 'next/image';
import { CSSProperties, PropsWithChildren, memo } from 'react';

type Props = {
  type: Item;
  item: string;
  selected: boolean;
  disabled?: boolean;
};

const CheckButton = ({ type, selected, item, disabled }: Props) => {
  if (item === 'none') {
    return (
      <Item {...{ selected }}>
        <None />
      </Item>
    );
  }

  if (type === 'color' || type === 'expandColor') {
    return <Item style={{ background: getCakeBg(item as Color, false) }} selected={selected} />;
  }

  if (type === 'cream' || type === 'item' || type === 'font') {
    return (
      <Item {...{ selected, disabled }} style={{ padding: '4px' }}>
        <div className="relative h-full w-full">
          <Image src={`/images/${type}/${item}.png`} alt="cream" fill sizes="100%,100%" />
        </div>
      </Item>
    );
  }

  return <Item style={{ background: item }} selected={selected} />;
};

const Item = ({
  children,
  selected,
  disabled,
  style,
}: PropsWithChildren<{ selected: boolean; style?: CSSProperties; disabled?: boolean }>) => {
  return (
    <div className={`relative h-full w-full ${disabled ? '' : 'cursor-pointer'}`}>
      <div
        className={cn(
          'relative h-full w-full',
          { 'check-selected': selected },
          { 'check-disabled': disabled },
        )}
        style={style}>
        {children}
      </div>
      {!disabled && <div className="check" />}
    </div>
  );
};

const None = () => {
  return <div className="check-x" />;
};

export default memo(CheckButton);
