import { useProgress } from '@react-three/drei';

const LoadingCanvas = () => {
  const { progress, active } = useProgress();

  if (!active) {
    return null;
  }

  return (
    <div className="absolute left-0 top-0 grid h-full w-full place-items-center">
      <div className="absolute z-20 h-full w-full rounded-lg bg-white opacity-60" />
      <div className="z-20 flex w-[80%] flex-col justify-center gap-2">
        <span className="text-b3 text-pink-200">Loading...</span>
        <div className="relative h-1">
          <div
            className={`absolute left-0 top-0 h-full rounded-2xl bg-pink-200`}
            style={{ width: `${progress || 60}%`, height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingCanvas;
