import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';

const CherryModel = () => {
  const { nodes, materials } = useGLTF('/models/items/cherry.glb') as GLTFRes;

  const { x, y, z } = useControls('cherry', {
    x: { value: -0.1, min: -10, max: 10, step: 0.1 },
    y: { value: -5.8, min: -10, max: 10, step: 0.1 },
    z: { value: 27.8, min: -10, max: 40, step: 0.1 },
  });

  const { rotationX } = useControls('cherry', {
    rotationX: { value: -0.1, min: -1, max: 1, step: 0.01 },
    // y: { value: -5.8, min: -10, max: 10, step: 0.1 },
    // z: { value: 25.7, min: -10, max: 40, step: 0.1 },
  });

  return (
    <group dispose={null} scale={0.9} rotation-z={rotationX} position={[x, y, z]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cherry001.geometry}
        material={materials['ball.003']}
        position={[-0.93, 10.718, -31.274]}
        rotation={[1.356, 0.396, -0.355]}
        scale={0.146}
      />
    </group>
  );
};

useGLTF.preload('/models/items/cherry.glb');

export default CherryModel;
