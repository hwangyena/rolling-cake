import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';

const ScrewCandleModel = () => {
  const { nodes, materials } = useGLTF('/models/items/screw-candle.glb') as GLTFRes;

  const { x, y, z } = useControls('screw-candle', {
    x: { value: 1.6, min: -10, max: 10, step: 0.1 },
    y: { value: 2.0, min: -10, max: 10, step: 0.1 },
    z: { value: -1.3, min: -10, max: 10, step: 0.1 },
  });

  return (
    <group dispose={null} scale={0.5} position={[x, y, z]}>
      <group position={[-1.12, 10.757, -29.974]} rotation={[1.582, -0.149, 0.237]} scale={0.94}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_Circle003_1.geometry}
          material={materials['Material.016']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_Circle003_2.geometry}
          material={materials['Material.017']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_Circle003_3.geometry}
          material={materials['wick.006']}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/items/screw-candle.glb');

export default ScrewCandleModel;
