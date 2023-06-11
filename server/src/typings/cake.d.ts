type CakeItem = 'BEAR' | 'CHERRY' | 'SMILE';

type CakeCustom<T> = {
  color: string;
  shape: T;
};

//FIXME: cream & item enum
type CustomCake = {
  sheetColor: string;
  topCream: CakeCustom<'round' | 'big'>;
  sideCream: CakeCustom<'round' | 'big'>;
  item: CakeItem[];
  lettering?: CakeCustom<string>;
};

type Letter = {
  id: number;
  userId: string;
  createdAt: string;
  name: string;
  content: string;
  isPrivate: boolean;
};

type CakeType =
  | 'BASIC'
  | 'HARRYPOTTER'
  | 'ANIMAL'
  | 'SOJU'
  | 'MONEY'
  | 'PLANT'
  | 'PRINCESS';

type Cake = {
  id: number;
  letterId: number;
  cakeType: CakeType;
  customCake?: CustomCake;
};

type User = {
  id: number;
  nickname: string; // FIXME: same with data (to be user)
  cake?: Cake[];
};
