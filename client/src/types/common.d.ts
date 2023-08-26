type Popup = {
  title: string;
  content: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

type FocusInput = {
  maxLength?: number;
  label?: string;
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
