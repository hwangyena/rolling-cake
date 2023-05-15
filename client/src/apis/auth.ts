import { axiosRequest } from './fetcher';

export const login = async () => {
  const res = await axiosRequest({ method: 'post', url: '/token' });

  //TODO: fetch login & redirect to home
};
