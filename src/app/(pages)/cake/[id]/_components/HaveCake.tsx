import Header from '@/components/common/Header';
import Tag from '@/components/common/Tag';
import { cn } from '@/lib/utils';
import type { Cake as CakeType, User } from '@prisma/client';

import Cake from './Cake';
import ShareButton from './ShareButton';

type Props = {
  user: User;
  cakes: CakeType[];
  isOwn: boolean;
};

const HaveCake = ({ cakes, isOwn, user }: Props) => {
  return (
    <div className="relative flex flex-1 flex-col gap-8 overflow-hidden">
      <section className="flex flex-col items-center gap-3">
        <Header>{`${user.rollingCakeName}의 롤링케이크`}</Header>
        <Tag>{`${cakes.length}개의 케이크와 편지 도착!`}</Tag>
      </section>
      <section className={`green-gradient flex-1 overflow-y-auto px-[25px] py-[20px]`}>
        <div className={cn('grid grid-cols-3 gap-5', { 'mb-[110px]': !isOwn })}>
          {cakes.map((cake, i) => (
            <Cake key={i} cake={cake} />
          ))}
        </div>
      </section>
      {!isOwn && (
        <section
          className={'white-gradient absolute bottom-0 z-30 w-full px-[25px] pb-[20px] pt-[45px]'}>
          <ShareButton userId={user.id} />
        </section>
      )}
    </div>
  );
};

export default HaveCake;
