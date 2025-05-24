import Header from '@/components/common/Header';
import Tag from '@/components/common/Tag';
import { cn } from '@/lib/utils';
import type { Cake as CakeType, User } from '@prisma/client';

import Cake from './Cake';
import MakeButton from './MakeButton';
import ShareButton from './ShareButton';

type Props = {
  user: User;
  cakes: CakeType[];
  isOwn: boolean;
};

const HaveCake = ({ cakes, isOwn, user }: Props) => {
  return (
    <div className="relative flex flex-1 flex-col gap-8 h-[calc(100%-72px-24px)]">
      <section className="flex flex-col items-center gap-3">
        <Header>{`${user.rollingCakeName}의 롤링케이크`}</Header>
        <Tag>{`${cakes.length}개의 케이크와 편지가 있어요`}</Tag>
      </section>
      <section className={`flex-1 overflow-y-auto px-[25px] py-[20px]`}>
        <div className={cn('grid grid-cols-3 gap-5', { 'mb-[110px]': !isOwn })}>
          {cakes.map((cake, i) => (
            <Cake key={i} cake={cake} />
          ))}
        </div>
      </section>
      <section
        className={'white-gradient absolute bottom-0 z-10 w-full px-[25px] pb-[20px] pt-[45px]'}>
        {isOwn ? <ShareButton /> : <MakeButton userId={user.id} />}
      </section>
    </div>
  );
};

export default HaveCake;
