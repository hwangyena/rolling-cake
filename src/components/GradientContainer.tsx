import { PropsWithChildren } from 'react';

const typeClass = {
  greenCircle: 'green-circle-gradient h-full-screen w-full',
  pinkGreen: 'pink-green-gradient h-full-screen flex w-full flex-col',
  greenPink: 'green-pink-gradient h-full-screen w-full',
  grid: 'h-full-screen w-full bg-grid-pattern bg-contain',
  gridWithGradient: 'pink-green-gradient-with-grid h-full-screen flex w-full flex-col bg-contain',
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
