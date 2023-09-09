import { PropsWithChildren, memo } from 'react';

const GradientContainer = ({
  type,
  children,
}: PropsWithChildren<{
  type: 'green-circle' | 'grid';
}>) => {
  if (type === 'green-circle') {
    return <div className="fixed w-full h-full green-circle-gradient">{children}</div>;
  }

  if (type === 'grid') {
    return <div className="bg-grid-pattern w-full h-full bg-contain">{children}</div>;
  }

  return <div>{children}</div>;
};

export default memo(GradientContainer);
