type TokenRequest = {
  grant_type: 'authorization_code';
  client_id: string;
  redirect_uri: string;
  code: string;
  client_secret?: string;
};

type TokenResponse = {
  token_type: string;
  acces_token: string;
  id_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
};
