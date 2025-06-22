import { CameraControls, Center, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import { memo, useEffect, useRef } from 'react';
import { ColorManagement, MathUtils } from 'three';

import { useCurrentStep } from '@lib/hooks/make';

import CakeModel from './Cake';

const TopCream = dynamic(() => import('./TopCream'));
const SideCream = dynamic(() => import('./SideCream'));
const Items = dynamic(() => import('./items/Items'));
const LetteringModel = dynamic(() => import('./Lettering'));

ColorManagement.enabled = true;

const { DEG2RAD } = MathUtils;

type Props = {
  cake: CustomCake;
  isRotate?: boolean;
  isStand?: boolean;
  fixPosition?: boolean;
};

const CustomCake = ({ cake, isRotate, isStand, fixPosition }: Props) => {
  const step = useCurrentStep();

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
        cameraControlsRef.current.reset(true);
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
        mouseButtons={{
          left: 0, // 0 = NONE
          middle: 0,
          right: 0,
          wheel: 0,
        }}
        touches={{
          one: 0, // one-finger touch 드래그 막기
          two: 0, // two-finger pan 막기
          three: 0, // three-finger 등 기타 터치도 막기
        }}
      />
      <Environment preset="dawn" />

      <group scale={isStand ? 1 : 1.4} ref={cakeRef}>
        <Center>
          <CakeModel cakeColor={cake.sheet.color} hasStand={isStand} />
        </Center>

        <group position={[0, isStand ? 0 : -1.25, 0]}>
          <TopCream visible={cake.cream_top.cream !== 'none'} {...cake.cream_top} />
          <SideCream visible={cake.cream_side.cream !== 'none'} {...cake.cream_side} />
          <Items items={cake.more.item} hasTopCream={cake.cream_top.cream !== 'none'} />
          {/* {cake.more.item.length > 0 && (
            <Items items={cake.more.item} hasTopCream={cake.cream_top.cream !== 'none'} />
          )} */}
          <LetteringModel visible={!!cake.lettering.value} {...cake.lettering} />
        </group>
      </group>
    </>
  );
};

export default memo(CustomCake);
