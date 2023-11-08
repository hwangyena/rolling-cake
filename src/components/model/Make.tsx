import { useStep } from '@/hooks/make';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import CakeModel from './Cake';

const MakeCanvas = () => {
  const { store } = useStep();

  return (
    <Canvas
      shadows
      camera={{
        fov: 15,
        near: 0.1,
        far: 100,
        position: new THREE.Vector3(0, 1.3, 5),
      }}>
      {/* <CameraControls /> */}
      {/* <PerspectiveCamera fov={20} near={0.1} far={500} position={position}> */}
      {/* <OrbitControls makeDefault /> */}
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={7}
        shadow-normalBias={0.04}
        color="#fff9d0"
      />
      <ambientLight intensity={1.5} />

      <CakeModel cakeColor={(store.get('sheet') as CustomCake['sheet']).color as Color} />
      {/* </PerspectiveCamera> */}
    </Canvas>
  );
};

export default MakeCanvas;
