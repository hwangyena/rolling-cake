import { getCakeBg } from '@/lib/utils';
import { useGLTF } from '@react-three/drei';
import { MeshProps } from '@react-three/fiber';
import { useEffect, useMemo } from 'react';
import * as THREE from 'three';

type Props = { cream: CakeCream; color: Color; optionalColor?: 'princess' } & MeshProps;

const Cream = ({ cream, color, optionalColor, ...meshProps }: Props) => {
  const { nodes, materials } = useGLTF(`/models/cream-${cream}.glb`) as GLTFRes;

  // Material을 useMemo로 캐싱
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: optionalColor ? '#ffe6ff' : getCakeBg(color),
        roughness: 0.5,
        side: THREE.DoubleSide,
      }),
    [color, optionalColor],
  );

  // Material cleanup
  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

  if (cream === 'chocolate') {
    return (
      <>
        <CreamInstance />
        <ChocolateCream {...{ nodes, materials, color }} {...meshProps} />
      </>
    );
  }

  return (
    <>
      <CreamInstance />
      <mesh
        geometry={nodes.cream.geometry}
        material={material}
        rotation={nodes.cream.rotation}
        scale={cream === 'heart' ? [3.69, 5.84, 4.55] : nodes.cream.scale}
        {...meshProps}
      />
    </>
  );
};

const ChocolateCream = ({
  nodes,
  materials,
  color,
  ...meshProps
}: GLTFRes & MeshProps & { color: Color }) => {
  // Material을 useMemo로 캐싱
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: getCakeBg(color),
        roughness: 0.5,
        side: THREE.DoubleSide,
      }),
    [color],
  );

  // Material cleanup
  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

  return (
    <group
      position={[-6.774, 28.995, -34.284]}
      rotation={[Math.PI / 2, 0, -0.456]}
      scale={51.665}
      {...meshProps}>
      <mesh geometry={nodes.cream_1.geometry} material={material} />
      <mesh geometry={nodes.cream_2.geometry} material={materials['Material.037']} />
    </group>
  );
};

const CreamInstance = () => {
  return (
    <>
      <boxGeometry />
      <meshStandardMaterial />
    </>
  );
};

useGLTF.preload('/models/cream-basic.glb');
useGLTF.preload('/models/cream-chocolate.glb');
useGLTF.preload('/models/cream-crown.glb');
useGLTF.preload('/models/cream-heart.glb');
useGLTF.preload('/models/cream-screw.glb');

export default Cream;
