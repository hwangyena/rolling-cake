import { getCakeBg } from '@/lib/utils';
import { Center, Text3D } from '@react-three/drei';
import { Suspense, memo, useCallback, useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';

const LetteringModel = ({ color, font, value, theme }: Lettering & { theme?: CakeTheme }) => {
  const [material, setMaterial] = useState<THREE.MeshStandardMaterial>();

  const letteringValues = useMemo(() => (theme ? [value] : value.split('\n')), [value, theme]);

  useEffect(() => {
    const fontColor = new THREE.MeshStandardMaterial({
      color: getCakeBg(color, true, theme),
      roughness: 0.5,
      side: 2,
    });

    setMaterial(fontColor);
  }, [color, theme]);

  const getFontParams = useCallback(
    (index: number, textSplitLength: number) => {
      if (theme) {
        switch (theme) {
          case 'harrypotter':
            return { position: [-0.1, 0.3, 0.93], scale: 1.4 };
          case 'soju':
            return { position: [0.35, 1.05, 0.35], scale: 1.86, 'rotation-y': 0.8 };
          case 'princess':
            return { position: [-0.1, 0.8, -0.25], scale: 1.3 };
        }
      }

      if (textSplitLength !== 1) {
        return { position: [0, 1.9, 0.7 - 0.5 * (textSplitLength - index - 1)] };
      }

      return { position: [0, 1.9, 0.7] };
    },
    [theme],
  );

  return (
    <Suspense>
      {letteringValues.map((v, i) => (
        <Center
          key={i}
          onCentered={() => {}}
          {...(getFontParams(
            i,
            letteringValues.length,
          ) as unknown as THREE.Group<THREE.Object3DEventMap>)}>
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
            {v}
          </Text3D>
        </Center>
      ))}
    </Suspense>
  );
};

export default memo(LetteringModel);
