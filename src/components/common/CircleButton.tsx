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
    <button
      className="drop-shadow-black_light grid h-[34px] w-[34px] place-items-center rounded-full border border-black bg-white hover:bg-gray-200 disabled:opacity-40"
      disabled={disabled}
      onClick={onClick}>
      <img src={`/icons/${icon[type]}`} alt="" className={type === '>' ? 'rotate-180' : ''} />
    </button>
  );
};

export default memo(CircleButton);
