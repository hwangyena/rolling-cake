import { useGLTF } from '@react-three/drei';

const TeddyBearModel = () => {
  const { nodes, materials } = useGLTF('/models/items/teddy-bear.glb') as GLTFRes;

  return (
    <group position={[0.4, 1.9, -0.9]} rotation-y={4.5} rotation-z={3.3} scale={-0.15}>
      <group name="Scene">
        <group
          position={[0.884, 6.904, -3.145]}
          rotation={[0, 0, -0.107]}
          scale={[0.662, 0.525, 0.662]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone_1.geometry}
            material={materials['Material.017']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone_2.geometry}
            material={materials['Material.012']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone_3.geometry}
            material={materials['5']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone_4.geometry}
            material={materials['Material.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone_5.geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone_6.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone_7.geometry}
            material={materials['Material.004']}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/items/teddy-bear.glb');

export default TeddyBearModel;
