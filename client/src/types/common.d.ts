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
