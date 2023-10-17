import Image from 'next/image';

type Props = {
  className?: string;
  priority?: boolean;
  onClick?: () => void;
};

/** TODO: 3D object */
const Cake = ({ className, priority, onClick }: Props) => {
  return (
    <div className={`relative ${className}`} onClick={onClick}>
      <Image fill src="/images/cake.png" alt="cake" priority={priority} />
    </div>
  );
};

export default Cake;
