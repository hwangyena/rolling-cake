import { PropsWithChildren } from 'react';

const Tag = ({ children }: PropsWithChildren) => {
  return (
    <div className="gray-gradient grid cursor-auto place-items-center rounded-[20px] border border-black px-[16px] py-[9px] text-b3 text-gray-800 ">
      {children}
    </div>
  );
};

export default Tag;
