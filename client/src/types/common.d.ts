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
  title: string;
  nextPath: string;
  select?: (keyof typeof SELECT_ITEM)[];
};
