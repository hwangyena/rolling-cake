type Popup = {
  title: string;
  content: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

/* Step page */
type Step = {
  step: number;
  path: 'shape' | 'sheet' | 'cream_top' | 'cream_side' | 'more' | 'lettering' | 'letter';
  title: string;
  nextPath: string;
  select?: (keyof typeof SELECT_ITEM)[];
  noLabel?: boolean;
};
