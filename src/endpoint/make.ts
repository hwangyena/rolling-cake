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
  await axios.post(url, arg);
}
