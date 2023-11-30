import { useGLTF } from '@react-three/drei';

const RedTopperModel = () => {
  const { nodes, materials } = useGLTF('/models/items/red-topper.glb') as GLTFRes;

  return (
    <group
      position={[-1.1, 2.2, -0.4]}
      rotation-x={-0.1}
      rotation-y={-0.8}
      rotation-z={0.3}
      scale={0.22}>
      <group name="Scene">
        <group rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.105, -3.628, -0.103]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials['Material.004']}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/items/red-topper.glb');

export default RedTopperModel;
