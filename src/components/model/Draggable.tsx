import { ThreeEvent, useThree } from '@react-three/fiber';
import { PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Group, Plane, Raycaster, Vector2, Vector3, Vector3Tuple } from 'three';

interface Props extends PropsWithChildren {
  position?: Vector3Tuple; // 초기 위치 [x, y, z]
  radius?: number; // 이동 가능한 반지름 (기본 1)
  [key: string]: unknown;
}

const Draggable = ({
  position: initialPosition = [0, 0, 0],
  radius = 1,
  children,
  ...props
}: Props) => {
  const groupRef = useRef<Group>(null);
  const [position, setPosition] = useState<Vector3Tuple>(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; z: number }>({ x: 0, z: 0 });
  const [hovered, setHovered] = useState(false);
  const { camera, gl } = useThree();

  // XZ 평면(y=0)에 투영
  const plane = useMemo(() => new Plane(new Vector3(0, 1, 0), 0), []);
  const screenToWorldOnXZ = useCallback(
    (screenX: number, screenY: number): Vector3 => {
      const rect = gl.domElement.getBoundingClientRect();
      const ndc = new Vector2(
        ((screenX - rect.left) / rect.width) * 2 - 1,
        -((screenY - rect.top) / rect.height) * 2 + 1,
      );
      const raycaster = new Raycaster();
      raycaster.setFromCamera(ndc, camera);
      const hit = new Vector3();
      raycaster.ray.intersectPlane(plane, hit);
      return hit;
    },
    [camera, gl, plane],
  );

  // 원형 제약 적용
  const clampCircle = useCallback(
    (x: number, z: number) => {
      const dx = x;
      const dz = z;
      const len = Math.hypot(dx, dz);
      if (len <= radius) {
        return { x, z };
      }
      const s = radius / len;
      return { x: dx * s, z: dz * s };
    },
    [radius],
  );

  const handlePointerDown = useCallback(
    (event: ThreeEvent<PointerEvent>) => {
      event.stopPropagation();
      setIsDragging(true);
      const w = screenToWorldOnXZ(event.clientX, event.clientY);
      setDragStart({ x: w.x - position[0], z: w.z - position[2] });
      gl.domElement.style.cursor = 'grabbing';
    },
    [gl, position, screenToWorldOnXZ],
  );

  const handlePointerMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!isDragging) {
        return;
      }

      let clientX: number | undefined, clientY: number | undefined;
      if ('touches' in event && event.touches.length > 0) {
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;
      } else if ('clientX' in event) {
        clientX = event.clientX;
        clientY = event.clientY;
      }
      if (clientX == null || clientY == null) {
        return;
      }

      const w = screenToWorldOnXZ(clientX, clientY);
      const targetX = w.x - dragStart.x;
      const targetZ = w.z - dragStart.z;

      const { x, z } = clampCircle(targetX, targetZ);
      setPosition([x, position[1], z]); // Y는 고정
    },
    [isDragging, dragStart, position, screenToWorldOnXZ, clampCircle],
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    gl.domElement.style.cursor = 'grab';
  }, [gl]);

  useEffect(() => {
    if (!isDragging) {
      return;
    }
    const move = (e: MouseEvent | TouchEvent) => handlePointerMove(e);
    const up = () => handlePointerUp();
    document.addEventListener('mousemove', move as EventListener);
    document.addEventListener('mouseup', up);
    document.addEventListener('touchmove', move as EventListener, { passive: false });
    document.addEventListener('touchend', up);
    return () => {
      document.removeEventListener('mousemove', move as EventListener);
      document.removeEventListener('mouseup', up);
      document.removeEventListener('touchmove', move as EventListener);
      document.removeEventListener('touchend', up);
    };
  }, [isDragging, handlePointerMove, handlePointerUp]);

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
