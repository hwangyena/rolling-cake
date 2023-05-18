import { Router } from 'https://deno.land/x/oak/mod.ts';
import { load } from 'https://deno.land/std@0.187.0/dotenv/mod.ts';

const env = await load();

const router = new Router();

//TODO: response type
router.post('/login', async ({ request, response }) => {
  if (!request.body()) {
    console.log('TOKEN이 없습니다!!');

    response.status = 400;
    response.body = {
      message: '토큰이 존재하지 않습니다.',
    };
    return;
  }

  const { token } = (await request.body().value) as { token: string };

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: env['CLIENT_ID'],
    redirect_uri: 'http://localhost:3000/kakao', //FIXME: env value
    code: token,
  });

  console.log('JSON.stringify(body)', JSON.stringify(body));

  const res = await fetch('https://kauth.kakao.com/oauth/token', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    body,
  });

  console.log('res', res);

  if (!res.ok) {
    response.status = res.status;
    response.body = {
      message: res.statusText,
    };
    return;
  }

  // TODO: make JWT token & Save user info to DB
  // const jwt = await create({ alg: 'HS512', typ: 'JWT' }, { payload }, key);

  response.status = 200;
  response.body = {
    message: '로그인 완료',
  };
});

export default router;
