type Login = {
  code: number;
  message: string;
  content: User & {
    token: string;
  };
};

type Color = '#fefce1' | '#f7cac7' | '#cffdcb' | '#c6f4f8' | '#e9d5fc' | '#6d3710';
type CakeCream = 'none' | 'basic' | 'screw' | 'chocolate' | 'crown' | 'heart';

type CakeItem =
  | 'cherry'
  | 'sunflower'
  | 'bear'
  | 'cookie'
  | 'gingerbread'
  | 'heart'
  | 'candle'
  | 'screw-candle'
  | 'topper';

type CakeFont = 'kor1' | 'kor2' | 'kor3' | 'eng1' | 'eng2' | 'eng3';

type Lettering = { color: Color; font: CakeFont; value: string };
type Letter = { name: string; content: string; isPrivate: true };

type CustomCake = {
  sheet: { color: Color };
  cream_top: { cream: CakeCream; color: Color };
  cream_side: { cream: CakeCream; color: Color };
  more: { item: CakeItem[] };
  lettering: Lettering;
};

type ThemeCake = {
  theme: 'SOJU' | 'HARRYPOTER' | 'MONEY' | 'PRINCESS' | 'ANiMAL' | 'PLANT';
  lettering: Lettering;
};

type CustomCakeStep = { shape: 'custom'; letter: Letter } & CustomCake;
type ThemeCakeStep = { shape: 'theme'; letter: Letter } & ThemeCake;
type CakeStep = CustomCakeStep | ThemeCakeStep;
