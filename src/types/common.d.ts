type Popup = {
  title: string;
  content?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  hideCancel?: boolean;
  bottomNode?: ReactNode;
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
  autoSize?: boolean;
  onConfirm?: (value: string) => Promise<void>;
};

type Snackbar = {
  text: string;
};

type Filter = {
  label: string;
  value: string;
};
