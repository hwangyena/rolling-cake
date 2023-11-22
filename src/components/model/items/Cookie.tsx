import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';

const CookieModel = () => {
  const { nodes, materials } = useGLTF('/models/items/cookie.glb') as GLTFRes;

  const { x, y, z } = useControls('cookie', {
    x: { value: 2.1, min: -10, max: 10, step: 0.1 },
    y: { value: 1.9, min: -10, max: 10, step: 0.1 },
    z: { value: -1.4, min: -10, max: 10, step: 0.1 },
  });

  const { rotationX, rotationY } = useControls('cookieRotate', {
    rotationX: { value: 0.1, min: -10, max: 10, step: 0.1 },
    rotationY: { value: -0.7, min: -10, max: 10, step: 0.1 },
  });

  return (
    <group
      dispose={null}
      scale={0.2}
      rotation-x={rotationX}
      rotation-y={rotationY}
      position={[x, y, z]}>
      <group position={[-3.678, 2.87, 5.006]} rotation={[0.244, 0.768, 0.619]} scale={0.645}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.oreo001_1.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.oreo001_2.geometry}
          material={materials['Material.012']}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/items/cookie.glb');

export default CookieModel;
