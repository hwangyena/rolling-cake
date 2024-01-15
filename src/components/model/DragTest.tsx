import { a } from '@react-spring/three';
import { useSpring } from '@react-spring/web';
import { Canvas, useThree } from '@react-three/fiber';
import { useGesture } from '@use-gesture/react';

export default function DragTest() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.6}
        position={[20, 10, 10]}
        angle={0.2}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
      {/* <mesh receiveShadow>
        <planeBufferGeometry args={[1000, 1000]} />
        <meshPhongMaterial color="#272727" />
      </mesh> */}
      <DragModel />
    </Canvas>
  );
}

const DragModel = () => {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const [spring, set] = useSpring(() => ({
    scale: [1, 1, 1],
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));
  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) =>
      set({ position: [x / aspect, -y / aspect, 0], rotation: [y / aspect, x / aspect, 0] }),
    onHover: ({ hovering }) => set({ scale: hovering ? [1.2, 1.2, 1.2] : [1, 1, 1] }),
  });
  return (
    <a.mesh {...spring} {...bind()} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </a.mesh>
  );
};
