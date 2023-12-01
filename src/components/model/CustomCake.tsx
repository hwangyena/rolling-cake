import { CameraControls, Center, Environment } from '@react-three/drei';
import { memo, useEffect, useRef } from 'react';
import * as THREE from 'three';
import CakeModel from './Cake';
import LetteringModel from './Lettering';
import SideCream from './SideCream';
import TopCream from './TopCream';
import Item from './items/Item';

const { DEG2RAD } = THREE.MathUtils;

const CustomCake = ({
  cake,
  step,
  isRotate,
}: {
  cake: CustomCake;
  step?: keyof CustomCake;
  isRotate?: boolean;
}) => {
  const cameraControlsRef = useRef<CameraControls | null>(null);

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

  useEffect(() => {
    if (!isRotate) {
      return;
    }

    const timer = setInterval(() => {
      cameraControlsRef.current?.rotate(0.05 * DEG2RAD, 0, false);
    }, 0);

    return () => clearInterval(timer);
  });

  return (
    <>
      <CameraControls ref={cameraControlsRef} />
      <Environment preset="dawn" />

      <group scale={isRotate ? 1.3 : 1}>
        <Center>
          <CakeModel cakeColor={cake.sheet.color} hasStand={isRotate} />
        </Center>

        <group position={[0, isRotate ? -1.25 : 0, 0]}>
          {cake.cream_top.cream !== 'none' && <TopCream {...cake.cream_top} />}
          {cake.cream_side.cream !== 'none' && <SideCream {...cake.cream_side} />}
          {cake.more.item.map((item) => (
            <Item key={item} item={item} />
          ))}
          {cake.lettering.value && <LetteringModel {...cake.lettering} />}
        </group>
      </group>
    </>
  );
};

export default memo(CustomCake);
