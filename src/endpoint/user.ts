import { axiosRequest } from '@/lib/fetcher';

export async function updateRollingCakeName(name: string) {
  return await axiosRequest({ url: '/api/user', method: 'put', data: { name } });
}
