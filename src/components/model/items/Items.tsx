import { memo, useCallback } from 'react';
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
  const hasItem = useCallback((item: CakeItem): boolean => !!items.includes(item), [items]);

  return (
    <>
      <TeddyBearModel visible={hasItem('teddy-bear')} />
      <CherryModel hasTopCream={hasTopCream} visible={hasItem('cherry')} />
      <CherryTreeModel visible={hasItem('cherry-tree')} />
      <CookieModel visible={hasItem('cookie')} />
      <GingerbreadModel visible={hasItem('gingerbread')} />
      <GreenCandleModel visible={hasItem('green-candle')} />
      <GreenTopperModel visible={hasItem('green-topper')} />
      <HeartModel visible={hasItem('heart')} />
      <RedCandleModel visible={hasItem('red-candle')} />
      <RedTopperModel visible={hasItem('red-topper')} />
      <SunflowerModel visible={hasItem('sunflower')} />
    </>
  );
};

export default memo(Items);
