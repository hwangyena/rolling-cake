import { useGLTF } from '@react-three/drei';

const GingerbreadModel = ({ visible }: { visible: boolean }) => {
  const { nodes, materials } = useGLTF('/models/items/gingerbread-draco.glb') as GLTFRes;

  return (
    <group
      visible={visible}
      position={[-0.1, 2.5, -1.1]}
      rotation-x={-0.2}
      rotation-y={4.5}
      rotation-z={0}
      scale={0.17}>
      <group position={[0, -2, 0]} rotation={[1.703, -0.027, 0.987]} scale={[0.171, 0.166, 0.171]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere025.geometry}
          material={materials['Material.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere025_1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere025_2.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere025_3.geometry}
          material={materials['Material.004']}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/items/gingerbread-draco.glb');

export default GingerbreadModel;
