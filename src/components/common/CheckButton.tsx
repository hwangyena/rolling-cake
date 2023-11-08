import { getCakeBg } from '@/lib/utils';
import styles from '@/styles/component.module.css';
import Image from 'next/image';
import { CSSProperties, PropsWithChildren, memo } from 'react';

type Props = {
  type: 'cream' | 'color' | 'item' | 'font';
  item: string;
  selected: boolean;
};

const CheckButton = ({ type, selected, item }: Props) => {
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
      <Item {...{ selected }} style={{ padding: '4px' }}>
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
  style,
}: PropsWithChildren<{ selected: boolean; style?: CSSProperties }>) => {
  return (
    <div className={`relative h-full w-full `}>
      <div
        className={`relative h-full w-full ${selected ? styles['step-box-selected'] : ''}`}
        style={style}>
        {children}
      </div>
      <span className={styles.check} />
    </div>
  );
};

const None = () => {
  return <div className={styles.x} />;
};

export default memo(CheckButton);
