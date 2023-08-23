export const SELECT_ITEM = {
  cream: { label: '생크림', data: ['none', 'basic', 'screw', 'chocolate', 'crown', 'heart'] },
  color: { label: '색상', data: ['#fefce1', '#f7cac7', '#cffdcb', '#c6f4f8', '#e9d5fc'] },
  // TODO: add item
  item: { label: '아이템', data: [] },
  font: { label: '글씨체', data: [] },
};

export const MAKE_STEP: Step[] = [
  { step: 1, path: 'shape', title: '케이크 모양을 선택해줘', nextPath: 'sheet' },
  {
    step: 2,
    path: 'sheet',
    title: '케이크 시트색을 선택해줘!',
    nextPath: 'cream_top',
    select: ['color'],
    noLabel: true,
  },
  {
    step: 3,
    path: 'cream_top',
    title: '생크림을 올려봐!',
    nextPath: 'cream_side',
    select: ['color', 'cream'],
  },
  {
    step: 4,
    path: 'cream_side',
    title: '옆면 생크림도 채워줘!',
    nextPath: 'more',
    select: ['color', 'cream'],
  },
  {
    step: 5,
    path: 'more',
    title: '케이크를 더 꾸며볼까?',
    nextPath: 'lettering',
    select: ['item'],
  },
  {
    step: 6,
    path: 'lettering',
    title: '레터링 문구를 작성해줘!',
    nextPath: 'letter',
    select: ['font', 'color'],
  },
  { step: 7, path: 'letter', title: '숨겨왔던 너의 마음을 적어ㅂr', nextPath: 'complete' },
];
