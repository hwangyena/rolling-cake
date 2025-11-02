import { Center, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import { memo, useMemo, useRef } from 'react';
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

  // 자주 변경되지 않는 값들을 메모이제이션
  const groupScale = useMemo(() => (isStand ? 1 : 1.4), [isStand]);
  const groupPosition = useMemo<[number, number, number]>(
    () => [0, isStand ? 0 : -1.25, 0],
    [isStand],
  );

  const hasTopCream = useMemo(() => cake.cream_top.cream !== 'none', [cake.cream_top.cream]);
  const showTopCream = useMemo(() => hasTopCream, [hasTopCream]);
  const showSideCream = useMemo(() => cake.cream_side.cream !== 'none', [cake.cream_side.cream]);
  const showLettering = useMemo(() => !!cake.lettering.value, [cake.lettering.value]);

  useFrame((_, delta) => {
    if (cakeRef.current && isRotate) {
      cakeRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <>
      <Camera fixPosition={fixPosition} />
      <Environment preset="dawn" />
      <group scale={groupScale} ref={cakeRef}>
        <Center>
          <CakeModel cakeColor={cake.sheet.expandColor} hasStand={isStand} />
        </Center>

        <group position={groupPosition}>
          <TopCream visible={showTopCream} {...cake.cream_top} />
          <SideCream visible={showSideCream} {...cake.cream_side} />
          <Items items={cake.more.item} hasTopCream={hasTopCream} />
          <LetteringModel visible={showLettering} {...cake.lettering} />
        </group>
      </group>
    </>
  );
};

export default memo(CustomCake);
