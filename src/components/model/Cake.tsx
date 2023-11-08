import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';

const CakeModel = ({ cakeColor }: { cakeColor: string }) => {
  const { nodes, materials } = useGLTF('/models/cake.glb') as GLTFRes;

  const [material, setMaterial] = useState<THREE.MeshStandardMaterial>();

  useEffect(() => {
    const color = new THREE.MeshStandardMaterial({
      color: '#ff8c99',
      // color: parseInt('0x' + cakeColor.replace(/#/, '')),
      normalScale: new THREE.Vector2(1, -1),
      roughness: 0.5,
      side: 2,
    });

    setMaterial(color);
  }, [cakeColor]);

  return (
    <group position={[3, -8, 10]} rotation-z={0.13}>
      <mesh
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
        material={materials.wire_229166215}
        position={[-2.292, 6.058, -30.713]}
        rotation={[1.589, -0.134, 0.482]}
        scale={0.269}
      />
    </group>
  );
};

useGLTF.preload('/models/cake.glb');

export default CakeModel;
