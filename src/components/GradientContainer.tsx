import { PropsWithChildren, memo } from 'react';

const GradientContainer = ({
  type,
  children,
  className = '',
}: PropsWithChildren<{
  type: 'green-circle' | 'pink-green' | 'green-pink' | 'grid' | 'grid-with-gradient';
  className?: string;
}>) => {
  if (type === 'green-circle') {
    return <div className={`green-circle-gradient h-full w-full ${className}`}>{children}</div>;
  }

  if (type === 'pink-green') {
    return (
      <div className={`pink-green-gradient flex h-full w-full flex-col ${className}`}>
        {children}
      </div>
    );
  }

  if (type === 'green-pink') {
    return <div className={`green-pink-gradient h-full w-full ${className}`}>{children}</div>;
  }

  if (type === 'grid') {
    return (
      <div className={`h-full w-full bg-grid-pattern bg-contain ${className}`}>{children}</div>
    );
  }

  if (type === 'grid-with-gradient') {
    return (
      <div
        className={`pink-green-gradient-with-grid flex h-full w-full flex-col bg-contain ${className}`}>
        {children}
      </div>
    );
  }

  return <div>{children}</div>;
};

export default memo(GradientContainer);
