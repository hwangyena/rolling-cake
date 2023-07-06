import CAKE from '../db/cake.ts';
import LETTER from '../db/letter.ts';
import error from '../error.ts';
import { Context } from '../deps.ts';
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
  const user = verifyJWT(request) as JWTPayload;

  if (
    (!user || user.id !== data?.userId) &&
    data?.Letter &&
    (data.Letter as { isPrivate: boolean }).isPrivate
  ) {
    (data.Letter as LetterRes).content = '';
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

  // cake
  const userId = data.get('userId');
  const cakeType = data.get('cakeType');
  const customCake = data.get('customCake') ?? null;

  // letter
  const name = data.get('name') ?? null;
  const content = data.get('content') ?? null;
  const isPrivate = data.get('isPrivate') ?? true;

  if (!userId || !cakeType || !name || !content) {
    error(response);
    return;
  }

  const cake = await CAKE.create(userId, cakeType, customCake);

  if (cake.status !== 201) {
    error(response);
    return;
  }

  const letter = await LETTER.create(cake.data.id, {
    content,
    isPrivate,
    name,
  });

  if (letter.status !== 201) {
    error(response);
    return;
  }

  response.status = 200;
  response.body = {
    code: 200,
    message: 'Success',
    content: cake,
  };
};
