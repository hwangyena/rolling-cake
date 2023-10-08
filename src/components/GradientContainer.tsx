import { PropsWithChildren, memo } from 'react';

const GradientContainer = ({
  type,
  children,
  className = '',
}: PropsWithChildren<{
  type: 'green-circle' | 'pink-green' | 'grid' | 'grid-with-gradient';
  className?: string;
}>) => {
  if (type === 'green-circle') {
    return <div className={`w-full h-full green-circle-gradient ${className}`}>{children}</div>;
  }

  if (type === 'pink-green') {
    return (
      <div className={`pink-green-gradient w-full h-full flex flex-col ${className}`}>
        {children}
      </div>
    );
  }

  if (type === 'grid') {
    return (
      <div className={`bg-grid-pattern w-full h-full bg-contain ${className}`}>{children}</div>
    );
  }

  if (type === 'grid-with-gradient') {
    return (
      <div
        className={`pink-green-gradient-with-grid w-full h-full bg-contain flex flex-col ${className}`}>
        {children}
      </div>
    );
  }

  return <div>{children}</div>;
};

export default memo(GradientContainer);
