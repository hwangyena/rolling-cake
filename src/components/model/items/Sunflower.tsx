import { useGLTF } from '@react-three/drei';

const SunflowerModel = () => {
  const { nodes, materials } = useGLTF('/models/items/sunflower.glb') as GLTFRes;

  return (
    <group scale={0.22} position={[0, 1.9, 0]} rotation-x={-1.0} rotation-y={-2.7}>
      <group
        position={[0.162, 0.041, -0.096]}
        rotation={[2.327, -0.346, -2.821]}
        scale={[1.01, 1.296, 1.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['Material.011']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials['Material.004']}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/items/sunflower.glb');

export default SunflowerModel;
