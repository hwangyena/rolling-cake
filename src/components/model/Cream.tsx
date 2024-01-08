import * as THREE from 'three';

import { getCakeBg } from '@/lib/utils';
import { useGLTF } from '@react-three/drei';
import { MeshProps } from '@react-three/fiber';

type Props = { cream: CakeCream; color: Color; optionalColor?: 'princess' } & MeshProps;

const Cream = ({ cream, color, optionalColor, ...meshProps }: Props) => {
  const { nodes, materials } = useGLTF(`/models/cream-${cream}-draco.glb`) as GLTFRes;

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
        material={
          new THREE.MeshStandardMaterial({
            color: optionalColor ? '#ffe6ff' : getCakeBg(color),
            roughness: 0.5,
            side: 2,
          })
        }
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
  return (
    <group
      position={[-6.774, 28.995, -34.284]}
      rotation={[Math.PI / 2, 0, -0.456]}
      scale={51.665}
      {...meshProps}>
      <mesh
        geometry={nodes.cream_1.geometry}
        material={
          new THREE.MeshStandardMaterial({
            color: getCakeBg(color),
            roughness: 0.5,
            side: 2,
          })
        }
      />
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

export default Cream;
