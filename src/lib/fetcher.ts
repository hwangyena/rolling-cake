import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const handleError = (e: AxiosError) => {
  console.error(e);

  return e;
};

export const fetcher = async (url: string) => {
  try {
    const res = await axios.get(url);

    return res.data;
  } catch (e) {
    handleError(e as AxiosError);
  }
};

export const axiosRequest = async <T>(config: AxiosRequestConfig) => {
  try {
    const res = await axios<T>(config);

    return res.data;
  } catch (e) {
    handleError(e as AxiosError);
  }
};
