import Image from 'next/image';

type Props = {
  className?: string;
};

/** TODO: 3D object */
const Cake = ({ className }: Props) => {
  return (
    <div className={`relative ${className}`}>
      <Image fill src="/images/cake.png" alt="cake" />
    </div>
  );
};

export default Cake;
