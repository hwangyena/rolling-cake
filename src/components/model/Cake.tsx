import { getCakeBg } from '@/lib/utils';
import { useGLTF } from '@react-three/drei';
import { useEffect, useMemo } from 'react';
import * as THREE from 'three';

import { createGradientTexture } from './utils';

const CakeModel = ({ cakeColor, hasStand }: { cakeColor: ExpandColor; hasStand?: boolean }) => {
  const { nodes } = useGLTF('/models/cake.glb') as GLTFRes;

  // useMemo로 material 생성을 메모이제이션하여 cakeColor가 변경될 때만 재생성
  const material = useMemo(() => {
    // gradient 색상
    if (cakeColor.includes('gradient')) {
      return createGradientTexture(cakeColor);
    }
    // 기본 색상
    return new THREE.MeshStandardMaterial({
      color: getCakeBg(cakeColor),
      roughness: 0.5,
      side: THREE.DoubleSide,
    });
  }, [cakeColor]);

  // material cleanup: 컴포넌트가 언마운트되거나 cakeColor가 변경될 때 이전 material을 dispose
  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

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

export default CakeModel;
