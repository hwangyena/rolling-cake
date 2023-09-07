import { PropsWithChildren, memo } from 'react';

const GradientContainer = ({
  type,
  children,
}: PropsWithChildren<{
  type: 'green-circle';
}>) => {
  if (type === 'green-circle') {
    return <div className="fixed w-full h-full green-circle-gradient">{children}</div>;
  }

  return <div>{children}</div>;
};

export default memo(GradientContainer);
