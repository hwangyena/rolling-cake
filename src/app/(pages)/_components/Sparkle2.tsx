import { CSSProperties } from 'react';

import { cn } from '@lib/utils';

type Props = {
  className?: string;
  delay?: number;
};

const Sparkle2 = ({ className, delay = 0 }: Props) => {
  return (
    <svg
      width="19"
      height="22"
      viewBox="0 0 19 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('sparkle-animation2', className)}
      style={{ ['--delay']: `${delay}s` } as CSSProperties}>
      <path
        d="M1 10.3164C7.70345 10.3164 9.62759 3.43879 9.75172 0C9.75172 8.10395 15.9172 10.2542 19 10.3164C11.6014 10.3164 9.75172 18.1055 9.75172 22C9.75172 13.548 3.91724 10.6893 1 10.3164Z"
        fill="url(#paint0_linear_1434_10210)"
        stroke="black"
        stroke-width="0.2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1434_10210"
          x1="10"
          y1="0"
          x2="10"
          y2="22"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#FEEEA2" />
          <stop offset="1" stop-color="#3DDCD9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Sparkle2;
