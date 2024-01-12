import { CameraControls, Center, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import { memo, useEffect, useRef } from 'react';
import * as THREE from 'three';
import CakeModel from './Cake';

const TopCream = dynamic(() => import('./TopCream'));
const SideCream = dynamic(() => import('./SideCream'));
const Items = dynamic(() => import('./items/Items'));
const LetteringModel = dynamic(() => import('./Lettering'));

THREE.ColorManagement.enabled = true;

const { DEG2RAD } = THREE.MathUtils;

type Props = {
  cake: CustomCake;
  step?: keyof CustomCake;
  isRotate?: boolean;
  hasStand?: boolean;
  fixPosition?: boolean;
};

const CustomCake = ({ cake, step, isRotate, hasStand, fixPosition }: Props) => {
  const cameraControlsRef = useRef<CameraControls | null>(null);
  const cakeRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!step || !cameraControlsRef.current) {
      return;
    }

    switch (step) {
      case 'cream_top':
      case 'lettering':
        cameraControlsRef.current.rotateTo(0, -120 * DEG2RAD, true);
        break;
      case 'more':
        cameraControlsRef.current.rotateTo(0, 20 * DEG2RAD, true);
        break;
      default:
        cameraControlsRef.current?.reset(true);
    }
  }, [step]);

  useFrame((_, delta) => {
    if (cakeRef.current && isRotate) {
      cakeRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <>
      <CameraControls
        ref={cameraControlsRef}
        enabled={!fixPosition}
        minPolarAngle={0}
        maxPolarAngle={Math.PI * 0.5}
        minDistance={Math.PI * 1.7}
        maxDistance={10}
      />
      <Environment preset="dawn" />

      <group scale={hasStand ? 1 : 1.4} ref={cakeRef}>
        <Center>
          <CakeModel cakeColor={cake.sheet.color} hasStand={hasStand} />
        </Center>

        <group position={[0, hasStand ? 0 : -1.25, 0]}>
          <TopCream visible={cake.cream_top.cream !== 'none'} {...cake.cream_top} />
          <SideCream visible={cake.cream_side.cream !== 'none'} {...cake.cream_side} />
          {cake.more.item.length > 0 && (
            <Items items={cake.more.item} hasTopCream={cake.cream_top.cream !== 'none'} />
          )}
          <LetteringModel visible={!!cake.lettering.value} {...cake.lettering} />
        </group>
      </group>
    </>
  );
};

export default memo(CustomCake);
