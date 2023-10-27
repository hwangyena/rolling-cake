import { HTMLAttributes, PropsWithChildren } from 'react';

export default function ShadowCard({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={`rounded-xl border-2 border-black bg-white shadow-card ${className}`}
      {...props}>
      {children}
    </div>
  );
}
