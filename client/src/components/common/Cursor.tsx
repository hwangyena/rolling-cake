import Image from 'next/image';

const Cursor = ({ className }: { className?: string }) => {
  return (
    <aside className={`absolute ${className}`}>
      <Image src={'/icons/cursor.svg'} alt="cursor" width={50} height={50} />
    </aside>
  );
};

export default Cursor;
