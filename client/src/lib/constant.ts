export const SELECT_ITEM = {
  cream: { label: '생크림', data: ['none', 'basic', 'screw', 'chocolate', 'crown', 'heart'] },
  color: {
    label: '색상',
    data: ['#fefce1', '#f7cac7', '#cffdcb', '#c6f4f8', '#e9d5fc', '#6d3710'],
  },
  // TODO: add item
  item: { label: '아이템', data: [] },
  font: { label: '글씨체', data: [] },
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
    select: ['color', 'cream'],
  },
  cream_side: {
    title: '옆면 생크림도 채워줘!',
    nextPath: 'more',
    select: ['color', 'cream'],
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
    nextPath: '',
  },
};
