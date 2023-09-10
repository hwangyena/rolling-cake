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
  onConfirm?: (value: string) => Promise<void>;
};

/* Make page */
type Step = {
  title: string;
  nextPath: string | null;
  select?: (keyof typeof SELECT_ITEM)[];
};
