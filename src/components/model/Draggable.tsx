import { ThreeEvent, useThree } from '@react-three/fiber';
import { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
import { Group, Plane, Raycaster, Vector2, Vector3, Vector3Tuple } from 'three';

interface Props extends PropsWithChildren {
  position?: Vector3Tuple;
  [key: string]: unknown;
}

const Draggable = ({ position: initialPosition, children, ...props }: Props) => {
  const groupRef = useRef<Group>(null);
  const [position, setPosition] = useState<Vector3Tuple>(initialPosition ?? [0, 0, 0]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, z: 0 });
  const { camera, gl } = useThree();

  const screenToWorld = useCallback(
    (screenX: number, screenY: number): Vector3 => {
      const canvas = gl.domElement;
      const rect = canvas.getBoundingClientRect();

      const mouse = new Vector2();
      mouse.x = ((screenX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((screenY - rect.top) / rect.height) * 2 + 1;

      const raycaster = new Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const plane = new Plane(new Vector3(0, 1, 0), 0);
      const intersection = new Vector3();
      raycaster.ray.intersectPlane(plane, intersection);

      return intersection || new Vector3(0, 0, 0);
    },
    [camera, gl],
  );

  const handlePointerDown = useCallback(
    (event: ThreeEvent<PointerEvent>) => {
      event.stopPropagation();
      setIsDragging(true);

      const clientX = event.clientX;
      const clientY = event.clientY;

      const worldPos = screenToWorld(clientX, clientY);
      setDragStart({
        x: worldPos.x - position[0],
        z: worldPos.z - position[2],
      });

      gl.domElement.style.cursor = 'grabbing';
    },
    [position, screenToWorld, gl],
  );

  const handlePointerMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!isDragging) {
        return;
      }

      let clientX: number, clientY: number;

      if ('touches' in event && event.touches.length > 0) {
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;
      } else if ('clientX' in event) {
        clientX = event.clientX;
        clientY = event.clientY;
      } else {
        return;
      }

      const worldPos = screenToWorld(clientX, clientY);
      const newX = worldPos.x - dragStart.x;
      const newZ = worldPos.z - dragStart.z;

      setPosition([newX, position[1], newZ]);
    },
    [isDragging, dragStart, position, screenToWorld],
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    gl.domElement.style.cursor = 'grab';
  }, [gl]);

  useEffect(() => {
    if (isDragging) {
      const handleMove = (e: MouseEvent | TouchEvent) => handlePointerMove(e);
      const handleUp = () => handlePointerUp();

      document.addEventListener('mousemove', handleMove as EventListener);
      document.addEventListener('mouseup', handleUp);
      document.addEventListener('touchmove', handleMove as EventListener);
      document.addEventListener('touchend', handleUp);

      return () => {
        document.removeEventListener('mousemove', handleMove as EventListener);
        document.removeEventListener('mouseup', handleUp);
        document.removeEventListener('touchmove', handleMove as EventListener);
        document.removeEventListener('touchend', handleUp);
      };
    }
  }, [isDragging, handlePointerMove, handlePointerUp]);

  const [hovered, setHovered] = useState(false);

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerDown={handlePointerDown}
      onPointerOver={() => {
        setHovered(true);
        gl.domElement.style.cursor = 'grab';
      }}
      onPointerOut={() => {
        setHovered(false);
        if (!isDragging) {
          gl.domElement.style.cursor = 'default';
        }
      }}
      scale={hovered ? 1.05 : 1}
      {...props}>
      {children}
    </group>
  );
};

export default Draggable;
