import { PropsWithChildren } from 'react';

const typeClass = {
  blueCircle: 'blue-circle-gradient h-full-screen w-full',
  greenPink: 'green-pink-gradient h-full-screen w-full',
  pinkBlue: 'blue-pink-gradient h-full-screen w-full',
  pink: 'pink-gradient h-full-screen w-full',
};

const GradientContainer = ({
  type,
  children,
  className = '',
}: PropsWithChildren<{
  type: keyof typeof typeClass;
  className?: string;
}>) => {
  const cn = `${typeClass[type]} ${className}`.trim();

  return <div className={cn}>{children}</div>;
};

export default GradientContainer;
