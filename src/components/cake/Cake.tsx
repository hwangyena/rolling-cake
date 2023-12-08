import Image from 'next/image';

type Props = {
  theme?: CakeTheme;
  className?: string;
  priority?: boolean;
  onClick?: () => void;
};

/** TODO: 3D object */
const Cake = ({ className, priority, onClick, theme }: Props) => {
  if (theme) {
    return (
      <div className={`relative ${className}`} onClick={onClick}>
        <Image fill src={`/images/theme/${theme}.png`} alt="cake" priority={priority} />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} onClick={onClick}>
      <Image fill src="/images/cake.png" alt="cake" priority={priority} />
    </div>
  );
};

export default Cake;
