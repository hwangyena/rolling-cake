import CAKE from '../db/cake.ts';
import { Context } from '../deps.ts';
import error from '../error.ts';
import { verifyJWT } from '../lib/utils.ts';

export const getCakeDetail = async ({
  params,
  request,
  response,
}: Context & { params: { id: string } }) => {
  const res = await CAKE.selectById(params.id);

  if (!res) {
    response.status = 400;
    response.body = {
      message: '데이터가 존재하지 않습니다.',
    };
    return;
  }

  const data = res.data;
  const user = verifyJWT(request);

  if (
    !user &&
    data?.Letter &&
    (data.Letter as { isPrivate: boolean }).isPrivate
  ) {
    (data.Letter as Letter).content = '';
  }

  response.status = 200;
  response.body = {
    code: 200,
    message: 'Success',
    content: data,
  };
};

export const createCake = async ({ request, response }: Context) => {
  const data = await request.body().value;

  if (!data || (data as number[]).length === 0) {
    error(response);
    return;
  }

  const userId = data.get('userId');
  const cakeType = data.get('cakeType');
  const customCake = data.get('customCake') ?? null;

  if (!userId || !cakeType) {
    error(response);
    return;
  }

  const cake = await CAKE.create(userId, cakeType, customCake);

  response.status = 200;
  response.body = {
    code: 200,
    message: 'Success',
    content: cake,
  };
};
