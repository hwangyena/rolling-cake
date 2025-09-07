import { getCakeBg } from '@/lib/utils';
import { useGLTF } from '@react-three/drei';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

import { createGradientTexture } from './utils';

const CakeModel = ({ cakeColor, hasStand }: { cakeColor: ExpandColor; hasStand?: boolean }) => {
  const { nodes } = useGLTF('/models/cake.glb') as GLTFRes;

  const [material, setMaterial] = useState<THREE.MeshStandardMaterial>();
  const cakeRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    // 기본 색상
    let color = new THREE.MeshStandardMaterial({
      color: getCakeBg(cakeColor),
      roughness: 0.5,
      side: 2,
    });

    // gradient 색상
    if (cakeColor.includes('gradient')) {
      color = createGradientTexture(cakeColor);
    }

    setMaterial(color);
  }, [cakeColor]);

  const standMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#c7c7c7',
      }),
    [],
  );

  return (
    <group scale={0.9}>
      <mesh
        ref={cakeRef}
        geometry={nodes.Cylinder.geometry}
        material={material}
        position={[0, 2.598, 0]}
        scale={[1.977, 0.733, 2.003]}
      />
      {hasStand && (
        <mesh
          geometry={nodes.stand.geometry}
          material={standMaterial}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.269}
        />
      )}
    </group>
  );
};

useGLTF.preload('/models/cake.glb');

export default memo(CakeModel);
