import { load, create, Context } from '../deps.ts';
import { jwtKey } from '../lib/data.ts';
import USER from '../db/user.ts';

const env = await load();

const login = async ({ request, response }: Context) => {
  if (!request) {
    return;
  }

  const data = await request.body().value;

  if (!data) {
    response.status = 400;
    response.body = {
      message: '잘못된 요청입니다.',
    };
    return;
  }

  const { code } = data as { code: string };

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

  const res: ApiResponse = await fetch('https://kauth.kakao.com/oauth/token', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  })
    .then((response) => response.json())
    .then(async (data: KakaoToken) => {
      return await fetch('https://kapi.kakao.com/v2/user/me', {
        method: 'get',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${data.access_token}`,
        },
      })
        .then((res) => res.json())
        .then(async (data: KakaoUser) => {
          let user = await USER.selectByKakaoId(data.id);

          if (!user.data) {
            await USER.create(data.id, data.properties.nickname);
            user = await USER.selectByKakaoId(data.id);
          }

          console.log('user', user); // TODO: remove this

          // JWT token
          const nextDate = new Date();
          nextDate.setDate(new Date().getDate() + 1);

          const jwt = await create(
            {
              alg: 'HS512',
              typ: 'JWT',
            },
            {
              id: user.data?.id,
              name: user.data?.name,
              iss: 'rolling-cake',
              sub: 'rolling-cake-token',
              aud: 'rolling-cake-client',
              iat: Date.now(),
              exp: nextDate.getTime(),
            },
            jwtKey
          );

          if (jwt) {
            return {
              code: 200,
              message: '로그인 성공',
              content: {
                userId: data.id,
                userName: data.properties.nickname,
                token: jwt,
              },
            };
          } else {
            return { code: 500, message: 'internal server error' };
          }
        });
    })
    .catch((err) => ({ code: err.status, message: err.statusText }));

  response.status = res.code;
  response.body = {
    code: res.code,
    message: res.message,
    content: res.content,
  };
};

export default login;
