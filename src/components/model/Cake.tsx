import { getCakeBg } from '@/lib/utils';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const CakeModel = ({ cakeColor }: { cakeColor: Color }) => {
  const { nodes } = useGLTF('/models/cake.glb') as GLTFRes;

  const [material, setMaterial] = useState<THREE.MeshStandardMaterial>();
  const cakeRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const color = new THREE.MeshStandardMaterial({
      color: getCakeBg(cakeColor),
      roughness: 0.5,
      side: 2,
    });

    setMaterial(color);
  }, [cakeColor]);

  return (
    <group rotation-z={0.13} rotation-x={-0.02} position={[0, 0.2, -0.5]}>
      <mesh
        ref={cakeRef}
        geometry={nodes.cake.geometry}
        material={material}
        position={[-2.319, 5.8, -30.746]}
        rotation={[-0.052, -0.477, -0.151]}
        scale={[2.183, 2.027, 2.185]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stand.geometry}
        material={
          new THREE.MeshStandardMaterial({
            color: '#c7c7c7',
          })
        }
        position={[-2.292, 6.058, -30.713]}
        rotation={[1.589, -0.134, 0.482]}
        scale={0.269}
      />
    </group>
  );
};

useGLTF.preload('/models/cake.glb');

export default CakeModel;
