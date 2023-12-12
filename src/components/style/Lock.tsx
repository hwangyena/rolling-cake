import { cn } from '@/lib/utils';
import { memo } from 'react';

const Lock = ({ unlock = false, onClick }: { unlock?: boolean; onClick?: () => void }) => {
  return (
    <div className="relative mt-1 flex flex-col items-center justify-center" onClick={onClick}>
      <div
        className={cn(
          'absolute bottom-[90%] h-[7px] w-[9px] rounded-r-[10px] rounded-t-[50px] border-[5px] border-b-0 border-l-[2px] border-r-[2px] border-t-[2px] border-gray-600 transition-all	',
          { 'origin-left rotate-[-20deg] border-green-dark': unlock },
        )}
      />
      <div
        className={cn(
          'z-10 flex h-[12px] w-[12px] items-center justify-center rounded-[3px] bg-gray-600 transition-all	',
          { 'bg-green-dark': unlock },
        )}
      />
    </div>
  );
};

export default memo(Lock);
