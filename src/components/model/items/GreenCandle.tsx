import { useGLTF } from '@react-three/drei';

const GreenCandleModel = ({ visible }: { visible: boolean }) => {
  const { nodes, materials } = useGLTF('/models/items/green-candle-draco.glb') as GLTFRes;

  return (
    <group visible={visible} position={[0, 1.2, 0.2]} rotation-y={-1.3} scale={0.32}>
      <group
        position={[0, 5, 0]}
        rotation={[-0.038, -0.009, -0.003]}
        scale={[19.187, 19.67, 19.202]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials['Material.020']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials.wick}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/items/green-candle-draco.glb');

export default GreenCandleModel;
