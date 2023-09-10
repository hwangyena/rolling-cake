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
    return <Item style={{ background: item }} selected={selected} />;
  }

  if (type === 'cream') {
    <Item {...{ selected }}>
      <Image src={`/images/step/${item}.png`} alt="cream" fill />
    </Item>;
  }

  return <Item style={{ background: item }} selected={selected} />;
};

const Item = ({
  children,
  selected,
  style,
}: PropsWithChildren<{ selected: boolean; style?: CSSProperties }>) => {
  return (
    <div
      className={`relative w-full h-full ${selected ? styles['step-box-selected'] : ''}`}
      style={style}>
      {children}
      <span className={styles.check} />
    </div>
  );
};

const None = () => {
  return <div className={styles.x} />;
};

export default memo(CheckButton);
