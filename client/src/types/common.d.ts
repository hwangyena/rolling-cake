type Popup = {
  title: string;
  content: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

type CustomPopup = {
  title: string;
  content: string;
  right: number;
  bottom: number;
  width?: string;
  hasIcon?: boolean;
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
