import { PropsWithChildren } from 'react';

type Props = {
  show: boolean;
};

const Step = ({ show, children }: PropsWithChildren<Props>) => {
  if (!show) {
    return null;
  }

  return <>{children}</>;
};

export default Step;
