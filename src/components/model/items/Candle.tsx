import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';

const CandleModel = () => {
  const { nodes, materials } = useGLTF('/models/items/candle.glb') as GLTFRes;

  const { x, y, z } = useControls('candle', {
    x: { value: 1.8, min: -10, max: 10, step: 0.1 },
    y: { value: 4.6, min: -10, max: 10, step: 0.1 },
    z: { value: -0.1, min: -10, max: 10, step: 0.1 },
  });

  return (
    <group dispose={null} scale={0.15} position={[x, y, z]}>
      <group
        position={[-10.181, -20.448, -2.807]}
        rotation={[0.021, 0.006, 0]}
        scale={[47.082, 33.638, 47.082]}>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials.candle}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials.wick}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/items/candle.glb');

export default CandleModel;
