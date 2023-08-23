'use client';

import Wrapper from '@/components/make/Wrapper';
import StepShape from '@/components/make/StepShape';
import { MAKE_STEP, SELECT_ITEM } from '@/lib/constant';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import StepCommon from '@/components/make/StepCommon';

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // TODO: in SSR
  useEffect(() => {
    if (!searchParams.get('step')) {
      router.replace('/make?step=shape');
    }
  }, [router, searchParams]);

  const current = useMemo(
    () => MAKE_STEP.find((v) => v.path === searchParams.get('step')),
    [searchParams]
  );

  const render = () => {
    switch (current?.path) {
      case 'shape':
        return <StepShape />;
      case 'sheet':
      case 'cream_top':
      case 'cream_side':
      case 'more':
      case 'lettering':
        return (
          <StepCommon
            itemSelect={current.select as (keyof typeof SELECT_ITEM)[]}
            noLabel={current.noLabel}
          />
        );
    }
  };

  // TODO: show error popup
  if (!current) {
    return <div>error</div>;
  }

  return (
    <Wrapper step={current.step} title={current.title} nextStep={current.nextPath}>
      {render()}
    </Wrapper>
  );
}
