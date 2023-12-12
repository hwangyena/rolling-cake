import { getCakeBg } from '@/lib/utils';
import styles from '@/styles/component.module.css';
import Image from 'next/image';
import { CSSProperties, PropsWithChildren, memo } from 'react';

type Props = {
  type: 'cream' | 'color' | 'item' | 'font';
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

  if (type === 'color') {
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
        className={`relative h-full w-full ${selected ? styles['step-box-selected'] : ''} ${
          disabled ? styles['step-box-disabled'] : ''
        }`}
        style={style}>
        {children}
      </div>
      {!disabled && <span className={styles.check} />}
    </div>
  );
};

const None = () => {
  return <div className={styles.x} />;
};

export default memo(CheckButton);
