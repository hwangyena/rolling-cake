import { useGLTF } from '@react-three/drei';

const GreenTopperModel = () => {
  const { nodes, materials } = useGLTF('/models/items/green-topper.glb') as GLTFRes;

  return (
    <group
      position={[-1.1, 2.4, 0]}
      rotation-x={-0.3}
      rotation-y={-2.9}
      rotation-z={-0.1}
      scale={0.22}>
      <group name="Scene">
        <group
          position={[-0.473, 1.226, 0.927]}
          rotation={[-0.066, -0.093, 0.082]}
          scale={[-0.146, -3.819, -0.144]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials['Material.010']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_2.geometry}
            material={materials['Material.004']}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/items/green-topper.glb');

export default GreenTopperModel;
