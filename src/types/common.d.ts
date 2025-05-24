type CustomPopup = {
  title: 'Alert' | 'Welcome!';
  content: string;
  hasIcon?: boolean;
  onConfirm: () => void;
};

type Filter = {
  label: string;
  value: string;
};

type Nullable<T> = T | undefined | null;
