import { useStepStore } from '@/hooks/make';
import { CameraControls, Center, Environment } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import CakeModel from './Cake';
import LetteringModel from './Lettering';
import SideCream from './SideCream';
import TopCream from './TopCream';
import Item from './items/Item';

const { DEG2RAD } = THREE.MathUtils;

const MakeCanvas = ({ isComplete }: { isComplete?: boolean }) => {
  const { store, step } = useStepStore<CustomCake>();

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
    if (!isComplete) {
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

      <group scale={isComplete ? 1.3 : 1}>
        <Center>
          <CakeModel cakeColor={store.sheet.color} isComplete={isComplete} />
        </Center>

        <group position={[0, isComplete ? -1.25 : 0, 0]}>
          {store.cream_top.cream !== 'none' && <TopCream {...store.cream_top} />}
          {store.cream_side.cream !== 'none' && <SideCream {...store.cream_side} />}
          {store.more.item.map((item) => (
            <Item key={item} item={item} />
          ))}
          {store.lettering.value && <LetteringModel {...store.lettering} />}
        </group>
      </group>
    </>
  );
};

export default MakeCanvas;
