type Login = {
  code: number;
  message: string;
  content: User & {
    token: string;
  };
};

type Color = 'ivory' | 'red' | 'green' | 'blue' | 'purple' | 'brown';
type CakeCream = 'none' | 'basic' | 'screw' | 'chocolate' | 'crown' | 'heart';
type CakeFont = 'font1' | 'font2' | 'font3' | 'font4' | 'font5';
type CakeTheme = 'soju' | 'harrypotter' | 'princess';
type CakeItem =
  | 'cherry'
  | 'cherry-tree'
  | 'cookie'
  | 'gingerbread'
  | 'green-candle'
  | 'green-topper'
  | 'heart'
  | 'red-candle'
  | 'red-topper'
  | 'sunflower'
  | 'teddy-bear';

type Lettering = { color: Color; font: CakeFont; value: string };
type Letter = { name: string; content: string; isPrivate: true };

type CustomCake = {
  shape: 'custom';
  sheet: { color: Color };
  cream_top: { cream: CakeCream; color: Color };
  cream_side: { cream: CakeCream; color: Color };
  more: { item: CakeItem[] };
  lettering: Lettering;
  letter: Letter;
};
type ThemeCake = {
  shape: 'theme';
  theme: CakeTheme;
  lettering: Lettering;
  letter: Letter;
};

type CakeStep = CustomCake | ThemeCake;
type CakeStepKey = keyof CustomCake | keyof ThemeCake;
type ExcludeLetter = Omit<CustomCake, 'shape' | 'letter'> | Omit<ThemeCake, 'shape' | 'letter'>;

/* Make page */
type Item = 'cream' | 'color' | 'item' | 'font';

type StepDisplay = {
  title: string;
  next: (CakeStepKey | 'complete') | null;
  select?: Item[];
};

/** api */
type CreateCakeReq = {
  type: 'CUSTOM' | 'THEME';
  cake: ExcludeLetter;
  cakeImageBase64: string;
  userId: string;
  letter: Letter;
};
