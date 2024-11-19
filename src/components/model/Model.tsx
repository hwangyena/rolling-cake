import { Canvas, CanvasProps } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import { forwardRef, memo } from 'react';
import * as THREE from 'three';

import LoadingCanvas from '../style/LoadingCanvas';

const CustomCake = dynamic(() => import('./CustomCake'));
const ThemeCake = dynamic(() => import('./ThemeCake'));

type Props = {
  show: 'custom' | 'theme';
  cake: Cake;
  isRotate?: boolean;
  isStand?: boolean;
  fixPosition?: boolean;
  canvasProps?: Omit<CanvasProps, 'children'>;
};

const Model = forwardRef<HTMLCanvasElement, Props>(function Model(
  { cake, show, isRotate, isStand, fixPosition, canvasProps },
  ref,
) {
  return (
    <>
      <Canvas
        ref={ref}
        shadows
        camera={{
          fov: window.innerWidth > 480 ? 50 : 40,
          near: 0.1,
          far: 100,
          position: new THREE.Vector3(0, 3, 9),
        }}
        frameloop={isRotate ? undefined : 'demand'}
        style={{ zIndex: 10 }}
        {...canvasProps}>
        {/* TODO: Suspense가 필요할지? */}
        {show === 'custom' && (
          <CustomCake cake={cake as CustomCake} {...{ isRotate, isStand, fixPosition }} />
        )}
        {show === 'theme' && (
          <ThemeCake isRotate={isRotate} fixPosition={fixPosition} cake={cake as ThemeCake} />
        )}
      </Canvas>

      <LoadingCanvas />
    </>
  );
});

export default memo(Model);
