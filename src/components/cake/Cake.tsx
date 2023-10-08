import Image from 'next/image';

type Props = {
  className?: string;
  priority?: boolean;
};

/** TODO: 3D object */
const Cake = ({ className, priority }: Props) => {
  return (
    <div className={`relative ${className}`}>
      <Image fill src="/images/cake.png" alt="cake" priority={priority} />
    </div>
  );
};

export default Cake;
