import { PropsWithChildren, memo } from 'react';

const GradientContainer = ({
  type,
  children,
}: PropsWithChildren<{
  type: 'green-circle' | 'grid' | 'grid-with-gradient';
}>) => {
  if (type === 'green-circle') {
    return <div className="fixed w-full h-full green-circle-gradient">{children}</div>;
  }

  if (type === 'grid') {
    return <div className="bg-grid-pattern w-full h-full bg-contain">{children}</div>;
  }

  if (type === 'grid-with-gradient') {
    return (
      <div className="green-pink-gradient-with-grid w-full h-full bg-contain flex flex-col">
        {children}
      </div>
    );
  }

  return <div>{children}</div>;
};

export default memo(GradientContainer);
