import 'server-only';

import { CakeStep, NextStep, StepTitle } from './_components';

export default function Page({ params: { userId } }: { params: { userId: string } }) {
  return (
    <>
      <StepTitle />
      <CakeStep userId={userId} />
      <NextStep />
    </>
  );
}
