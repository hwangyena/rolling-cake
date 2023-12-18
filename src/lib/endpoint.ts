import axios from 'axios';

export async function createCake(
  url: string,
  {
    arg,
  }: {
    arg: CreateCakeReq;
  },
) {
  return await axios.post(url, arg, {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function updateRollingCakeName(name: string) {
  return await axios.put('/api/user', { name });
}
