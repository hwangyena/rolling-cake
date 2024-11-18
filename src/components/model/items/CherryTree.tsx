import { useGLTF } from '@react-three/drei';

const CherryTreeModel = () => {
  const { nodes, materials } = useGLTF('/models/items/cherry-tree.glb') as GLTFRes;

  return (
    <group
      position={[0.7, 2.2, -0.6]}
      rotation-x={-0.5}
      rotation-y={-0.3}
      rotation-z={0.4}
      scale={0.16}>
      <group name="Scene">
        <group rotation={[-1.793, -0.22, 2.368]} scale={0.679}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.leaves002.geometry}
            material={materials['Material.021']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.leaves002_1.geometry}
            material={materials['Material.012']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.leaves002_2.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.leaves002_3.geometry}
            material={materials['Material.022']}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/items/cherry-tree.glb');

export default CherryTreeModel;
