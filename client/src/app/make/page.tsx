'use client';

import Layout from '@/components/make/layout';
import { MAKE_STEP } from '@/lib/constant';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const current = useMemo(
    () => MAKE_STEP.find((v) => v.path === searchParams.get('step')),
    [searchParams]
  );

  // TODO: in SSR
  useEffect(() => {
    if (!searchParams.get('step')) {
      router.replace('/make?step=shape');
    }
  }, [router, searchParams]);

  if (!current) {
    return <div>error</div>;
  }

  return <Layout step={current.step} title={current.title} nextStep={current.nextPath}></Layout>;
}
