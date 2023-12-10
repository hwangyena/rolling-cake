import { getCakeBg } from '@/lib/utils';
import { Center, Text3D } from '@react-three/drei';
import { memo, useCallback, useEffect, useState } from 'react';
import * as THREE from 'three';

const LetteringModel = ({ color, font, value, theme }: Lettering & { theme?: CakeTheme }) => {
  const [material, setMaterial] = useState<THREE.MeshStandardMaterial>();

  useEffect(() => {
    const fontColor = new THREE.MeshStandardMaterial({
      color: getCakeBg(color, true, theme),
      roughness: 0.5,
      side: 2,
    });

    setMaterial(fontColor);
  }, [color, theme]);

  const getFontParams = useCallback(() => {
    if (theme) {
      switch (theme) {
        case 'harrypotter':
          return { position: [0, 1.4, 1.05], scale: 1.3 };
        case 'soju':
          return { position: [0.35, 1.05, 0.35], scale: 1.8, 'rotation-y': -5.6 };
        case 'princess':
          return { position: [0, 1.7, 0], scale: 1.4 };
      }
    }

    return { position: [0, 1.9, 0.7] };
  }, [theme]);

  return (
    <Center
      onCentered={() => {}}
      {...(getFontParams() as unknown as THREE.Group<THREE.Object3DEventMap>)}>
      <Text3D
        rotation-x={-1.6}
        material={material}
        font={`/fonts/${font}.json`}
        size={0.3}
        height={0.01}
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
