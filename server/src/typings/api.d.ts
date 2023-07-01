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
  userId: string;
  letterId: number;
  cakeType: CakeType;
  customCake?: CustomCake;
};

type CreateCake = Pick<Cake, 'userId' | 'cakeType' | 'customCake'>;

type User = {
  id: string;
  name: string;
  cake?: Cake[];
};
