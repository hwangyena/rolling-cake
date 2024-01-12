import { cn } from '@/lib/utils';
import { memo } from 'react';

type Props = {
  unlock?: boolean;
  small?: boolean;
  onClick?: () => void;
};

const Lock = ({ unlock = false, small, onClick }: Props) => {
  return (
    <div className="relative mt-1 flex flex-col items-center justify-center" onClick={onClick}>
      <div
        className={cn(
          'absolute bottom-[90%] h-[10px] w-[12px] rounded-r-[10px] rounded-t-[50px] border-[5px] border-b-0 border-l-[2px] border-r-[2px] border-t-[2px] border-gray-600 transition-all	',
          { 'origin-left rotate-[-30deg] border-green-dark': unlock },
          { 'h-[6px] w-[8px] lg:h-[8px] lg:w-[10px]': small },
        )}
      />
      <div
        className={cn(
          'z-10 flex aspect-square w-[15px] items-center justify-center rounded-[3px] bg-gray-600 transition-all',
          { 'bg-green-dark': unlock },
          { 'w-[10.5px] lg:w-[14px]': small },
        )}
      />
    </div>
  );
};

export default memo(Lock);
