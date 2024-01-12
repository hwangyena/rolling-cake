import * as THREE from 'three';

import { Canvas, CanvasProps } from '@react-three/fiber';
import { Suspense, forwardRef, memo } from 'react';
import LoadingCanvas from '../style/LoadingCanvas';
import dynamic from 'next/dynamic';

const CustomCake = dynamic(() => import('./CustomCake'));
const ThemeCake = dynamic(() => import('./ThemeCake'));

type Props = {
  show: 'custom' | 'theme';
  cake: Cake;
  step?: keyof CustomCake;
  isRotate?: boolean;
  isStand?: boolean;
  fixPosition?: boolean;
  canvasProps?: Omit<CanvasProps, 'children'>;
};

const Model = forwardRef<HTMLCanvasElement, Props>(function Model(
  { cake, show, step, isRotate, isStand, fixPosition = false, canvasProps },
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
        // frameloop={isRotate ? undefined : 'demand'}
        style={{ zIndex: 10 }}
        {...canvasProps}>
        <Suspense fallback={null}>
          {show === 'custom' && (
            <CustomCake
              step={step}
              isRotate={isRotate}
              hasStand={isStand}
              fixPosition={fixPosition}
              cake={cake as CustomCake}
            />
          )}
          {show === 'theme' && (
            <ThemeCake isRotate={isRotate} fixPosition={fixPosition} cake={cake as ThemeCake} />
          )}
        </Suspense>
      </Canvas>
      <LoadingCanvas />
    </>
  );
});

export default memo(Model);
