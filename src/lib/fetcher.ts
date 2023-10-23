import axios, { AxiosError } from 'axios';

const handleError = (e: AxiosError) => {
  console.error(e);

  return e;
};

// TODO: remove
export const fetcher = async (url: string) => {
  try {
    const res = await axios.get(url);

    return res.data;
  } catch (e) {
    handleError(e as AxiosError);
  }
};
