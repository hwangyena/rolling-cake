import USER from '../db/user.ts';
import { Context } from '../deps.ts';

export const getUser = async ({
  params,
  response,
}: Context & { params: { id: string } }) => {
  const res = await USER.selectById(params.id);

  if (!params.id) {
    response.status = 400;
    response.body = {
      message: '유저가 존재하지 않습니다.',
    };
    return;
  }

  response.status = 200;
  response.body = {
    code: 200,
    message: 'Success',
    content: res.data,
  };
};
