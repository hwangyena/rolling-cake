import * as THREE from 'three';

import { Canvas, CanvasProps } from '@react-three/fiber';
import { Suspense, forwardRef, memo } from 'react';
import LoadingCanvas from '../style/LoadingCanvas';
import dynamic from 'next/dynamic';

const CustomCake = dynamic(() => import('./CustomCake'), { ssr: false });
const ThemeCake = dynamic(() => import('./ThemeCake'), { ssr: false });

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
          fov: 50,
          near: 0.1,
          far: 100,
          position: new THREE.Vector3(0, 3, 8.5),
        }}
        frameloop={isRotate ? undefined : 'demand'}
        style={{ zIndex: 10 }}
        {...canvasProps}>
        <Suspense fallback={null}>
          {show === 'custom' && (
            <CustomCake
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
