import { useSpring } from '@react-spring/web';
import { Center, OrbitControls, Text3D } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { useGesture } from 'react-use-gesture';
import * as THREE from 'three';

const material = new THREE.MeshMatcapMaterial();
// const controls = new

const TextComponent = ({ font, value, color }: Lettering) => {
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
  });

  useEffect(() => {
    material.needsUpdate = true;
    material.color.set(color);
  }, [color]);

  useEffect(() => {}, []);

  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <Center>
        <Text3D
          {...bind}
          material={material}
          font="/fonts/Dovemayo_gothic.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}>
          {value}
        </Text3D>
      </Center>
    </>
  );
};

export default TextComponent;
