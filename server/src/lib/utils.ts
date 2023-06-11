import { decode, Request } from '../deps.ts';

export const verifyJWT = (request: Request): User | null => {
  const token = request.headers
    .get('authorization')
    ?.replace(/^Bearer/, '')
    .trim();

  if (!token) {
    return null;
  }

  const [_, payload] = decode(token);
  const data = payload as JWTPayload;

  // TODO: check token expired

  return { id: data.id, name: data.name };
};
