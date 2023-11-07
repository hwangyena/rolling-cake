import { PropsWithChildren } from 'react';
import { Canvas as CanvasWrapper } from '@react-three/fiber';

export default function Canvas({ children }: PropsWithChildren) {
  return <CanvasWrapper>{children}</CanvasWrapper>;
}
