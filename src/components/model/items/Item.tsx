import {
  CherryModel,
  CherryTreeModel,
  CookieModel,
  GingerbreadModel,
  GreenCandleModel,
  GreenTopperModel,
  HeartModel,
  RedCandleModel,
  RedTopperModel,
  SunflowerModel,
  TeddyBearModel,
} from './index';

const Item = ({ item }: { item: CakeItem }) => {
  switch (item) {
    case 'teddy-bear':
      return <TeddyBearModel />;
    case 'cherry':
      return <CherryModel />;
    case 'cherry-tree':
      return <CherryTreeModel />;
    case 'cookie':
      return <CookieModel />;
    case 'gingerbread':
      return <GingerbreadModel />;
    case 'green-candle':
      return <GreenCandleModel />;
    case 'green-topper':
      return <GreenTopperModel />;
    case 'heart':
      return <HeartModel />;
    case 'red-candle':
      return <RedCandleModel />;
    case 'red-topper':
      return <RedTopperModel />;
    case 'sunflower':
      return <SunflowerModel />;
  }
};

export default Item;
