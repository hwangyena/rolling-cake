import Image from 'next/image';
import { memo } from 'react';

import Button from './Button';

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
    <Button
      id={type}
      className="relative grid h-[34px] w-[34px] place-items-center rounded-full border border-black bg-white drop-shadow-black_light hover:bg-gray-200 disabled:opacity-40"
      disabled={disabled}
      onClick={onClick}>
      <Image
        src={`/icons/${icon[type]}`}
        alt={type}
        width={24}
        height={24}
        priority
        className={type === '>' ? 'rotate-180' : ''}
      />
    </Button>
  );
};

export default memo(CircleButton);
