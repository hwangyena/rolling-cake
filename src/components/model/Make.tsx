import { useStepStore } from '@/hooks/make';
import { CameraControls, Center, Environment } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import CakeModel from './Cake';
import SideCream from './SideCream';
import TopCream from './TopCream';
import Item from './items/Item';
import LetteringModel from './Lettering';

const { DEG2RAD } = THREE.MathUtils;

const MakeCanvas = () => {
  const { store, step } = useStepStore<CustomCake>();

  const cameraControlsRef = useRef<CameraControls | null>(null);

  useEffect(() => {
    if (!step || !cameraControlsRef.current) {
      return;
    }

    switch (step) {
      case 'cream_top':
      case 'letter':
        cameraControlsRef.current?.rotate(0, -120 * DEG2RAD, true);
        break;
      case 'more':
        cameraControlsRef.current?.rotate(0, -20 * DEG2RAD, true);
        break;
      case 'lettering':
        cameraControlsRef.current?.rotate(0, -100 * DEG2RAD, true);
        break;
      default:
        cameraControlsRef.current?.reset(true);
    }
  }, [step]);

  return (
    <>
      <CameraControls ref={cameraControlsRef} />
      <Environment preset="dawn" />

      <Center>
        <CakeModel cakeColor={store.sheet.color} />
      </Center>

      {store.cream_top.cream !== 'none' && <TopCream {...store.cream_top} />}
      {store.cream_side.cream !== 'none' && <SideCream {...store.cream_side} />}
      {store.more.item.map((item) => (
        <Item key={item} item={item} />
      ))}
      {/* {store.lettering.value && <LetteringModel {...store.lettering} />} */}
      <LetteringModel {...store.lettering} />
    </>
  );
};

export default MakeCanvas;
