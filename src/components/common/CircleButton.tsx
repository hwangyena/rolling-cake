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
  onClick?: () => void;
};

const CircleButton = ({ type, disabled, onClick }: Props) => {
  return (
    <button className={styles['circle-button']} disabled={disabled} onClick={onClick}>
      <img src={`/icons/${icon[type]}`} alt="" className={type === '>' ? 'rotate-180' : ''} />
    </button>
  );
};

export default memo(CircleButton);
