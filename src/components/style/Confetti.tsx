import { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const randomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getAnimationSettings = (originXA: number, originXB: number) => {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2,
    },
  };
};

const Confetti = () => {
  const instance = useRef<CreateTypes | null>(null);

  const getInstance = useCallback((confetti: CreateTypes | null) => {
    instance.current = confetti;
  }, []);

  useEffect(() => {
    const animation = () => {
      if (!instance.current) {
        return;
      }

      instance.current(getAnimationSettings(0.1, 0.2));
      instance.current(getAnimationSettings(0.8, 1));
    };

    animation();
    const timer = setInterval(animation, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      style={{ position: 'fixed', width: '100%', height: '100%' }}
    />
  );
};

export default Confetti;
