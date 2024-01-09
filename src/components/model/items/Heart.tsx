import { useGLTF } from '@react-three/drei';

const HeartModel = ({ visible }: { visible: boolean }) => {
  const { nodes, materials } = useGLTF('/models/items/heart-draco.glb') as GLTFRes;

  return (
    <group
      visible={visible}
      position={[-0.8, 1.8, 1.1]}
      rotation-y={-0.8}
      rotation-z={0.4}
      scale={0.17}>
      <group name="Scene">
        <group position={[2.218, 0.894, 0.182]} rotation={[3.109, -1.165, 1.165]} scale={2.196}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh010.geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh010_1.geometry}
            material={materials['Material.013']}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/items/heart-draco.glb');

export default HeartModel;
