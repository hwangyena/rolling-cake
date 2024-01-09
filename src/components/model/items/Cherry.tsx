import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';

const cherryPosition = [
  [1.5, 0],
  [1.1, 1.1],
  [0.1, 1.5],
  [-1.0, 1.0],
  [1.1, -1.1],
  [0, -1.5],
  [-1, -1.1],
  [-1.4, 0],
];

const CherryModel = ({ hasTopCream, visible }: { hasTopCream: boolean; visible: boolean }) => {
  const { nodes, materials } = useGLTF('/models/items/cherry-draco.glb') as GLTFRes;

  const yPosition = useMemo(() => (hasTopCream ? 2.2 : 1.9), [hasTopCream]);

  return (
    <group visible={visible}>
      {cherryPosition.map(([x, z], i) => (
        <group key={i} position={[x, yPosition, z]} scale={0.13}>
          <group name="Scene">
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cherry001.geometry}
              material={materials['ball.003']}
              position={[0, 2, 0]}
              rotation={[1.542, 0.077, 1.753]}
              scale={1.101}
            />
          </group>
        </group>
      ))}
    </group>
  );
};

useGLTF.preload('/models/items/cherry-draco.glb');

export default CherryModel;
