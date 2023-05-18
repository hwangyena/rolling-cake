import { Router } from 'https://deno.land/x/oak/mod.ts';
import { load } from 'https://deno.land/std@0.187.0/dotenv/mod.ts';

const env = await load();

const router = new Router();

//TODO: response type
router.post('/login', async ({ request, response }) => {
  if (!request.body()) {
    response.status = 400;
    response.body = {
      message: '토큰이 존재하지 않습니다.',
    };
    return;
  }

  const { code } = (await request.body().value) as { code: string };

  const form = {
    grant_type: 'authorization_code',
    client_id: env['CLIENT_ID'],
    redirect_uri: 'http://localhost:3000/kakao', // FIXME: real redirect_url
    code,
  };

  const body = Object.keys(form)
    .map(
      (key) =>
        encodeURIComponent(key) +
        '=' +
        encodeURIComponent(form[key as keyof typeof form])
    )
    .join('&');

  await fetch('https://kauth.kakao.com/oauth/token', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  })
    .then((response) => response.json())
    .then((data: Kakao_Token) => {
      // TODO: make JWT token & Save user info to DB
      // const jwt = await create({ alg: 'HS512', typ: 'JWT' }, { payload }, key);
    })
    .catch((err) => {
      response.status = err.status;
      response.body = {
        message: err.statusText,
      };
      return;
    });

  response.status = 200;
  response.body = {
    message: '로그인 완료',
  };
});

export default router;
