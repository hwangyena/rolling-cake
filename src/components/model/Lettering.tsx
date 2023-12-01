import { getCakeBg } from '@/lib/utils';
import { Center, Text3D } from '@react-three/drei';
import { memo, useEffect, useState } from 'react';
import * as THREE from 'three';

const LetteringModel = ({ color, font, value }: Lettering) => {
  const [material, setMaterial] = useState<THREE.MeshStandardMaterial>();

  useEffect(() => {
    const fontColor = new THREE.MeshStandardMaterial({
      color: getCakeBg(color),
      roughness: 0.5,
      side: 2,
    });

    setMaterial(fontColor);
  }, [color]);

  return (
    <Center position={[0, 1.9, 0.7]} onCentered={() => {}}>
      <Text3D
        rotation-x={-1.6}
        material={material}
        font={`/fonts/${font}.json`}
        size={0.3}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.01}
        bevelOffset={0}
        bevelSegments={5}>
        {value}
      </Text3D>
    </Center>
  );
};

export default memo(LetteringModel);
