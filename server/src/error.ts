import { Response } from './deps.ts';

export default function error(response: Response) {
  response.status = 400;
  response.body = {
    message: '잘못된 요청입니다.',
  };
}
