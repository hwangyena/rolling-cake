import { memo } from 'react';
import { User } from 'next-auth';
import Header from '../common/Header';
import Tag from '../common/Tag';

const Title = ({ user, cakeCount }: { user: User; cakeCount: number }) => {
  return (
    <section className="flex flex-col items-center gap-3 mb-[20px]">
      <Header>{user.name}의 롤링케이크</Header>
      {cakeCount > 0 && <Tag>{`${cakeCount}개의 케이크와 편지 도착!`}</Tag>}
    </section>
  );
};

export default memo(Title);
