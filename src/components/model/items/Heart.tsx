import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';

const HeartModel = () => {
  const { nodes, materials } = useGLTF('/models/items/heart.glb') as GLTFRes;

  const { x, y, z } = useControls('heart', {
    x: { value: -0.7, min: -10, max: 10, step: 0.1 },
    y: { value: 3.7, min: -10, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 },
  });
  const { rotationX, rotationY, rotationZ } = useControls('heartRotate', {
    rotationX: { value: 0.1, min: -10, max: 10, step: 0.1 },
    rotationY: { value: -1.7, min: -10, max: 10, step: 0.1 },
    rotationZ: { value: 0.2, min: -10, max: 10, step: 0.1 },
  });

  return (
    <group
      dispose={null}
      scale={0.1}
      rotation-x={rotationX}
      rotation-y={rotationY}
      rotation-z={rotationZ}
      position={[x, y, z]}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Mesh2.geometry}
        material={materials.lambert1}
        position={[-8.023, -9.108, -16.274]}
        rotation={[1.896, -1.212, -0.123]}
        scale={5.006}
      />
    </group>
  );
};

useGLTF.preload('/models/items/heart.glb');

export default HeartModel;
