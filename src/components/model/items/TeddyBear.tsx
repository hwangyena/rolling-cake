import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useGesture } from '@use-gesture/react';
import { useRef, useState } from 'react';

const TeddyBearModel = () => {
  const { nodes, materials } = useGLTF('/models/items/teddy-bear.glb') as GLTFRes;
  const { raycaster } = useThree();
  const [position, setPosition] = useState({ x: 0.4, z: -0.9 });
  const itemRef = useRef(null);

  const bind = useGesture({
    onDrag: () => {
      const intersects = raycaster.intersectObjects([itemRef]);
      if (intersects.length > 0) {
        const intersection = intersects[0];
        console.log(intersection.point.x);
        setPosition({
          x: intersection.point.x,
          // y: intersection.point.y,
          z: intersection.point.z,
        });
      }
      // setControlsDisabled(true);
    },
    onDragEnd: () => {
      // setControlsDisabled(false);
    },
  });

  return (
    <group
      position={[position.x, 1.9, position.z]}
      rotation-y={4.5}
      rotation-z={3.3}
      scale={-0.15}
      ref={itemRef}
      {...bind}>
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
