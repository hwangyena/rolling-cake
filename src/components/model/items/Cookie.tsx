import { useGLTF } from '@react-three/drei';

const CookieModel = ({ visible }: { visible: boolean }) => {
  const { nodes, materials } = useGLTF('/models/items/cookie-draco.glb') as GLTFRes;

  return (
    <group
      visible={visible}
      position={[-1.3, 2.1, 0.4]}
      rotation-x={5.9}
      rotation-y={5.0}
      rotation-z={-0.4}
      scale={0.16}>
      <group rotation={[-0.95, 0.035, 2.822]} scale={[0.696, 0.676, 0.67]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.oreo001_1.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.oreo001_2.geometry}
          material={materials['Material.001']}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/items/cookie-draco.glb');

export default CookieModel;
