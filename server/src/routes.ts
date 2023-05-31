import { load } from 'https://deno.land/std@0.187.0/dotenv/mod.ts';
import { Router } from 'https://deno.land/x/oak/mod.ts';
import { create } from './deps.ts';
import { jwtKey } from './lib/data.ts';

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
    client_id: env['KAKAO_RES_API_KEY'],
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
    .then(async (data: KakaoToken) => {
      await fetch('https://kapi.kakao.com/v2/user/me', {
        method: 'get',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${data.access_token}`,
        },
      })
        .then((res) => res.json())
        .then(async (data: KakaoUser) => {
          // TODO: DB connect & create or get user (by user id)
          console.log('data', data);

          // JWT token
          const nextDate = new Date();
          nextDate.setDate(new Date().getDate() + 1);

          const jwt = await create(
            {
              alg: 'HS512',
              typ: 'JWT',
            },
            {
              nickname: data.properties.nickname,
              iss: 'rolling-cake',
              sub: 'rolling-cake-token',
              aud: 'rolling-cake-client',
              iat: Date.now(),
              exp: nextDate.getTime(),
            },
            jwtKey
          );

          // TODO: check exist user - not exist ? create

          if (jwt) {
            response.status = 200;
            response.body = {
              //  userId,
              userName: data.properties.nickname,
              token: jwt,
            };
            return;
          } else {
            response.status = 500;
            response.body = {
              message: 'internal server error',
            };
            return;
          }
        });
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
