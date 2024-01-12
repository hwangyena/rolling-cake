import { Fragment, memo } from 'react';
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

const Items = ({ items, hasTopCream }: { items: CakeItem[]; hasTopCream: boolean }) => {
  const render = (item: CakeItem) => {
    switch (item) {
      case 'teddy-bear':
        return <TeddyBearModel />;
      case 'cherry':
        return <CherryModel hasTopCream={hasTopCream} />;
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

  return items.map((item) => <Fragment key={item}>{render(item)}</Fragment>);
};

export default memo(Items);
