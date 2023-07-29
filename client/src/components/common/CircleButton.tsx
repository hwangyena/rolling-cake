import styles from '@/styles/component.module.css';
import { memo } from 'react';

const icon = {
  '<': 'arrow.svg',
  '>': 'arrow.svg',
  upload: 'upload.svg',
  home: 'home.svg',
};

type Props = {
  type: '<' | '>' | 'upload' | 'home';
  disabled?: boolean;
};

const CircleButton = ({ type, disabled }: Props) => {
  return (
    <button className={styles['circle-button']} disabled={disabled}>
      <img src={`/icons/${icon[type]}`} alt="" />
    </button>
  );
};

export default memo(CircleButton);
