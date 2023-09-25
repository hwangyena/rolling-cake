export const SELECT_ITEM = {
  cream: { label: '생크림', data: ['none', 'basic', 'screw', 'chocolate', 'crown', 'heart'] },
  color: {
    label: '색상',
    data: ['#fefce1', '#f7cac7', '#cffdcb', '#c6f4f8', '#e9d5fc', '#6d3710'],
  },
  item: {
    label: '아이템',
    data: [
      'cherry',
      'sunflower',
      'bear',
      'cookie',
      'gingerbread',
      'heart',
      'candle',
      'screw-candle',
      'topper',
    ],
  },
  font: { label: '글씨체', data: ['kor1', 'kor2', 'kor3', 'eng1', 'eng2', 'eng3'] },
};

export const STEP: Record<string, Step> = {
  shape: {
    title: '케이크 모양을 선택해줘',
    nextPath: 'sheet',
  },
  theme: {
    title: '케이크 모양을 선택해줘',
    nextPath: 'lettering',
  },
  sheet: {
    title: '케이크 시트색을 선택해줘!',
    nextPath: 'cream_top',
    select: ['color'],
  },
  cream_top: {
    title: '생크림을 올려봐!',
    nextPath: 'cream_side',
    select: ['cream', 'color'],
  },
  cream_side: {
    title: '옆면 생크림도 채워줘!',
    nextPath: 'more',
    select: ['cream', 'color'],
  },
  more: {
    title: '케이크를 더 꾸며볼까?',
    nextPath: 'lettering',
    select: ['item'],
  },
  lettering: {
    title: '레터링 문구를 작성해줘!',
    nextPath: 'letter',
    select: ['font', 'color'],
  },
  letter: {
    title: '숨겨왔던 너의 마음을 적어ㅂr',
    nextPath: 'complete',
  },
  complete: {
    title: '',
    nextPath: null,
  },
};

export const CUSTOM_STEP: (keyof typeof STEP)[] = [
  'sheet',
  'cream_top',
  'cream_side',
  'more',
  'lettering',
  'letter',
];
export const THEME_STEP: (keyof typeof STEP)[] = ['theme', 'lettering', 'letter'];

export const STEP_CUSTOM_INIT = {
  shape: 'custom',
  sheet: { color: '#fefce1' },
  cream_top: { color: '#fefce1', cream: 'none' },
  cream_side: { color: '#fefce1', cream: 'none' },
  more: { item: [] },
  lettering: { color: '#fefce1', font: 'kor1' },
  letter: { name: '', content: '', private: true },
};

export const STEP_THEME_INIT = {
  shape: 'theme',
  theme: 'soju',
  lettering: { color: '#fefce1', font: 'kor1' },
  letter: { name: '', content: '', private: true },
};
