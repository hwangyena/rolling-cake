import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';

const RedCandleModel = () => {
  const { nodes, materials } = useGLTF('/models/items/red-candle-draco.glb') as GLTFRes;

  return (
    <>
      <RedCandle
        position={[-0.2, 1.8, -0.1]}
        rotation-x={0.1}
        rotation-y={0.1}
        rotation-z={0.2}
        scale={0.2}
        {...{ nodes, materials }}
      />
      <RedCandle position={[0.4, 1.8, 0]} rotation-y={-1.1} scale={0.2} {...{ nodes, materials }} />
    </>
  );
};

const RedCandle = ({ nodes, materials, ...props }: GroupProps & GLTFRes) => {
  return (
    <group {...props}>
      <group position={[0, 3, 0]} rotation={[1.597, -0.147, 0.227]} scale={6.039}>
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

export default RedCandleModel;
