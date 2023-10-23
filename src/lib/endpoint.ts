import axios from 'axios';

export async function createCake(
  url: string,
  {
    arg,
  }: {
    arg: {
      type: 'CUSTOM' | 'THEME';
      cake: CustomCake | ThemeCake;
      userId: string;
      letter: Letter;
    };
  }
) {
  return await axios.post(url, arg);
}

export async function updateRollingCakeName(name: string) {
  return await axios.put('/api/user', { name });
}
