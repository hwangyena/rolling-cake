export const MAKE_STEP = [
  { step: 1, path: 'shape', title: '케이크 모양을 선택해줘', nextPath: 'sheet' },
  { step: 2, path: 'sheet', title: '케이크 시트색을 선택해줘!', nextPath: 'cream1' },
  { step: 3, path: 'cream1', title: '생크림을 올려봐!', nextPath: 'cream2' },
  { step: 4, path: 'cream2', title: '옆면 생크림도 채워줘!', nextPath: 'more' },
  { step: 5, path: 'more', title: '케이크를 더 꾸며볼까?', nextPath: 'lettering' },
  { step: 6, path: 'lettering', title: '레터링 문구를 작성해줘!', nextPath: 'letter' },
  { step: 7, path: 'letter', title: '숨겨왔던 너의 마음을 적어ㅂr', nextPath: 'complete' },
];
