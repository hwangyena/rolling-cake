type Popup = {
  title: string;
  content: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

type CustomPopup = {
  title: 'Alert' | 'Welcome!';
  content: string;
  hasIcon?: boolean;
  onConfirm: () => void;
};

type FocusInput = {
  maxLength?: number;
  label?: string;
  defaultValue?: string;
  onConfirm?: (value: string) => void;
};

/* Step page */
type Step = {
  title: string;
  nextPath: string;
  select?: (keyof typeof SELECT_ITEM)[];
};
