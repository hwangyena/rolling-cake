import { Canvas } from '@react-three/fiber';
import CakeModel from './Cake';
import { useStep } from '@/hooks/make';

const MakeCanvas = () => {
  const { store } = useStep();

  return (
    <Canvas
      shadows
      camera={{
        fov: 20,
        near: 0.1,
        far: 100,
      }}>
      {/* <OrbitControls makeDefault /> */}

      <directionalLight castShadow position={[1, 2, 3]} intensity={4} shadow-normalBias={0.04} />
      <ambientLight intensity={1.5} />

      <CakeModel cakeColor={store.get('sheet').color} />
    </Canvas>
  );
};

export default MakeCanvas;
