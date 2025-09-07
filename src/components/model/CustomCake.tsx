import { Center, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import { memo, useRef } from 'react';
import { ColorManagement } from 'three';

import CakeModel from './Cake';
import Camera from './Camera';

const TopCream = dynamic(() => import('./TopCream'));
const SideCream = dynamic(() => import('./SideCream'));
const Items = dynamic(() => import('./Items'));
const LetteringModel = dynamic(() => import('./Lettering'));

ColorManagement.enabled = true;

type Props = {
  cake: CustomCake;
  isRotate?: boolean;
  isStand?: boolean;
  fixPosition?: boolean;
};

const CustomCake = ({ cake, isRotate, isStand, fixPosition }: Props) => {
  const cakeRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (cakeRef.current && isRotate) {
      cakeRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <>
      <Camera fixPosition={fixPosition} />
      <Environment preset="dawn" />
      <group scale={isStand ? 1 : 1.4} ref={cakeRef}>
        <Center>
          <CakeModel cakeColor={cake.sheet.expandColor} hasStand={isStand} />
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
