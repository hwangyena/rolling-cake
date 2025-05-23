export const SELECT_ITEM: Record<Item, { label: string; data: string[] }> = {
  cream: { label: '생크림', data: ['none', 'basic', 'screw', 'chocolate', 'crown', 'heart'] },
  color: {
    label: '색상',
    data: ['ivory', 'red', 'green', 'blue', 'purple', 'brown'],
  },
  item: {
    label: '아이템',
    data: [
      'cherry',
      'cherry-tree',
      'cookie',
      'teddy-bear',
      'gingerbread',
      'sunflower',
      'heart',
      'green-candle',
      'red-candle',
      'green-topper',
      'red-topper',
    ],
  },
  font: { label: '글씨체', data: ['font1', 'font2', 'font3', 'font4', 'font5', 'font6'] },
};

export const CAKE_SHAPE: Filter[] = [
  { label: '직접 만들기', value: 'CUSTOM' },
  { label: '테마를 선택해 만들기', value: 'THEME' },
];

export const CAKE_THEME: Filter[] = [
  { label: '해리포터 케이크', value: 'harrypotter' },
  { label: '소주병 케이크', value: 'soju' },
  { label: '왕관 케이크', value: 'princess' },
];

// step에서 보여줘야하는 정보
export const CUSTOM_STEP: Record<keyof CustomCake, StepDisplay> = {
  shape: {
    // FIXME: remove this
    title: '케이크 모양을 선택해줘',
    next: 'sheet',
  },
  sheet: {
    title: '케이크 시트색을 선택해줘!',
    next: 'cream_top',
    select: ['color'],
  },
  cream_top: {
    title: '생크림을 올려봐!',
    next: 'cream_side',
    select: ['cream', 'color'],
  },
  cream_side: {
    title: '옆면 생크림도 채워줘!',
    next: 'more',
    select: ['cream', 'color'],
  },
  more: {
    title: '케이크를 더 꾸며볼까?',
    next: 'lettering',
    select: ['item'],
  },
  lettering: {
    title: '레터링 문구를 작성해줘!',
    next: 'letter',
    select: ['font', 'color'],
  },
  letter: {
    title: '숨겨왔던 너의 마음을 적어ㅂr',
    next: 'complete',
  },
};

export const THEME_STEP: Record<keyof ThemeCake, StepDisplay> = {
  shape: {
    title: '케이크 모양을 선택해줘',
    next: 'theme',
  },
  theme: {
    title: '케이크 모양을 선택해줘',
    next: 'lettering',
  },
  lettering: {
    title: '레터링 문구를 작성해줘!',
    next: 'letter',
    select: ['font'],
  },
  letter: {
    title: '숨겨왔던 너의 마음을 적어ㅂr',
    next: 'complete',
  },
};

// step에서 저장해야하는 정보
export const CUSTOM_STEP_STORE: CustomCake = {
  shape: 'custom',
  sheet: { color: 'ivory' },
  cream_top: { color: 'ivory', cream: 'none' },
  cream_side: { color: 'ivory', cream: 'none' },
  more: { item: [] },
  lettering: { color: 'ivory', font: 'font1', value: '' },
  letter: { name: '', content: '', isPrivate: false },
};

export const THEME_STEP_STORE: ThemeCake = {
  shape: 'theme',
  theme: 'harrypotter',
  lettering: { color: 'ivory', font: 'font5', value: '' },
  letter: { name: '', content: '', isPrivate: false },
};
