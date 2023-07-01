type KakaoToken = {
  access_token: string;
  token_type: 'bearer';
  refresh_token: string;
  id_token: string;
  expires_in: number;
  scope: string;
  refresh_token_expires_in: number;
};

type KakaoUser = {
  id: number;
  connected_at: string;
  properties: { nickname: string };
  kakao_account: {
    profile_nickname_needs_agreement: boolean;
    profile: { nickname: string };
  };
};

type JWTPayload = {
  sub?: string;
  iss?: string;
  exp?: number;
  iat?: number;
  aud?: string;
  nbf?: string;
  jti?: string;
  id: string;
  name: string;
};

type ApiResponse = {
  code: number;
  message: string;
  content?: unknown;
};

type RouterParams = {
  request: Request;
  response: Response;
};
