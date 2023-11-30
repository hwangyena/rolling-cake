import { useStepStore } from '@/hooks/make';
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

const CherryModel = () => {
  const { nodes, materials } = useGLTF('/models/items/cherry.glb') as GLTFRes;
  const { store } = useStepStore<CustomCake>();

  const yPosition = useMemo(
    () => (store.cream_top.cream === 'none' ? 1.9 : 2.2),
    [store.cream_top.cream],
  );

  return (
    <>
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
    </>
  );
};

useGLTF.preload('/models/items/cherry.glb');

export default CherryModel;
