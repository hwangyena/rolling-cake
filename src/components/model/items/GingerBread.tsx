import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';

const GingerBreadModel = () => {
  const { nodes, materials } = useGLTF('/models/items/gingerbread.glb') as GLTFRes;

  const { x, y, z } = useControls('ginger', {
    x: { value: -1.6, min: -10, max: 10, step: 0.1 },
    y: { value: 3.2, min: -10, max: 10, step: 0.1 },
    z: { value: 1.1, min: -10, max: 10, step: 0.1 },
  });

  return (
    <group dispose={null} scale={0.15} position={[x, y, z]}>
      <group position={[6.34, 0.426, -15.074]} rotation={[-0.587, 0.356, 0.166]} scale={1.33}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['11571_Gingerbread_cookie_male_V2_l2001_1'].geometry}
          material={materials['Material.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['11571_Gingerbread_cookie_male_V2_l2001_2'].geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['11571_Gingerbread_cookie_male_V2_l2001_3'].geometry}
          material={materials.Material}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/items/gingerbread.glb');

export default GingerBreadModel;
