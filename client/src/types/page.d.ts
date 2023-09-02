/* Make page */
type Step = {
  title: string;
  nextPath: string;
  select?: (keyof typeof SELECT_ITEM)[];
};

type MakeCustomAtom = {
  sheet: { color: string };
  topCream: { shape: string; color: string };
  sideCream: { shape: string; color: string };
  item: { value?: ('BEAR' | 'CHERRY' | 'SMILE')[] };
  lettering: {};
};

type MakeThemeAtom = {
  shape: { type: string };
  //TODO: BE 타입과 비교해 해당 부분 개발 필요 - 각 step별 atom 저장 필요
};
