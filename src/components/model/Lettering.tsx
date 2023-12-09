import { getCakeBg } from '@/lib/utils';
import { Center, Text3D } from '@react-three/drei';
import { useControls } from 'leva';
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

  const { scale, x, y, z, rotatex, rotatey, rotatez } = useControls({
    scale: { value: 1.8, min: -10, max: 10, step: 0.1 },
    x: { value: 0.35, min: -10, max: 10, step: 0.1 },
    y: { value: 0.9, min: -10, max: 10, step: 0.1 },
    z: { value: 0.35, min: -10, max: 10, step: 0.1 },
    rotatex: { value: 0, min: -10, max: 10, step: 0.1 },
    rotatey: { value: -5.6, min: -10, max: 10, step: 0.1 },
    rotatez: { value: 0, min: -10, max: 10, step: 0.1 },
  });

  const getFontParams = useCallback(() => {
    if (theme) {
      switch (theme) {
        case 'harrypotter':
          return { position: [0, 1.3, 1.05], scale: 1.3 };
        case 'soju':
          return { position: [0.35, 1.05, 0.35], scale: 1.8, 'rotation-y': -5.6 };
      }
    }

    return { position: [0, 1.9, 0.7] };
  }, [theme]);

  return (
    <Center
      onCentered={() => {}}
      // scale={scale}
      // position={[x, y, z]}
      // rotation={[rotatex, rotatey, rotatez]}
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
