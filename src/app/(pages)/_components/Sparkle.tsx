import { CSSProperties } from 'react';

const SPARKLE_SIZE = 30;

interface Props {
  size?: number;
  delay?: number;
  className?: string;
}

const Sparkle = ({ size = SPARKLE_SIZE, delay = 0, className }: Props) => {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className}>
      <g>
        {Array.from({ length: 8 }, (_, i) => {
          const lineSize = size / 2;
          const angle = (i * 45 * Math.PI) / 180;
          const x1 = lineSize;
          const y1 = lineSize;
          const x2 = lineSize + Math.cos(angle) * lineSize;
          const y2 = lineSize + Math.sin(angle) * lineSize;

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#fae64d"
              strokeWidth="1"
              strokeLinecap="round"
              className="sparkle-animation"
              style={
                {
                  ['--sparkle-size']: lineSize,
                  ['--delay']: `${delay}s`,
                  strokeDashoffset: lineSize,
                  strokeDasharray: lineSize,
                } as CSSProperties
              }
            />
          );
        })}
      </g>
    </svg>
  );
};

export default Sparkle;
